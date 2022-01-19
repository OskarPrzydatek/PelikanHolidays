import React from "react";
import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  placeholder: string;
  register: UseFormRegisterReturn;
  type?: string;
  error?: any;
};

const Input = ({
  placeholder,
  type,
  register,
  error,
}: InputProps): React.ReactElement => {
  return (
    <div className="h-20">
      <label>
        <input
          className={`w-full input-placeholder-font-weight autofill-bg-white text-xl bg-white p-2 border-8 font-black
                      focus:outline-none focus-visible:outline-none ${
                        error ? "border-red-500" : "border-black"
                      }`}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </label>
      {error && <ValidationMessage message={error.message} />}
    </div>
  );
};

export default Input;
