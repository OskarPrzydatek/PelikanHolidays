import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import { PanelFunctionalites } from "@models/PanelFuctionalites";
import UserView from "@views/UserView/UserView";
import React from "react";

type UserRepresentationProps = {
  functionality: string;
};

export default function AdminRepresentation({
  functionality,
}: UserRepresentationProps) {
  const { panelFuncState } = React.useContext(PanelFuncContext);

  return (
    <>
      {functionality === PanelFunctionalites.SHOW && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Wybierz Użytkownika Do Podglądu</p>
          ) : (
            <UserView resource={panelFuncState?.item} />
          )}
        </>
      )}
      {functionality === PanelFunctionalites.DELETE && (
        <>
          {Object.keys(panelFuncState?.item).length === 0 ? (
            <p className="text-center">Wybierz Użytkownika Do Usunięcia</p>
          ) : (
            <UserView resource={panelFuncState?.item} deleteUser={true} />
          )}
        </>
      )}
    </>
  );
}
