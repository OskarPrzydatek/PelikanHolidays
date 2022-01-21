import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";
import { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = {
  label?: string;
  placeholder: string;
  options: Array<any>;
  register: UseFormRegisterReturn;
  error: any;
};

export default function Select({
  label,
  placeholder,
  options,
  register,
  error,
}: SelectProps) {
  return (
    <div className="h-30">
      <label className="flex flex-col">
        <span>{label}</span>
        <select
          className={`w-full input-placeholder-font-weight autofill-bg-white text-xl bg-white p-2 border-8 font-black
        focus:outline-none focus-visible:outline-none ${
          error ? "border-red-500" : "border-black"
        }`}
          defaultValue=""
          {...register}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={`${option.name}-${option.id}`} value={option.id}>
              {option.name || option.transportType}
            </option>
          ))}
        </select>
      </label>
      {error && <ValidationMessage message={error.message} />}
    </div>
  );
}
