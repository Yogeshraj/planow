// import { DragDropContext } from "react-beautiful-dnd";
import { DragDropContext } from "@hello-pangea/dnd";
import Square from "./Square";
import { ColumnType } from "@/utils/enums";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import InputForm from "../sidebar/InputForm";

const boards = [
  {
    board_id: 1,
    boardTitle: "Do",
    boardSubtitle: "Important and Urgent",
    boardColor: "green",
  },
  {
    board_id: 2,
    boardTitle: "Schedule",
    boardSubtitle: "Important but not Urgent",
    boardColor: "blue",
  },
  {
    board_id: 3,
    boardTitle: "Delegate",
    boardSubtitle: "Not Important but Urgent",
    boardColor: "yellow",
  },
  {
    board_id: 4,
    boardTitle: "Limit",
    boardSubtitle: "Not Important and not Urgent",
    boardColor: "red",
  },
  {
    board_id: 5,
    boardTitle: "Later",
    boardSubtitle: "Put it here decide later...",
    boardColor: "purple",
  },
];

const Quadrants = ({
  mainData,
  deleteTask,
  updateData,
  reorderTasks,
  // boards,
}: any) => {
  const handleDeleteTask = (id: string) => {
    deleteTask({ taskId: id });
  };

  const completeTask = (id: string) => {
    updateData(id);
  };

  function handleOnDragEnd(result: any) {
    const { source, destination, draggableId } = result;

    console.log(source, destination);

    // If user tries to drop in an unknown destination
    if (!result.destination) return;

    const sourceBoardId = Number(source.droppableId);
    const destBoardId = Number(destination.droppableId);

    // STEP 1: Split items by column
    const sourceColumnItems = mainData
      .filter((task: { board_id: number }) => task.board_id === sourceBoardId)
      .sort(
        (a: { position: number }, b: { position: number }) =>
          a.position - b.position
      );

    const destColumnItems = mainData
      .filter((task: { board_id: number }) => task.board_id === destBoardId)
      .sort(
        (a: { position: number }, b: { position: number }) =>
          a.position - b.position
      );

    // ***********************
    // CASE 1 — SAME COLUMN
    // ***********************
    if (sourceBoardId === destBoardId) {
      const reordered = Array.from(sourceColumnItems);

      const [removed] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, removed);

      // Reassign createdDate to maintain correct order
      const updatedSameColumn = reordered.map((task: any, i: number) => ({
        id: task.id,
        position: i,
        board_id: task.board_id,
      }));

      reorderTasks(updatedSameColumn);
      return;
    }

    // ***********************
    // CASE 2 — MOVE TO DIFFERENT COLUMN
    // ***********************
    const newSource = Array.from(sourceColumnItems);
    const [removed] = newSource.splice(source.index, 1);

    const newDest = Array.from(destColumnItems);
    newDest.splice(destination.index, 0, removed);

    // Update task boardNames + ordering
    const sourceUpdates = newSource.map((task: any, index: number) => ({
      id: task.id,
      position: index,
      board_id: task.board_id,
    }));

    const destUpdates = newDest.map((task: any, index: number) => ({
      id: task.id,
      board_id: destBoardId,
      position: index,
    }));

    reorderTasks([...sourceUpdates, ...destUpdates]);
    // const updatedSource = newSource.map((task: any, i: number) => ({
    //   ...task,
    //   createdDate: i,
    // }));

    // const updatedDest = newDest.map((task: any, i: number) => ({
    //   ...task,
    //   boardName: destination.droppableId,
    //   createdDate: i,
    // }));
    // const updatedMainData = [
    //   ...mainData.filter(
    //     (task: { boardName: String }) =>
    //       task.boardName !== source.droppableId &&
    //       task.boardName !== destination.droppableId
    //   ),
    //   ...updatedSource,
    //   ...updatedDest,
    // ];

    // reorderTasks(updatedMainData);

    // if the user drags and drops back in the same position
    // if (
    //   source.droppableId === destination.droppableId &&
    //   source.index === destination.index
    // )
    //   return;

    // // If the user drops within the same column but in a different position
    // if (source.droppableId === destination.droppableId) {
    //   const sourceItems = Array.from(
    //     mainData[source.droppableId as keyof typeof ColumnType] || []
    //   );
    //   // console.log("sourceItems", sourceItems);
    //   const droppableId = source.droppableId;
    //   const [reorderedItem] = sourceItems.splice(result.source.index, 1);
    //   sourceItems.splice(result.destination.index, 0, reorderedItem);

    //   updateData({ ...mainData, [droppableId]: sourceItems });
    //   return;
    // }

    // if (source.droppableId !== destination.droppableId) {
    //   const sourceItems = Array.from(
    //     mainData[source.droppableId as keyof typeof ColumnType] || []
    //   );
    //   const destinationItems = Array.from(
    //     mainData[destination.droppableId as keyof typeof ColumnType] || []
    //   );

    //   const destinationdroppableId = destination.droppableId;
    //   const sourcedroppableId = source.droppableId;

    //   sourceItems.filter((item: any) => {
    //     item.id === result.draggableId;
    //   });

    //   console.log("sourceItems", sourceItems);
    //   const [reorderedItem] = sourceItems.splice(result.source.index, 1);
    //   destinationItems.splice(result.destination.index, 0, reorderedItem);

    //   const updatedMainData = mainData.map((item) =>
    //     item.id === result.draggableId
    //       ? { ...item, boardName: destinationdroppableId }
    //       : item
    //   );

    //   updateData(updatedMainData);
    //   return;
    // }
  }

  // function handleOnDragEnd(result: any) {
  //   const { source, destination, draggableId } = result;

  //   if (!destination) return;

  //   const sourceBoardId = Number(source.droppableId);
  //   const destBoardId = Number(destination.droppableId);

  //   // Tasks in source board
  //   const sourceTasks = mainData
  //     .filter((task: any) => task.board_id === sourceBoardId)
  //     .sort((a: any, b: any) => a.position - b.position);

  //   // Tasks in destination board
  //   const destTasks = mainData
  //     .filter((task: any) => task.board_id === destBoardId)
  //     .sort((a: any, b: any) => a.position - b.position);

  //   // SAME COLUMN REORDER
  //   if (sourceBoardId === destBoardId) {
  //     const reordered = Array.from(sourceTasks);
  //     const [moved] = reordered.splice(source.index, 1);
  //     reordered.splice(destination.index, 0, moved);

  //     const updatesForDB = reordered.map((task: any, index: number) => ({
  //       id: task.id,
  //       position: index,
  //     }));

  //     reorderTasks(updatesForDB); // ✅ Supabase + UI update
  //     return;
  //   }

  //   // DIFFERENT COLUMN MOVE
  //   const sourceClone = Array.from(sourceTasks);
  //   const [moved] = sourceClone.splice(source.index, 1);

  //   const destClone = Array.from(destTasks);
  //   destClone.splice(destination.index, 0, {
  //     ...moved,
  //     board_id: destBoardId,
  //   });

  // const sourceUpdates = sourceClone.map((task: any, index: number) => ({
  //   id: task.id,
  //   position: index,
  // }));

  // const destUpdates = destClone.map((task: any, index: number) => ({
  //   id: task.id,
  //   board_id: destBoardId,
  //   position: index,
  // }));

  //   console.log("destUpdates", destUpdates);

  //   reorderTasks([...sourceUpdates, ...destUpdates]);
  // }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="border-outlinevariant divide-outlinevariant grid grid-cols-1 divide-x divide-y border sm:grid-cols-2 lg:grid-cols-3">
        {boards?.map((board: any, index: number) => (
          <Square
            key={board.board_id}
            index={index}
            color={board.boardColor}
            boardTitle={board.boardTitle}
            boardID={String(board.board_id)}
            subtitle={board.boardSubtitle}
            tasks={mainData?.filter((data: any) => {
              return data.board_id === board.board_id;
            })}
            deleteTask={handleDeleteTask}
            completeTask={completeTask}
          />
        ))}
        <InputForm />
      </div>
    </DragDropContext>
  );
};

export default Quadrants;
