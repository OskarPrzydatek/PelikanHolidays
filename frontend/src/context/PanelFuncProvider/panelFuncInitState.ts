import { PanelFunctionalites } from "@models/PanelFuctionalites";

export type PanelFuncStateType = {
  chooseOption:
    | PanelFunctionalites.SHOW
    | PanelFunctionalites.ADD
    | PanelFunctionalites.EDIT
    | PanelFunctionalites.DELETE;
  item: any;
};

export const panelFuncInitState: PanelFuncStateType = {
  chooseOption: PanelFunctionalites.SHOW,
  item: {},
};
