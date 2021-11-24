import { UseFormRegisterReturn } from "react-hook-form";
import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";
import React from "react";

type InputProps = {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  error: any;
};

/** 
 * 
 * TODO: repair autofill!
 *
 * @link to help
 * https://phuctm97.com/blog/write-my-first-tailwindcss-plugin
 *  
 **/
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
          className={`w-full input-autofill text-xl bg-white p-2 border-8 focus:outline-none focus-visible:outline-none ${
            error ? 'border-red-500' : 'border-black' }
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
