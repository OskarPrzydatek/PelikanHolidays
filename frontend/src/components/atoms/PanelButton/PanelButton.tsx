import React from "react";

type PanelButtonProps = {
  label: string;
  panelDispatch: React.MouseEventHandler<HTMLButtonElement>;
  verticalText?: boolean;
};

const PanelButton = ({
  label,
  panelDispatch,
  verticalText,
}: PanelButtonProps): React.ReactElement => {
  return (
    <button className={`font-black text-2xl`} onClick={panelDispatch}>
      <span className={`${verticalText && "vertical"}`}>{label}</span>

      <style jsx>{`
        @media screen and (max-width: 640px) {
          .vertical {
            writing-mode: vertical-rl;
            text-orientation: upright;
          }
        }
      `}</style>
    </button>
  );
};

export default PanelButton;
