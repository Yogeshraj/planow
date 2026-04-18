"use client";

import Quadrants from "../../components/quadrants/Quadrants";
import SnackbarLayout from "../../components/snackbar/SnackbarLayout";
import useStore from "../../store/store";
import { useEffect } from "react";

export default function Dashboard() {
  const { snackbar, resetSnackbar, fetchData }: any = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="grid min-h-[calc(100vh-36px)] gap-4">
        <Quadrants />
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
