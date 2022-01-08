import {
  AdminFunctionalities,
  ManagerFunctionalities,
  UserFunctionality,
  WorkerFunctionalities,
} from "models/UserFunctionalites";
import React from "react";

type UserOptionsProps = {
  role: string;
};

const UserOptions = ({ role }: UserOptionsProps): React.ReactElement => {
  const [userFunctionalites, setUserFunctionalites] =
    React.useState<Array<UserFunctionality>>();

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
      {userFunctionalites ? (
        <ul className="my-10 space-y-4">
          {userFunctionalites!.map(({ label, endpoint }) => (
            <li key={label}>
              <button
                className={`w-full text-xl bg-white p-2 border-8 border-black font-black 
						focus:outline-none focus-visible:outline-none `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default UserOptions;
