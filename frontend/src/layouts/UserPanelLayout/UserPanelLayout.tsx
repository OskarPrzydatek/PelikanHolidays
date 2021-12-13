import React from "react";
import PanelColumn from "@atoms/PanelColumn/PanelColumn";

type UserPanelLayoutProps = {
  username: string;
  role: string;
};

const UserPanelLayout = ({
  username,
  role,
}: UserPanelLayoutProps): React.ReactElement => {
  return (
    <>
      <header className="h-10vh">
        <div>
          <h2>Witaj {username}</h2>
          <p>{role}</p>
        </div>

        <h2>PELIKAN HOLIDAYS</h2>
      </header>

      <main className="h-90vh flex">
        <PanelColumn panelColumnLabel="MENU" hidePanelLabel="<<< SCHOWAJ">
          <p>lorem ipsum</p>
        </PanelColumn>

        <div className="w-full text-center">
          <p>VIEW</p>
        </div>

        <PanelColumn panelColumnLabel="SZUKAJ" hidePanelLabel="SCHOWAJ >>>">
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </PanelColumn>
      </main>
    </>
  );
};

export default UserPanelLayout;
