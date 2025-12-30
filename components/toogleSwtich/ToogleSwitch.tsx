import React, { InputHTMLAttributes, FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  register: UseFormRegister<FieldValues>; // declare register props
  setRadioState: any;
  radioState: any;
}

const ToogleSwitch: FC<InputProps> = ({
  register,
  id,
  setRadioState,
  radioState,
}) => {
  const handleRadioChange = (radioNumber: number) => {
    setRadioState({ ...radioState, [id]: radioNumber });
  };

  return (
    <div className='relative flex items-center overflow-hidden justify-center gap-5'>
      {/* <span className='text-[#C9C3DC] font-semibold text-sm switch-yes'>
        Yes
      </span> */}
      <div className='switch'>
        <input
          id={`${id}_one`}
          type='radio'
          value='yes'
          defaultChecked={radioState[id] === 1}
          {...register(id)}
          onClick={() => handleRadioChange(1)}
        />
        <label
          htmlFor={`${id}_one`}
          className='switch__label switch__left absolute !w-[120%] left-[-43px] text-[#C9C3DC] font-semibold text-sm '
          onClick={() => handleRadioChange(1)}
        >
          Yes
        </label>

        <input
          id={`${id}_two`}
          type='radio'
          value='neutral'
          defaultChecked={radioState[id] === 2}
          {...register(id)}
          onClick={() => handleRadioChange(2)}
        />
        <label
          htmlFor={`${id}_two`}
          className='switch__label switch__center m-auto'
          onClick={() => handleRadioChange(2)}
        ></label>

        <input
          id={`${id}_three`}
          type='radio'
          value='no'
          defaultChecked={radioState[id] === 3}
          {...register(id)}
          onClick={() => handleRadioChange(3)}
        />
        <label
          htmlFor={`${id}_three`}
          className='switch__label switch__right absolute !w-[120%] right-[-43px] text-[#C9C3DC] font-semibold text-sm '
          onClick={() => handleRadioChange(3)}
        >
          No
        </label>

        <div className='switch__indicator'></div>
      </div>
      {/* <span className='text-[#C9C3DC] font-semibold text-sm switch-no'>No</span> */}
    </div>
  );
};

export default ToogleSwitch;
