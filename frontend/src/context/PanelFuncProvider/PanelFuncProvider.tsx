import React from "react";
import { PanelFuncActionsType } from "./PanelFuncActions";
import { panelFuncInitState, PanelFuncStateType } from "./panelFuncInitState";
import panelFuncReducer from "./panelFuncReducer";

type PanelProviderProps = {
  children: React.ReactNode;
};

type PanelContextType = {
  panelFuncState: PanelFuncStateType;
  panelFuncDispatch: React.Dispatch<PanelFuncActionsType>;
};

export const PanelFuncContext = React.createContext<Partial<PanelContextType>>({});

export default function PanelProvider({ children }: PanelProviderProps) {
  const [panelFuncState, panelFuncDispatch] = React.useReducer(
    panelFuncReducer,
    panelFuncInitState,
    (init) => init
  );

  return (
    <PanelFuncContext.Provider
      value={{
        panelFuncState: panelFuncState,
        panelFuncDispatch: panelFuncDispatch,
      }}
    >
      {children}
    </PanelFuncContext.Provider>
  );
}
