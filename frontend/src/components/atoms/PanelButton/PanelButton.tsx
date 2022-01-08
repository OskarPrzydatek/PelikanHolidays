import React from "react";

type PanelButtonProps = {
  label: string;
  panelDispatch: React.MouseEventHandler<HTMLButtonElement>;
};

const PanelButton = ({
  label,
  panelDispatch,
}: PanelButtonProps): React.ReactElement => {
  return (
    <button className="font-black text-2xl" onClick={panelDispatch}>
      {label}
    </button>
  );
};

export default PanelButton;
