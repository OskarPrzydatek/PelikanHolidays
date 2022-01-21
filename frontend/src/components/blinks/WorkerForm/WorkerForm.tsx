import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import OfferForm from "@forms/OfferForm/OfferForm";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import { hotels } from "@mocks/hotels";
import { atractions } from "@mocks/attractions";

type WorkerFormProps = {
  functionality: string;
};

export default function WorkerForm({ functionality }: WorkerFormProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <>
      {functionality === PanelFunctionalites.ADD && (
        <OfferForm hotels={hotels} attractions={atractions} />
      )}
      {functionality === PanelFunctionalites.EDIT && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Wybierz Użytkownika Do Edycji</p>
          ) : (
            <OfferForm
              hotels={hotels}
              attractions={atractions}
              editedOffer={panelFuncState?.item}
            />
          )}
        </>
      )}
    </>
  );
}
