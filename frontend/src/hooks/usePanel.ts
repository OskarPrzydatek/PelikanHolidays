import React from "react";
import panelReducer, {
  initPanelState,
} from "@layouts/UserPanelLayout/panelReducer";

export default function usePanel(breakpoint: number) {
  const [isBreakpoint, setIsBreakpoint] = React.useState<boolean>(false);

  const [panelState, panelDispatch] = React.useReducer(
    panelReducer,
    initPanelState,
    (init) => init
  );

  const handleIsBreakpoint = () => {
    window.innerWidth <= breakpoint
      ? setIsBreakpoint(true)
      : setIsBreakpoint(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleIsBreakpoint);

    isBreakpoint
      ? panelDispatch({ type: "CLOSE_ALL" })
      : panelDispatch({ type: "OPEN_ALL" });
  }, [isBreakpoint]);

  return [isBreakpoint, panelState, panelDispatch] as const;
}
