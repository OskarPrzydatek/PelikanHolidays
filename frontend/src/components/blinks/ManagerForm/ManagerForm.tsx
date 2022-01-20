import Button from "@atoms/Button/Button";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import HotelForm from "@forms/HotelForm/HotelForm";
import TuristAtractionForm from "@forms/TuristAttractionForm/TuristAtractionForm";
import { ManagerAddForm } from "@models/ManagerAddForm";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import React from "react";

type ManagerFormProps = {
  functionality: string;
};

export default function ManagerForm({ functionality }: ManagerFormProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  const [resourceAddForm, setResourceAddForm] = React.useState(
    ManagerAddForm.EMPTY
  );

  return (
    <>
      {functionality === PanelFunctionalites.ADD && (
        <>
          <section className="flex flex-col items-center">
            <h2>Wybierz Rodzaj Zasobu:</h2>
            <div className="w-full mb-6 flex justify-between">
              <div>
                <Button
                  label="Atrakcja Turystyczna"
                  onClick={() =>
                    setResourceAddForm(ManagerAddForm.TURIST_ATRACTION)
                  }
                />  
              </div>
              <div>
                <Button
                  label="Hotel"
                  onClick={() => setResourceAddForm(ManagerAddForm.HOTEL)}
                />
              </div>
            </div>
          </section>
          {resourceAddForm === ManagerAddForm.TURIST_ATRACTION && (
            <TuristAtractionForm />
          )}
          {resourceAddForm === ManagerAddForm.HOTEL && <HotelForm />}
        </>
      )}
      {functionality === PanelFunctionalites.EDIT && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 && (
            <p className="text-center">Proszę Wybrać Zasób</p>
          )}
          {"price" in panelFuncState?.item && (
            <TuristAtractionForm editedTuristAtraction={panelFuncState?.item} />
          )}
          {"address" in panelFuncState?.item && (
            <HotelForm editedHotel={panelFuncState?.item} />
          )}
        </>
      )}
    </>
  );
}
