import React from "react";
import useOpenPanel from "@hooks/useOpenPanel";
import PanelButton from "@atoms/PanelButton/PanelButton";

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
  const mobileWidth = 1024;

  const [openPanel, setOpenPanel] = useOpenPanel(mobileWidth);

  return (
    <>
      {!openPanel && (
        <div>
          <PanelButton
            label={panelColumnLabel}
            setOpenPanel={() => setOpenPanel(true)}
          />
        </div>
      )}
      {openPanel && (
        <nav className="w-1/4 h-full text-center panel-column-border">
          <PanelButton
            label={hidePanelLabel}
            setOpenPanel={() => setOpenPanel(false)}
          />
          {children}
        </nav>
      )}
    </>
  );
};

export default PanelColumn;
