import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import {
  AdminFunctionalities,
  ManagerFunctionalities,
  UserFunctionality,
  WorkerFunctionalities,
} from "@options/UserFunctionalites";
import { Users } from "@models/Users";
import PanelFuncButton from "@atoms/PanelFuncButton/PanelFuncButton";

type UserOptionsProps = {
  role: string;
};

const UserOptions = ({ role }: UserOptionsProps): React.ReactElement => {
  const [userFunctionalites, setUserFunctionalites] =
    React.useState<Array<UserFunctionality>>();

  const { panelFuncDispatch } = React.useContext(PanelFuncContext);

  React.useEffect(() => {
    if (role === Users.ADMIN) {
      setUserFunctionalites(AdminFunctionalities);
    }

    if (role == Users.MANAGER) {
      setUserFunctionalites(ManagerFunctionalities);
    }

    if (role === Users.WORKER) {
      setUserFunctionalites(WorkerFunctionalities);
    }
  }, []);

  return (
    <>
      {userFunctionalites && panelFuncDispatch && (
        <ul className="my-10 space-y-4">
          {userFunctionalites!.map(({ label, functionality }) => (
            <li key={label}>
              <PanelFuncButton
                label={label}
                onClick={() => panelFuncDispatch({ type: functionality })}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserOptions;
