import React from 'react';

interface InputProps {
  inputType: string;
  [key: string]: unknown;
}

function FormInput(props: InputProps) {
  const { inputType, ...rest } = props;
  return (
    <input
      className="h-12 w-64 rounded-md border-[1px] bg-transparent px-3 text-label-small text-white placeholder:text-white"
      type={inputType}
      {...rest}
    />
  );
}

export default FormInput;
