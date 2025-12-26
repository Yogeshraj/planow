import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { supabase } from "../supabase-client";

const useStore = create(
  persist(
    (set: any, get: any) => ({
      websiteName: "Planow",
      loading: false,
      snackbar: {
        show: false,
        content: "",
        type: "",
      },

      userData: null,
      setUser: (userInfo: any) => {
        set({
          userData: userInfo,
        });
      },

      mainData: [],

      fetchData: async () => {
        set({ loading: true, error: null });

        const userData = get().userData;

        if (userData) {
          try {
            const { data, error } = await supabase
              .from("tasks")
              .select("*")
              .order("position", { ascending: true });

            if (error) {
              throw error;
            }

            set({
              mainData: data ?? [],
              loading: false,
            });
          } catch (err: any) {
            set({
              error: err.message || "Failed to fetch tasks",
              loading: false,
            });
          }
        }
      },

      addTask: async (task: any) => {
        // Snapshot for rollback
        const previousData = get().mainData;
        const userData = get().userData;

        try {
          // Optimistic UI (temporary task in UI)
          const tempTask = {
            ...task,
            id: crypto.randomUUID(),
            completed: false,
            source: userData ? "db" : "local",
          };

          set((state: any) => ({
            ...state,
            mainData: [...state.mainData, tempTask],
          }));

          // Database insert
          if (userData) {
            const { data, error } = await supabase
              .from("tasks")
              .insert(task)
              .select()
              .single();

            // Rollback if error
            if (error || !data) {
              set({
                mainData: previousData,
                snackbar: {
                  show: true,
                  content: error?.message || "Insert failed",
                  type: "error",
                },
              });
              return;
            }

            // Replace temp task with real DB task
            set((state: any) => ({
              ...state,
              mainData: state.mainData.map((t: any) =>
                t.id === tempTask.id ? data : t
              ),
              snackbar: {
                show: true,
                content: "Task added successfully!",
                type: "success",
              },
            }));
          }
        } catch (err: any) {
          set({
            mainData: previousData,
            snackbar: {
              show: true,
              content: err.message || "Something went wrong",
              type: "error",
            },
          });
        }
      },

      updateTaskContent: async (id: string, title: string) => {
        // Save a snapshot for rollback in case of failure
        const previousData = get().mainData;
        const userData = get().userData;

        try {
          // Optimistic UI Update (Single map - best practice)
          set((state: any) => ({
            ...state,
            mainData: state.mainData.map((task: any) =>
              task.id === id
                ? { ...task, title, ...(!userData && { source: "local" }) }
                : task
            ),
            snackbar: {
              show: true,
              content: "Task updated successfully!",
              type: "success",
            },
          }));

          console.log("userData", userData);
          if (userData) {
            console.log("inside");
            // Supabase Update
            const { error } = await supabase
              .from("tasks")
              .update({ title })
              .eq("id", id);

            // Rollback if DB fails
            if (error) {
              console.log("error", error);
              set({
                mainData: previousData,
                snackbar: {
                  show: true,
                  content: error.message,
                  type: "error",
                },
              });
            }
          }
        } catch (err: any) {
          // Rollback on unexpected errors
          set({
            mainData: previousData,
            snackbar: {
              show: true,
              content: err.message || "Something went wrong",
              type: "error",
            },
          });
        }
      },

      updateData: async (id: string) => {
        // Save a snapshot for rollback in case of failure
        const previousData = get().mainData;
        const userData = get().userData;

        try {
          // Optimistic UI Update (Single map - best practice)
          set((state: any) => ({
            ...state,
            mainData: state.mainData.map((task: any) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
            snackbar: {
              show: true,
              content: "Task updated successfully!",
              type: "success",
            },
          }));

          if (userData) {
            // Supabase Update
            const { error } = await supabase
              .from("tasks")
              .update({ completed: true })
              .eq("id", id);

            // Rollback if DB fails
            if (error) {
              set({
                mainData: previousData,
                snackbar: {
                  show: true,
                  content: error.message,
                  type: "error",
                },
              });
            }
          }
        } catch (err: any) {
          // Rollback on unexpected errors
          set({
            mainData: previousData,
            snackbar: {
              show: true,
              content: err.message || "Something went wrong",
              type: "error",
            },
          });
        }
      },

      reorderTasks: async (
        tasks: {
          id: string;
          title: string;
          position: number;
          board_id?: number;
          completed?: boolean;
        }[]
      ) => {
        const userData = get().userData;

        set((state: any) => ({
          mainData: state.mainData.map((task: any) => {
            const updated = tasks.find((t) => t.id === task.id);
            return updated
              ? {
                  ...task,
                  position: updated.position,
                  ...(updated.board_id && { board_id: updated.board_id }),
                }
              : task;
          }),
        }));

        if (userData) {
          const { data, error } = await supabase
            .rpc("reorder_tasks", { payload: tasks }) // tasks is a JS array -> JSON
            .select(); // .select() not required but useful to return rows in some clients

          if (error) {
            set({
              snackbar: {
                show: true,
                content: "Reorder failed",
                type: "error",
              },
            });
            return;
          }
        }
      },

      deleteTask: async ({ taskId }: { taskId: string }) => {
        // Save a snapshot for rollback in case of failure
        const previousData = get().mainData;
        const userData = get().userData;

        try {
          // Optimistic UI Update (Single map - best practice)
          set((state: any) => ({
            ...state,
            mainData: state.mainData.filter((task: any) => task.id !== taskId),
            snackbar: {
              show: true,
              content: "Task deleted!",
              type: "success",
            },
          }));

          if (userData) {
            // Supabase Update
            const { error } = await supabase
              .from("tasks")
              .delete()
              .eq("id", taskId);

            // Rollback if DB fails
            if (error) {
              set({
                mainData: previousData,
                snackbar: {
                  show: true,
                  content: error.message,
                  type: "error",
                },
              });
            }
          }
        } catch (err: any) {
          // Rollback on unexpected errors
          set({
            mainData: previousData,
            snackbar: {
              show: true,
              content: err.message || "Something went wrong",
              type: "error",
            },
          });
        }
      },

      resetSnackbar: () => {
        set((state: any) => ({
          ...state,
          snackbar: {
            show: false,
            content: "",
            type: "",
          },
        }));
      },

      syncLocalToSupabase: async () => {
        console.log("syncLocalToSupabase starts");
        const { mainData, userData } = get();

        if (!userData) return;

        const localTasks = mainData.filter((t: any) => t.source === "local");

        if (localTasks.length === 0) return;

        try {
          // Add user_id to all tasks
          const syncPayload = localTasks.map((task: any) => ({
            board_id: task.board_id,
            completed: task.completed,
            position: task.position,
            title: task.title,
          }));

          const { data, error } = await supabase
            .from("tasks")
            .upsert(syncPayload, {
              onConflict: "id", // important (must be unique/PK)
            })
            .select();

          if (error) {
            console.error("Sync error:", error.message);
            return;
          }

          // Now get final fresh data from DB
          const { data: freshData } = await supabase
            .from("tasks")
            .select("*")
            .eq("user_id", userData.id)
            .order("position");

          // Replace local state with DB state
          set({
            mainData: freshData,
            snackbar: {
              show: true,
              content: "Offline tasks synced successfully!",
              type: "success",
            },
          });
        } catch (err) {
          console.error("Sync failed", err);
        }
      },
    }),

    {
      name: "answer-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
