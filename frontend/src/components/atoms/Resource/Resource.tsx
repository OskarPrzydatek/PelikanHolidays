import { PanelFuncActions } from "@context/PanelFuncProvider/PanelFuncActions";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import React from "react";

type ResourceProps = {
  resource: any;
};

export default function Resource({ resource }: ResourceProps) {
  const { panelFuncDispatch } = React.useContext(PanelFuncContext);

  return (
    <button
      onClick={() =>
        panelFuncDispatch &&
        panelFuncDispatch({
          type: PanelFuncActions.SELECT_RESOURCE,
          payload: resource,
        })
      }
      className={`w-full text-xl bg-white p-2 border-8 border-black font-black 
                            focus:outline-none focus-visible:outline-none `}
    >
      {resource.firstName && resource.firstName}
      {resource.name && resource.name}
    </button>
  );
}
