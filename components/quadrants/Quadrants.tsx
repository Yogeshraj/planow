import { DragDropContext } from "@hello-pangea/dnd";
import Square from "./Square";
import InputForm from "../inputForm";
import { boards } from "@/utils/utils";
import useStore from "@/store/store";

const Quadrants = () => {
  const { mainData, deleteTask, updateData, reorderTasks }: any = useStore();

  const handleDeleteTask = (id: string) => {
    deleteTask({ taskId: id });
  };

  const completeTask = (id: string) => {
    updateData(id);
  };

  function handleOnDragEnd(result: any) {
    const { source, destination } = result;

    // If user tries to drop in an unknown destination
    if (!result.destination) return;

    // If user tries to drop in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

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
  }

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
              return data.board_id === board.board_id && !data.deleted_at;
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
