'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  children?: React.ReactNode;
  register?: UseFormRegisterReturn;
  inputType: string;
  id: string;
  label: string;
  [key: string]: unknown;
}

function FormInput(props: InputProps) {
  const { children, register, inputType, id, label, ...rest } = props;
  return (
    <div className="relative flex flex-col gap-1">
      <label className="text-label-small text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="h-12 w-64 rounded-md border-[1px] bg-transparent px-3 text-label-small text-white outline-none placeholder:text-white"
        type={inputType}
        id={id}
        {...register}
        {...rest}
      />
      {children}
    </div>
  );
}

export default FormInput;
