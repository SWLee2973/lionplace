'use client';

function InputErrorMessage({ message }: { message: string }) {
  return (
    <span className="absolute -bottom-5 right-0 text-label-small text-red-400">
      {message}
    </span>
  );
}

export default InputErrorMessage;
