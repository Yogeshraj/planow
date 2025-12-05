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
    <div className='container min-h-min'>
      <div className='grid  gap-4'>
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
    </div>
  );
}
