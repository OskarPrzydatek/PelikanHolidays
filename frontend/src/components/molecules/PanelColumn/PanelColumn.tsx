import React from "react";
import PanelButton from "@atoms/PanelButton/PanelButton";
import {
  PanelActionType,
  PanelStateType,
} from "@layouts/UserPanelLayout/panelReducer";

type PanelColumnProps = {
  panelColumnLabel: string;
  hidePanelLabel: string;
  panelPosition: string;
  children: React.ReactNode;
  isBreakpoint: boolean;
  panelState: PanelStateType | any;
  panelDispatch: React.Dispatch<PanelActionType> | any;
};

const PanelColumn = ({
  panelColumnLabel,
  hidePanelLabel,
  panelPosition,
  children,
  isBreakpoint,
  panelState,
  panelDispatch,
}: PanelColumnProps): React.ReactElement => {
  // For dispatch func edit
  const upperCasePanelPosition = panelPosition.toUpperCase();

  return (
    <>
      {panelState[panelPosition] ? (
        <nav className="w-full lg:w-1/3 h-full text-center panel-column-border">
          <PanelButton
            label={hidePanelLabel}
            panelDispatch={() =>
              panelDispatch({
                type: `CLOSE_${upperCasePanelPosition}`,
                payload: isBreakpoint,
              })
            }
          />
          {children}
        </nav>
      ) : (
        <div>
          <PanelButton
            label={panelColumnLabel}
            panelDispatch={() =>
              panelDispatch({
                type: `OPEN_${upperCasePanelPosition}`,
                payload: isBreakpoint,
              })
            }
          />
        </div>
      )}
    </>
  );
};

export default PanelColumn;
