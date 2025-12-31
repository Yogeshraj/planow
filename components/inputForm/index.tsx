import { useEffect, useState } from "react";
import AddIcon from "../Icons/AddIcon";
import { useForm } from "react-hook-form";
import useStore from "../../store/store";
import Button from "../button";
import EnterIcon from "../Icons/EnterIcon";

type FormValues = {
  inputText: string;
};

const InputForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>();

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

  const onSubmit = (data: FormValues) => {
    let boardName = "later";
    let boardID = 5;
    const { inputText } = data;
    const { important, urgent } = radioState;

    if (important === 1 && urgent === 1) {
      boardName = "Do";
      boardID = 1;
    } else if (important === 1 && urgent === 3) {
      boardName = "Schedule";
      boardID = 2;
    } else if (important === 3 && urgent === 1) {
      boardName = "Delegate";
      boardID = 3;
    } else if (important === 3 && urgent === 3) {
      boardName = "Limit";
      boardID = 4;
    } else if (important === 1 && urgent === 2) {
      boardName = "Schedule";
      boardID = 2;
    } else if (important === 3 && urgent === 2) {
      boardName = "Limit";
      boardID = 4;
    } else if (important === 2 && urgent === 1) {
      boardName = "Delegate";
      boardID = 3;
    } else if (important === 2 && urgent === 3) {
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

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="absolute right-7 bottom-7 flex flex-col items-end gap-2.5">
      <form
        className={`bg-surfacebg fixed right-7 bottom-22 z-40 flex w-[328px] origin-bottom-right flex-col justify-evenly gap-2.5 rounded-xl rounded-br-none p-4 transition-all duration-300 ease-in-out ${
          showForm
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <textarea
            className="bg-background/10 border-background/8 placeholder:text-background/64 text-background/64 min-h-[15vh] w-full rounded-lg border p-[15px] text-sm focus:outline-none"
            placeholder="Type in here..."
            {...register("inputText", { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col justify-between gap-4 xl:flex-row">
          <div className="bg-background/8 flex flex-1 flex-col rounded-2xl">
            <div className="text-background/64 py-1.5 text-center text-[11px] font-medium">
              Is it Important?
            </div>
            <div className="bg-background/8 flex gap-0.5 rounded-3xl py-0.5">
              <span
                className={`cursor-pointer rounded-3xl px-4 py-1.5 text-sm ${radioState.important === 1 ? "bg-background text-backgroundbg" : "bg-backgroundbg/16 text-surface"}`}
                onClick={() => setRadioState({ ...radioState, important: 1 })}
              >
                Yes
              </span>
              <span
                className={`cursor-pointer rounded-3xl p-1.5 text-sm ${radioState.important === 2 ? "bg-background text-backgroundbg" : "bg-backgroundbg/16 text-surface"}`}
                onClick={() => setRadioState({ ...radioState, important: 2 })}
              >
                🤔
              </span>
              <span
                className={`cursor-pointer rounded-3xl px-4 py-1.5 text-sm ${radioState.important === 3 ? "bg-background text-backgroundbg" : "bg-backgroundbg/16 text-surface"}`}
                onClick={() => setRadioState({ ...radioState, important: 3 })}
              >
                No
              </span>
            </div>
          </div>

          <div className="bg-background/8 flex flex-1 flex-col rounded-2xl">
            <div className="text-background/64 py-1.5 text-center text-[11px] font-medium">
              Is it Urgent?
            </div>
            <div className="bg-background/8 flex gap-0.5 rounded-3xl py-0.5">
              <span
                className={`cursor-pointer rounded-3xl px-4 py-1.5 text-sm ${radioState.urgent === 1 ? "bg-background text-backgroundbg" : "bg-backgroundbg/16 text-surface"}`}
                onClick={() => setRadioState({ ...radioState, urgent: 1 })}
              >
                Yes
              </span>
              <span
                className={`cursor-pointer rounded-3xl p-1.5 text-sm ${radioState.urgent === 2 ? "bg-background text-backgroundbg" : "bg-backgroundbg/16 text-surface"}`}
                onClick={() => setRadioState({ ...radioState, urgent: 2 })}
              >
                🤔
              </span>
              <span
                className={`cursor-pointer rounded-3xl px-4 py-1.5 text-sm ${radioState.urgent === 3 ? "bg-background text-backgroundbg" : "bg-backgroundbg/16 text-surface"}`}
                onClick={() => setRadioState({ ...radioState, urgent: 3 })}
              >
                No
              </span>
            </div>
          </div>
        </div>

        <Button icon={<EnterIcon />} color="white" />
      </form>

      <div className="flex items-center gap-2.5">
        {/* <div className="bg-surfacecontainer border-outlinevariant flex cursor-pointer items-center gap-2.5 rounded-full border px-3 py-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_126_168"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_126_168)">
              <path
                d="M3 17V15H17V17H3ZM5 13V11H19V13H5ZM7 9V7H21V9H7Z"
                fill="#34343C"
              />
            </g>
          </svg>
          <div className="text-surfaceVariantBg text-sm font-medium">
            Clear all Completed
            <span className="bg-surfacecontainerhighest ml-1.5 cursor-pointer rounded-full p-1">
              👁️
            </span>
          </div>
        </div> */}

        <div
          className="bg-backgroundbg/80 flex cursor-pointer items-center gap-2.5 rounded-full p-2"
          onClick={() => setShowForm(!showForm)}
        >
          <AddIcon
            className={`${showForm ? "rotate-45" : "rotate-0"} transition-all duration-100 ease-in-out`}
          />
        </div>
      </div>

      <div className="pointer-events-none fixed right-[16px] bottom-[60px] z-40 flex max-h-[400px] w-[600px] translate-y-2 scale-95 flex-col overflow-hidden rounded-[12px] border opacity-0 shadow-lg">
        <div className="border-b px-[16px] py-[12px]">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-medium">Completed Tasks (2)</p>
            <button className="opacity-48 transition-opacity hover:opacity-100">
              ✕
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-[16px]">
          <div className="flex flex-col gap-[8px]">
            <div className="relative w-full cursor-move rounded-[12px]">
              <div className="size-full">
                <div className="relative flex w-full content-stretch items-start gap-[4px] p-[8px]">
                  <div className="relative min-h-px min-w-px shrink-0 grow basis-0 rounded-[12px]">
                    <div className="size-full">
                      <div className="relative flex w-full content-stretch items-start py-0 pr-0 pl-[6px]">
                        <div className="relative min-h-px min-w-px shrink-0 grow basis-0 flex-col justify-center overflow-hidden">
                          <div className="tracking-[0.5px]">
                            <p className="text-[16px] leading-[24px]">
                              Fix critical bug in production server
                            </p>
                          </div>
                        </div>
                        <div className="relative flex h-[24px] shrink-0 cursor-pointer content-stretch items-center rounded-[24px] p-[2px]">
                          <div className="relative size-[16px] shrink-0">
                            {/* <CheckIcon /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="background-color: rgba(247, 247, 255, 0.08); relative flex shrink-0 cursor-pointer content-stretch items-center rounded-[6px] p-[4px]">
                    <div className="relative size-[16px] shrink-0">
                      {/* <CheckIcon /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
