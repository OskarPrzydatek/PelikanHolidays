import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TextAreaProps = {
  placeholder: string;
  label?: string;
  register: UseFormRegisterReturn;
  error?: any;
};

export default function TextArea({
  placeholder,
  label,
  register,
  error,
}: TextAreaProps) {
  return (
    <div>
      <label>{label}
        <textarea
          className={`w-full h-56 input-placeholder-font-weight autofill-bg-white text-xl bg-white p-2 border-8 font-black
                    focus:outline-none focus-visible:outline-none resize-none ${
                      error ? "border-red-500" : "border-black"
                    }`}
          placeholder={placeholder}
          {...register}
        />
      </label>
      {error && error.type === "required" && (
        <ValidationMessage message="Opis Wymagany" />
      )}
      {error && error.type === "maxLength" && (
        <ValidationMessage message="Maksymalna Ilość Znaków To: 200" />
      )}
    </div>
  );
}
