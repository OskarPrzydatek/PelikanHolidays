import React from "react";
import PanelColumn from "@molecules/PanelColumn/PanelColumn";

type UserPanelLayoutProps = {
  username: string;
  role: string;
};

const UserPanelLayout = ({
  username,
  role,
}: UserPanelLayoutProps): React.ReactElement => {
  return (
    <div className="p-5 font-black">
      <header className="h-10vh flex justify-between items-center">
        <div className="flex space-x-4">
          <h2>Witaj {username}</h2>
          <p>{role} Panel</p>
        </div>
        <h2 className="italic text-3xl">PELIKAN HOLIDAYS</h2>
      </header>

      <main className="h-90vh flex text-xl">
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
    </div>
  );
};

export default UserPanelLayout;
