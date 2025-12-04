import React, { useEffect, useState } from "react";
import ToogleSwitch from "../toogleSwtich/ToogleSwitch";
import AddIcon from "../Icons/AddIcon";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import useStore from "@/store/store";

const InputForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const { mainData, addTask }: any = useStore();

  const [radioState, setRadioState] = useState({
    important: 2,
    urgent: 2,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setRadioState({
        important: 2,
        urgent: 2,
      });
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (data: any) => {
    let boardName = "later";
    let boardID = 5;
    const { inputText, important, urgent } = data;

    if (important === "yes" && urgent === "yes") {
      boardName = "Do";
      boardID = 1;
    } else if (important === "yes" && urgent === "no") {
      boardName = "Schedule";
      boardID = 2;
    } else if (important === "no" && urgent === "yes") {
      boardName = "Delegate";
      boardID = 3;
    } else if (important === "no" && urgent === "no") {
      boardName = "Limit";
      boardID = 4;
    } else if (important === "yes" && urgent === "neutral") {
      boardName = "Schedule";
      boardID = 2;
    } else if (important === "no" && urgent === "neutral") {
      boardName = "Limit";
      boardID = 4;
    } else if (important === "neutral" && urgent === "yes") {
      boardName = "Delegate";
      boardID = 3;
    } else if (important === "neutral" && urgent === "no") {
      boardName = "Limit";
      boardID = 4;
    } else {
      boardName = "Later";
      boardID = 5;
    }

    const tasksInBoard = mainData
      .filter((task: { board_id: number }) => task.board_id === boardID)
      .sort(
        (a: { position: number }, b: { position: number }) =>
          a.position - b.position
      );

    console.log("tasksInBoard", tasksInBoard);

    const lastIndex =
      tasksInBoard.length > 0
        ? tasksInBoard[tasksInBoard.length - 1].position
        : -1; // no items yet → new task gets order_index = 0

    addTask({
      title: inputText,
      completed: false,
      board_id: boardID,
      position: lastIndex + 1,
    });
  };

  return (
    <form
      className='bg-half-purple-100 rounded-2xl p-4 flex flex-col gap-2.5 justify-evenly'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <textarea
          className='bg-half-white placeholder:text-slate-400 w-full border rounded-lg focus:outline-none text-sm min-h-[15vh] p-[15px]'
          placeholder='Type in here...'
          {...register("inputText", { required: true })}
        ></textarea>
      </div>
      <div className='bg-half-white rounded-xl border-white border-2 flex justify-between flex-col xl:flex-row'>
        <div className='p-2 flex-1 flex flex-col border-r-2 border-half-white'>
          <div className='text-[11px] font-medium mb-2'>Important</div>
          <div className='bg-half-white rounded-xl border-white border-2 py-2'>
            <ToogleSwitch
              register={register}
              id='important'
              setRadioState={setRadioState}
              radioState={radioState}
            />
          </div>
        </div>

        <div className='p-2 flex-1 flex flex-col'>
          <div className='text-[11px] font-medium mb-2'>Urgent</div>
          <div className='bg-half-white rounded-xl border-white border-2 py-2'>
            <ToogleSwitch
              register={register}
              id='urgent'
              setRadioState={setRadioState}
              radioState={radioState}
            />
          </div>
        </div>
      </div>

      <button className='rounded-xl border-2 border-white p-2 text-meteorite-blue flex justify-center items-center w-40 bg-meteorite-blue text-white gap-1'>
        <AddIcon />
        <div className='font-bold text-sm'>Submit</div>
      </button>
    </form>
  );
};

export default InputForm;
