import PanelFuncButton from "@atoms/PanelFuncButton/PanelFuncButton";
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

  return <PanelFuncButton label="WYLOGUJ" onClick={handleLogoutBehavior} />;
};

export default LogoutButton;
