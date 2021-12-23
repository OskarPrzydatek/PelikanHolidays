export type PanelStateType = {
  right: boolean;
  left: boolean;
};

export type PanelActionType =
  | { type: "OPEN_RIGHT"; payload: boolean }
  | { type: "CLOSE_RIGHT" }
  | { type: "OPEN_LEFT"; payload: boolean }
  | { type: "CLOSE_LEFT" }
  | { type: "OPEN_ALL" }
  | { type: "CLOSE_ALL" };

export const initPanelState: PanelStateType = {
  right: true,
  left: true,
};

export default function panelReducer(
  state: PanelStateType,
  action: PanelActionType
) {
  switch (action.type) {
    case "OPEN_RIGHT":
      if (action.payload) {
        return {
          right: true,
          left: false,
        };
      } else
        return {
          ...state,
          right: true,
        };
    case "CLOSE_RIGHT":
      return {
        ...state,
        right: false,
      };
    case "OPEN_LEFT":
      if (action.payload) {
        return {
          right: false,
          left: true,
        };
      } else
        return {
          ...state,
          left: true,
        };
    case "CLOSE_LEFT":
      return {
        ...state,
        left: false,
      };
    case "OPEN_ALL":
      return {
        right: true,
        left: true,
      };
    case "CLOSE_ALL":
      return {
        right: false,
        left: false,
      };
    default:
      throw new Error();
  }
}
