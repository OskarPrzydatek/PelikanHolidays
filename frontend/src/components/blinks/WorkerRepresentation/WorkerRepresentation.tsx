import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import OfferView from "@views/OfferView/OfferView";

type WorkerRepresentationProps = {
  functionality: string;
};

export default function WorkerRepresentation({
  functionality,
}: WorkerRepresentationProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <>
      {functionality === PanelFunctionalites.SHOW && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Wybierz Ofertę Do Podglądu</p>
          ) : (
            <OfferView resource={panelFuncState?.item} />
          )}
        </>
      )}
      {functionality === PanelFunctionalites.DELETE && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Wybierz Ofertę Do Usunięcia</p>
          ) : (
            <OfferView resource={panelFuncState?.item} deleteOffer={true} />
          )}
        </>
      )}
    </>
  );
}
