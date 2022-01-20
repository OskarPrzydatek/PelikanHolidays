import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import UserForm from "@forms/UserForm/UserForm";

type AdminFormProps = {
  functionality: string;
};

export default function AdminForm({ functionality }: AdminFormProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <>
      {functionality === PanelFunctionalites.ADD && <UserForm />}
      {functionality === PanelFunctionalites.EDIT && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Wybierz Użytkownika Do Edycji</p>
          ) : (
            <UserForm editedUser={panelFuncState?.item} />
          )}
        </>
      )}
    </>
  );
}
