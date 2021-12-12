import React from "react";

type PanelButtonProps = {
  label: string;
  setOpenPanel: React.MouseEventHandler<HTMLButtonElement>;
};

const PanelButton = ({
  label,
  setOpenPanel,
}: PanelButtonProps): React.ReactElement => {
  return (
    <button className="font-black text-2xl" onClick={setOpenPanel}>
      {label}
    </button>
  );
};

export default PanelButton;
