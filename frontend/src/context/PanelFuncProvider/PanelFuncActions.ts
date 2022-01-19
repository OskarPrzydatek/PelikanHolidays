export enum PanelFuncActions {
  CHOOSE_SHOW = "CHOOSE_SHOW",
  CHOOSE_ADD = "CHOOSE_ADD",
  CHOOSE_EDIT = "CHOOSE_EDIT",
  CHOOSE_DELETE = "CHOOSE_DELETE",
  SELECT_RESOURCE = "SELECT_RESOURCE",
}

export type PanelFuncActionsType =
  | { type: PanelFuncActions.CHOOSE_SHOW }
  | { type: PanelFuncActions.CHOOSE_ADD }
  | { type: PanelFuncActions.CHOOSE_EDIT }
  | { type: PanelFuncActions.CHOOSE_DELETE }
  | { type: PanelFuncActions.SELECT_RESOURCE; payload: any };
