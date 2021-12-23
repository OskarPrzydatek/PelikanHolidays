import React from "react";
import {
  initPanelState,
  PanelActionType,
  PanelStateType,
} from "@layouts/UserPanelLayout/panelReducer";

type PanelContextType = {
  isBreakpoint: boolean;
  panelState: PanelStateType | any;
  panelDispatch: React.Dispatch<PanelActionType> | any;
};

export const PanelContext = React.createContext<PanelContextType>({
  isBreakpoint: false,
  panelState: initPanelState,
  panelDispatch: () => {},
});
