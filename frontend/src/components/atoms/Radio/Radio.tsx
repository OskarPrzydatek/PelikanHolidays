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
      <label className="flex space-x-2">

        <div className="radio w-6 h-6">
          <input
            className="opacity-0 absolute cursor-pointer  w-6 h-6"
            type="radio"
            value={value}
            {...register}
            name={name}
          />
          <div
            id="custom-radio"
            className="w-6 h-6 border-4 border-black rounded-full flex justify-center items-center"
          >
            <div className="hidden w-3 h-3 bg-black rounded-full" />
          </div>
        </div>

        <span>{label}</span>
      </label>
    </div>
  );
}
