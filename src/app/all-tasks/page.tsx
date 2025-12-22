"use client";

import useStore from "@/store/store";
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
    <div className='container'>
      <div className='py-5'>
        <div className='text-xl font-bold mb-5'>All Tasks</div>
        {tasks.length > 0 &&
          tasks.map((task: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {task?.map((data: any) => {
                  return (
                    <div
                      key={data.id}
                      className='rounded-md border-white border-2 bg-half-white p-2 my-2.5 flex justify-between'
                      title={data.boardName}>
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
