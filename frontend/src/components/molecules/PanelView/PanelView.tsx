import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import { PanelFunctionalites } from "@context/PanelFuncProvider/PanelFuctionalites";

type PanelViewProps = {
  hideViewInBreakpoint: boolean;
  isBreakpoint: boolean;
};

export default function PanelView({
  hideViewInBreakpoint,
  isBreakpoint,
}: PanelViewProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <div
      className={`w-full p-6 bg-gray-100 ${
        hideViewInBreakpoint && isBreakpoint && "hidden"
      }`}
    >
      {panelFuncState?.chooseOption === PanelFunctionalites.SHOW && <p>SHOW</p>}
      {panelFuncState?.chooseOption === PanelFunctionalites.ADD && <p>ADD</p>}
      {panelFuncState?.chooseOption === PanelFunctionalites.EDIT && <p>EDIT</p>}
      {panelFuncState?.chooseOption === PanelFunctionalites.DELETE && <p>DELETE</p>}
    </div>
  );
}
