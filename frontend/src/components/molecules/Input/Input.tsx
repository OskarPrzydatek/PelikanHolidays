import React from "react";
import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  placeholder: string;
  label?: string;
  register: UseFormRegisterReturn;
  type?: string;
  error?: any;
  minLengthValidationMessage?: string;
  maxLengthValidationMessage?: string;
};

const Input = ({
  placeholder,
  label,
  type,
  register,
  error,
  minLengthValidationMessage,
  maxLengthValidationMessage,
}: InputProps): React.ReactElement => {
  return (
    <div className="h-30">
      <label>{label}
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
      {error && error.type === "minLength" && minLengthValidationMessage && (
        <ValidationMessage message={minLengthValidationMessage} />
      )}
      {error && error.type === "maxLength" && maxLengthValidationMessage && (
        <ValidationMessage message={maxLengthValidationMessage} />
      )}
    </div>
  );
};

export default Input;
