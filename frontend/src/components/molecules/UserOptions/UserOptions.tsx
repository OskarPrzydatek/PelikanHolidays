import React from "react";
import { PanelFuncContext } from "@context/PanelFuncProvider/PanelFuncProvider";
import {
  AdminFunctionalities,
  ManagerFunctionalities,
  UserFunctionality,
  WorkerFunctionalities,
} from "@options/UserFunctionalites";

type UserOptionsProps = {
  role: string;
};

const UserOptions = ({ role }: UserOptionsProps): React.ReactElement => {
  const [userFunctionalites, setUserFunctionalites] =
    React.useState<Array<UserFunctionality>>();

  const { panelFuncDispatch } = React.useContext(PanelFuncContext);

  React.useEffect(() => {
    if (role === "Admin") {
      setUserFunctionalites(AdminFunctionalities);
    }

    if (role == "Manager") {
      setUserFunctionalites(ManagerFunctionalities);
    }

    if (role === "Worker") {
      setUserFunctionalites(WorkerFunctionalities);
    }
  }, []);

  return (
    <>
      {userFunctionalites && panelFuncDispatch &&  (
        <ul className="my-10 space-y-4">
          {userFunctionalites!.map(({ label, functionality }) => (
            <li key={label}>
              <button
                onClick={() => panelFuncDispatch({ type: functionality})}
                className={`w-full text-xl bg-white p-2 border-8 border-black font-black 
						focus:outline-none focus-visible:outline-none `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserOptions;
