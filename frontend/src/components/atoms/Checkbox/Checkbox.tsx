import React from "react";

type CheckboxProps = {
  label: string;
  value: any;
  editedOffer: any;
  choosenAttranctions: Array<any>;
  setChoosenAttractions: (item: any) => any;
};

export default function Checkbox({
  label,
  value,
  choosenAttranctions,
  setChoosenAttractions,
}: CheckboxProps) {
  const checkboxRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSettingOption = () => {
    checkboxRef.current.checked
      ? setChoosenAttractions((prev: any) => [
          ...prev,
          { id: Number(checkboxRef.current.value) },
        ])
      : setChoosenAttractions(
          choosenAttranctions.filter(
            (item: any) => item.id !== Number(checkboxRef.current.value)
          )
        );
  };

  return (
    <div>
      <label className="flex justify-start items-start">
        <div className="bg-white relative border-4 border-black w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-none">
          <input
            type="checkbox"
            ref={checkboxRef}
            
            className="opacity-0 absolute top-0"
            onClick={handleSettingOption}
            value={value}
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
