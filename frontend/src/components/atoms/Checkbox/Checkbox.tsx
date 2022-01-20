import { UseFormRegisterReturn } from "react-hook-form";

type CheckboxProps = {
  label: string;
  value: any;
  register: UseFormRegisterReturn;
};

export default function Checkbox({ label, value, register }: CheckboxProps) {
  return (
    <div>
      <label className="flex justify-start items-start">
        <div className="bg-white border-4 border-black w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-none">
          <input
            type="checkbox"
            className="opacity-0 absolute"
            value={value}
            {...register}
          />
          <svg
            className="fill-current hidden w-4 h-4 text-black pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        <div className="select-none">{label}</div>
      </label>

      <style jsx>
        {`
          input:checked + svg {
            display: block;
          }
        `}
      </style>
    </div>
  );
}
