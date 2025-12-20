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
  const [hoveredDeleteId, setHoveredDeleteId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bgColorVariants: Record<string, string> = {
    green: "bg-qonebg/32",
    blue: "bg-qtwobg/32",
    yellow: "bg-qthreebg/32",
    red: "bg-qfourbg/32",
    purple: "bg-qfivebg/32",
  };

  const textColorVariants: Record<string, string> = {
    green: "text-qone",
    blue: "text-qtwo",
    yellow: "text-qthree",
    red: "text-qfour",
    purple: "text-qfive",
  };

  const textColorVariantsOpacity: Record<string, string> = {
    green: "text-qone/64",
    blue: "text-qtwo/64",
    yellow: "text-qthree/64",
    red: "text-qfour/64",
    purple: "text-qfive/64",
  };

  const headerColorVariants: Record<string, string> = {
    green: "bg-qoneContainerBg/4",
    blue: "bg-qtwoContainerBg/4",
    yellow: "bg-qthreeContainerBg/4",
    red: "bg-qfourContainerBg/4",
    purple: "bg-qfiveContainerBg/4",
  };

  const startEditing = (id: string, title: string) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const submitEdit = (id: string) => {
    if (!editedTitle.trim()) return;

    // updateTaskTitle(id, editedTitle); // your API / state update
    setEditingId(null);
    setEditedTitle("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedTitle("");
  };

  return (
    <div
      className={`${bgColorVariants[color]} ${
        index === 4 ? `last-square` : ""
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`${headerColorVariants[color]} flex justify-between p-2.5`}
        >
          <div className={`${textColorVariants[color]} text-sm font-medium`}>
            {boardTitle}
          </div>
          <div
            className={`${textColorVariantsOpacity[color]} text-sm font-medium`}
          >
            {subtitle}
          </div>
        </div>

        {isMounted ? (
          <Droppable droppableId={boardID}>
            {(provided) => (
              <div
                className={`characters ${index === 4 ? `max-h-[89vh] min-h-[89vh]` : "max-h-[42vh] min-h-[42vh]"} overflow-hidden overflow-y-scroll px-2.5`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks
                  .sort((a: any, b: any) => a.position - b.position)
                  ?.map(({ id, title, completed }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              className={`border-backgroundbg/4 hover:bg-backgroundbg/8 my-2.5 flex cursor-grab justify-between rounded-[10px] border p-1.5 hover:border-dashed ${
                                snapshot.isDragging
                                  ? "bg-backgroundbg/8 border-dashed"
                                  : hoveredDeleteId === id
                                    ? "bg-errorbg hover:bg-errorbg"
                                    : completed
                                      ? "bg-background borer-bgbackgroundbg/16 border-dashed"
                                      : "bg-backgroundbg/4"
                              } ${
                                snapshot.draggingOver
                                  ? "border-2 border-blue-500 bg-blue-50"
                                  : "border border-transparent"
                              } `}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="flex flex-1">
                                <DragIcon className="mr-1 cursor-grab" />
                                {editingId === id ? (
                                  <textarea
                                    autoFocus
                                    value={editedTitle}
                                    onChange={(e) =>
                                      setEditedTitle(e.target.value)
                                    }
                                    onBlur={() => submitEdit(id)}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        submitEdit(id);
                                      }
                                      if (e.key === "Escape") {
                                        cancelEdit();
                                      }
                                    }}
                                    className="w-full resize-none rounded border px-2 py-1"
                                  />
                                ) : (
                                  <div
                                    onDoubleClick={() =>
                                      startEditing(id, title)
                                    }
                                    className={`half-black text-backgroundbg/80 relative mr-2.5 flex-1 pl-1.5 ${
                                      completed
                                        ? "text-success rounded-lg line-through"
                                        : ""
                                    }`}
                                  >
                                    {title}
                                  </div>
                                )}
                              </div>

                              <div className="flex">
                                {/* <div
                                className="mr-2.5 cursor-pointer"
                                onClick={() => startEditing(id, title)}
                              >
                                Edit
                              </div> */}

                                <SelectIcon
                                  className="mr-2.5 cursor-pointer"
                                  isSelected={completed}
                                  onClick={() => completeTask(id, boardTitle)}
                                />

                                <RemoveIcon
                                  className="cursor-pointer"
                                  onClick={() => deleteTask(id, boardTitle)}
                                  isHovered={hoveredDeleteId === id}
                                  onHover={(hover) =>
                                    setHoveredDeleteId(hover ? id : null)
                                  }
                                />
                              </div>
                            </div>
                          );
                        }}
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
