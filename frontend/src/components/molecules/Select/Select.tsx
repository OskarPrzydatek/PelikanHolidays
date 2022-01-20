import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";
import { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = {
  placeholder: string;
  options: Array<any>;
  register: UseFormRegisterReturn;
  error: any;
};

export default function Select({
  placeholder,
  options,
  register,
  error,
}: SelectProps) {
  return (
    <div className="h-20">
      <label>
        <select {...register}>
          <option disabled selected value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.name} value={option}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
      {error && <ValidationMessage message={error.message} />}
    </div>
  );
}
