import Quadrants from "@/components/quadrants/Quadrants";
import SnackbarLayout from "@/components/snackbar/SnackbarLayout";
import useStore from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const {
    mainData,
    deleteTask,
    snackbar,
    resetSnackbar,
    updateData,
    reorderTasks,
    boards,
    fetchData,
  }: any = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!mainData) {
    return "Loading";
  }

  return (
    <>
      <div className='sr-only'>
        <h1>Planow – Prioritize Tasks with the Eisenhower Matrix</h1>

        <p>
          Planow is a productivity and task management app based on the
          Eisenhower Matrix. It helps you organize your tasks into four
          quadrants—Do, Schedule, Delegate, and Limit—so you always know what to
          focus on next.
        </p>

        <h2>Smart To-Do List Designed for Productivity</h2>
        <p>
          Planow makes it easy to manage daily tasks, organize priorities,
          reduce stress, and stay productive using proven time-management
          techniques like the priority matrix and GTD workflow.
        </p>

        <h2>Why Planow?</h2>
        <ul>
          <li>Eisenhower Matrix based decision making</li>
          <li>Drag-and-drop task organization</li>
          <li>Clean interface and distraction-free productivity</li>
          <li>Works on mobile and desktop</li>
        </ul>

        <p>
          Whether you&#x201B;re a student, developer, freelancer, or
          professional, Planow helps you focus on what truly matters by
          organizing your to-dos with clarity and intention.
        </p>
      </div>

      <div className='grid gap-4 min-h-[94vh]'>
        <Quadrants
          mainData={mainData}
          deleteTask={deleteTask}
          updateData={updateData}
          reorderTasks={reorderTasks}
          boards={boards}
        />
      </div>
      {snackbar.show && (
        <SnackbarLayout
          snackbarProperties={snackbar}
          resetSnackbar={resetSnackbar}
        />
      )}
    </>
  );
}
