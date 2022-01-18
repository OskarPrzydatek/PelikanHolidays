import React from "react";
import Router from "next/router";
import { SessionContext } from "@context/SessionProvider/SessionProvider";
import { SessionActions } from "@context/SessionProvider/SessionActions";

const LogoutButton = () => {
  const { sessionDispatch } = React.useContext(SessionContext);

  const handleLogoutBehavior = () => {
    if (sessionDispatch) {
      sessionDispatch({
        type: SessionActions.SESSION_STOP,
      });

      Router.push("/");
    }
  };

  return (
    <button
      onClick={handleLogoutBehavior}
      className={`w-full text-xl bg-white p-2 border-8 border-black font-black 
      focus:outline-none focus-visible:outline-none `}
    >
      Wyloguj
    </button>
  );
};

export default LogoutButton;
