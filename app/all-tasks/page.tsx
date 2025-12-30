"use client";

import useStore from "../../store/store";
import React, { useEffect, useState } from "react";

const AllTasks = () => {
  const { mainData, boards }: any = useStore();

  // TODO: Define props as proper StateProperties
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    if (boards.length > 0) {
      boards.map((data: any) => {
        setTasks((prevState) => [...prevState, mainData[data]]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="py-5">
        <div className="mb-5 text-xl font-bold">All Tasks</div>
        {tasks.length > 0 &&
          tasks.map((task: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {task?.map((data: any) => {
                  return (
                    <div
                      key={data.id}
                      className="bg-half-white my-2.5 flex justify-between rounded-md border-2 border-white p-2"
                      title={data.boardName}
                    >
                      {data.title}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default AllTasks;
