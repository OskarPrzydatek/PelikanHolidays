import React from "react";
import panelReducer, {
  initPanelState,
} from "@layouts/UserPanelLayout/panelReducer";

/* type PanelStateType = {
  right: boolean;
  left: boolean;
};

type PanelActionType =
  | { type: "OPEN_RIGHT" }
  | { type: "CLOSE_RIGHT" }
  | { type: "OPEN_LEFT" }
  | { type: "CLOSE_LEFT" }
  | { type: "OPEN_ALL" }
  | { type: "CLOSE_ALL" };

const initPanelState: PanelStateType = {
  right: true,
  left: true,
};

function panelReducer(state: PanelStateType, action: PanelActionType) {
  switch (action.type) {
    case "OPEN_RIGHT":
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
 */

export default function usePanel(breakpoint: number) {
  const [isBreakpoint, setIsBreakpoint] = React.useState<boolean>(false);
  // const [openPanel, setOpenPanel] = React.useState<boolean>(true);

  const [panelState, panelDispatch] = React.useReducer(
    panelReducer,
    initPanelState,
    (init) => init
  );

  const handleIsBreakpoint = React.useCallback(() => {
    window.innerWidth < breakpoint
      ? setIsBreakpoint(true)
      : setIsBreakpoint(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleIsBreakpoint);

    // isBreakpoint ? setOpenPanel(false) : setOpenPanel(true);
    isBreakpoint
      ? panelDispatch({ type: "CLOSE_ALL" })
      : panelDispatch({ type: "OPEN_ALL" });
  }, [isBreakpoint]);

  return [panelState, panelDispatch] as const;
}
