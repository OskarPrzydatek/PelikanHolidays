import { UseFormRegisterReturn } from "react-hook-form";

type RadioProps = {
  name: string;
  label: string;
  value: string;
  register: UseFormRegisterReturn;
};

export default function Radio({ name, label, value, register }: RadioProps) {
  return (
    <div>
      <label>
        <span>{label}</span>
        <input
          className=""
          type="radio"
          value={value}
          {...register}
          name={name}
        />
      </label>
    </div>
  );
}
