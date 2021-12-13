import React from "react";
import useOpenPanel from "@hooks/useOpenPanel";

type PanelColumnProps = {
  panelColumnLabel: string;
  hidePanelLabel: string;
  children: React.ReactNode;
};

const PanelColumn = ({
  panelColumnLabel,
  hidePanelLabel,
  children,
}: PanelColumnProps): React.ReactElement => {
  const mobileWidth = 720;

  const [openPanel, setOpenPanel] = useOpenPanel(mobileWidth);

  return (
    <>
      {!openPanel && (
        <div>
          <button onClick={() => setOpenPanel(true)}>{panelColumnLabel}</button>
        </div>
      )}
      {openPanel && (
        <nav className="w-1/4 h-full text-center panel-column-border">
          <button onClick={() => setOpenPanel(false)}>{hidePanelLabel}</button>
          {children}
        </nav>
      )}
    </>
  );
};

export default PanelColumn;
