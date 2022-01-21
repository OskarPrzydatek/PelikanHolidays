import { PanelFunctionalites } from "@models/PanelFuctionalites";
import { PanelFuncActions, PanelFuncActionsType } from "./PanelFuncActions";
import { PanelFuncStateType } from "./panelFuncInitState";

export default function panelReducer(
  state: PanelFuncStateType,
  action: PanelFuncActionsType
) {
  switch (action.type) {
    case PanelFuncActions.CHOOSE_SHOW:
      return {
        ...state,
        chooseOption: PanelFunctionalites.SHOW,
      };
    case PanelFuncActions.CHOOSE_ADD:
      return {
        ...state,
        chooseOption: PanelFunctionalites.ADD,
      };
    case PanelFuncActions.CHOOSE_EDIT:
      return {
        ...state,
        chooseOption: PanelFunctionalites.EDIT,
      };
    case PanelFuncActions.CHOOSE_DELETE:
      return {
        ...state,
        chooseOption: PanelFunctionalites.DELETE,
      };
    case PanelFuncActions.SELECT_RESOURCE:
      return {
        ...state,
        item: action.payload,
      };
    default:
      throw new Error();
  }
}
