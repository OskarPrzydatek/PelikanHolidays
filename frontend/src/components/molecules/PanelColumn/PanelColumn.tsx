import React from "react";
import PanelButton from "@atoms/PanelButton/PanelButton";
import { PanelContext } from "@contexts/PanelContext";

type PanelColumnProps = {
  panelColumnLabel: string;
  hidePanelLabel: string;
  panelPosition: string;
  children: React.ReactNode;
};

const PanelColumn = ({
  panelColumnLabel,
  hidePanelLabel,
  panelPosition,
  children,
}: PanelColumnProps): React.ReactElement => {
  const { panelState, panelDispatch } = React.useContext(PanelContext);

  const upperCasePanelPosition = panelPosition.toUpperCase();

  return (
    <>
      {!panelState[panelPosition] && (
        <div>
          <PanelButton
            label={panelColumnLabel}
            panelDispatch={() =>
              panelDispatch({ type: `OPEN_${upperCasePanelPosition}` })
            }
          />
        </div>
      )}
      {panelState[panelPosition] && (
        <nav className="w-1/4 h-full text-center panel-column-border">
          <PanelButton
            label={hidePanelLabel}
            panelDispatch={() =>
              panelDispatch({ type: `CLOSE_${upperCasePanelPosition}` })
            }
          />
          {children}
        </nav>
      )}
    </>
  );
};

export default PanelColumn;
