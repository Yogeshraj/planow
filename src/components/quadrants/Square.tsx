import React, { FC, useEffect, useState } from "react";
import DragIcon from "../Icons/DragIcon";
import SelectIcon from "../Icons/SelectIcon";
import RemoveIcon from "../Icons/RemoveIcon";
import { SquareProps } from "@/interfaces/interfaces";
// import { Draggable, Droppable } from "react-beautiful-dnd";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import SelectedIcon from "../Icons/SelectedIcon";

const Square: FC<SquareProps> = ({
  color,
  boardTitle,
  subtitle,
  tasks,
  deleteTask,
  completeTask,
  index,
  boardID,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 p-2.5 ${
        index === 4 ? `last-square` : ""
      }`}
    >
      <div className='flex flex-col'>
        <div
          className={`flex border-b border-${color}-400 justify-between p-2 pt-0`}
        >
          <div className={`text-${color}-700 font-semibold`}>{boardTitle}</div>
          <div className={`text-${color}-700`}>{subtitle}</div>
        </div>

        {isMounted ? (
          <Droppable droppableId={boardID}>
            {(provided) => (
              <div
                className='characters min-h-[32vh] max-h-[32vh] overflow-hidden overflow-y-scroll'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks
                  .sort((a: any, b: any) => a.position - b.position)
                  ?.map(({ id, title, completed }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div
                            className='rounded-[10px] border-white border-2 bg-half-white p-1.5 my-2.5 flex justify-between cursor-grab'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className='flex flex-1'>
                              <DragIcon className='mr-2.5 cursor-grab' />
                              <div
                                className={`half-black flex-1 mr-2.5 strikethrough relative ${
                                  completed ? "completed rounded-lg pl-2" : ""
                                }`}
                              >
                                {title}
                              </div>
                            </div>

                            <div className='flex'>
                              {!completed ? (
                                <SelectIcon
                                  className='mr-2.5 cursor-pointer'
                                  onClick={() => completeTask(id, boardTitle)}
                                />
                              ) : (
                                <SelectedIcon className='mr-2.5' />
                              )}
                              <RemoveIcon
                                className='cursor-pointer'
                                onClick={() => deleteTask(id, boardTitle)}
                              />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : null}
      </div>
    </div>
  );
};

export default Square;
