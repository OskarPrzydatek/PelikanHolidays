import React from "react";
import Router from "next/router";

const LogoutButton = () => {
  const handleLogoutBehavior = async () => {
    await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {},
        sessionExist: false,
      }),
    });

    Router.push("/");
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
