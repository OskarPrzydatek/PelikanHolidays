import PanelColumn from "@molecules/PanelColumn/PanelColumn";
import usePanel from "@hooks/usePanel";
import { PanelPosition } from "./PanelPosition";
import Search from "@atoms/Search/Search";
import LogoutButton from "@atoms/LogoutButton/LogoutButton";
import UserOptions from "@molecules/UserOptions/UserOptions";
import PanelView from "@molecules/PanelView/PanelView";
import PanelFuncProvider from "@context/PanelFuncProvider/PanelFuncProvider";

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
        <PanelFuncProvider>
          <PanelColumn
            panelColumnLabel="MENU"
            hidePanelLabel="<<< SCHOWAJ"
            panelPosition={PanelPosition.LEFT}
            isBreakpoint={isBreakpoint}
            panelState={panelState}
            panelDispatch={panelDispatch}
          >
            <UserOptions role={role} />
            <LogoutButton />
          </PanelColumn>

          <PanelView
            hideViewInBreakpoint={hideViewInBreakpoint}
            isBreakpoint={isBreakpoint}
          />

          <PanelColumn
            panelColumnLabel="ZASOBY"
            hidePanelLabel="SCHOWAJ >>>"
            panelPosition={PanelPosition.RIGHT}
            isBreakpoint={isBreakpoint}
            panelState={panelState}
            panelDispatch={panelDispatch}
          >
            <Search />
          </PanelColumn>
        </PanelFuncProvider>
      </main>
    </div>
  );
};

export default UserPanelLayout;
