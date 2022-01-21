import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import Representation from "@conditioners/Representation/Representation";
import FormView from "@conditioners/FormView/FormView";

type PanelViewProps = {
  hideViewInBreakpoint: boolean;
  isBreakpoint: boolean;
  role: string;
};

export default function PanelView({
  hideViewInBreakpoint,
  isBreakpoint,
  role,
}: PanelViewProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <div
      className={`w-full p-6 ${
        hideViewInBreakpoint && isBreakpoint && "hidden"
      }`}
    >
      {panelFuncState?.chooseOption === PanelFunctionalites.SHOW && (
        <Representation role={role} functionality={PanelFunctionalites.SHOW} />
      )}
      {panelFuncState?.chooseOption === PanelFunctionalites.ADD && (
        <FormView role={role} functionality={PanelFunctionalites.ADD} />
      )}
      {panelFuncState?.chooseOption === PanelFunctionalites.EDIT && (
        <FormView role={role} functionality={PanelFunctionalites.EDIT} />
      )}
      {panelFuncState?.chooseOption === PanelFunctionalites.DELETE && (
        <Representation
          role={role}
          functionality={PanelFunctionalites.DELETE}
        />
      )}
    </div>
  );
}
