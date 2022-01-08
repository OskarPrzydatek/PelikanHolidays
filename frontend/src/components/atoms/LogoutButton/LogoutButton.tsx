import React from "react";
import Router from 'next/router';

const LogoutButton = () => {
  return (
    <button
      onClick={() => Router.push("/")}
      className={`w-full text-xl bg-white p-2 border-8 border-black font-black 
      focus:outline-none focus-visible:outline-none `}
    >
      Wyloguj
    </button>
  );
};

export default LogoutButton;
