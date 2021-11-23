import { UseFormRegisterReturn } from "react-hook-form";
import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";

type InputProps = {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error: any;
};

const Input = ({
  label,
  type,
  register,
  error,
}: InputProps): React.ReactElement => {
  return (
    <div>
      <label>
        <span>{label}</span>
        <input 
        className="" 
        type={type} 
        placeholder={label}
        {...register}
         />
      </label>
      {error && (<ValidationMessage message={error.message} />)}
    </div>
  );
};

export default Input;
