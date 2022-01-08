import React from "react";
import PanelColumn from "@molecules/PanelColumn/PanelColumn";
import usePanel from "@hooks/usePanel";
import { PanelPosition } from "./PanelPosition";

type UserPanelLayoutProps = {
  username: string;
  role: string;
};

const UserPanelLayout = ({
  username,
  role,
}: UserPanelLayoutProps): React.ReactElement => {
  const breakpoint = 1024;

  const [isBreakpoint, panelState, panelDispatch] = usePanel(breakpoint);

  const hideViewInBreakpoint = panelState.right || panelState.left;

  return (
    <div className="px-5 font-black">
      <header className="h-10vh flex justify-between items-center">
        <div className="flex space-x-4">
          <h2>Witaj {username}</h2>
          <p className="hidden panel:block">{role} Panel</p>
        </div>
        <h2 className="italic text-xl panel:text-3xl">PELIKAN HOLIDAYS</h2>
      </header>

      <main className="h-90vh flex text-xl">
        <PanelColumn
          panelColumnLabel="MENU"
          hidePanelLabel="<<< SCHOWAJ"
          panelPosition={PanelPosition.LEFT}
          isBreakpoint={isBreakpoint}
          panelState={panelState}
          panelDispatch={panelDispatch}
        >
          <p>lorem ipsum</p>
        </PanelColumn>

        <div
          className={`w-full text-center ${
            hideViewInBreakpoint && isBreakpoint && "hidden"
          }`}
        >
          <p>VIEW</p>
        </div>

        <PanelColumn
          panelColumnLabel="SZUKAJ"
          hidePanelLabel="SCHOWAJ >>>"
          panelPosition={PanelPosition.RIGHT}
          isBreakpoint={isBreakpoint}
          panelState={panelState}
          panelDispatch={panelDispatch}
        >
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </PanelColumn>
      </main>
    </div>
  );
};

export default UserPanelLayout;
