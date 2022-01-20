import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import HotelView from "@views/HotelView/HotelView";
import TuristAtractionView from "@views/TuristAtractionView/TuristAtractionView";

type ManagerRepresentationProps = {
  functionality: string;
};

export default function ManagerRepresentation({
  functionality,
}: ManagerRepresentationProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <>
      {functionality === PanelFunctionalites.SHOW && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Proszę Wybrać Zasób</p>
          ) : (
            <>
              {"price" in panelFuncState?.item && (
                <TuristAtractionView resource={panelFuncState?.item} />
              )}
              {"address" in panelFuncState?.item && (
                <HotelView resource={panelFuncState?.item} />
              )}
            </>
          )}
        </>
      )}
      {functionality === PanelFunctionalites.DELETE && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Proszę Wybrać Zasób</p>

          ) : (
            <>
              {"price" in panelFuncState?.item && (
                <TuristAtractionView resource={panelFuncState?.item} deleteTuristAtraction={true} />
              )}
              {"address" in panelFuncState?.item && (
                <HotelView resource={panelFuncState?.item} deleteHotel={true} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
