import React from "react";
import { sessionInitState, SessionStateType } from "./sessionInitState";
import { SessionActionType, sessionReducer } from "./sessionReducer";

type SessionProviderProps = {
  children: React.ReactNode;
};

/* export enum SessionActions {
  SESSION_START = "SESSION_START",
  SESSION_STOP = "SESSION_STOP",
}

type SessionStateType = {
  user: any;
  sessionExist: boolean;
};

type SessionActionType =
  | { type: SessionActions.SESSION_START; payload: any }
  | { type: SessionActions.SESSION_STOP };

const sessionInitState: SessionStateType = {
  user: {},
  sessionExist: false,
};

function sessionReducer(state: SessionStateType, action: SessionActionType) {
  switch (action.type) {
    case SessionActions.SESSION_START:
      return {
        user: action.payload,
        sessionExist: true,
      };
    case SessionActions.SESSION_STOP:
      return {
        user: {},
        sessionExist: false,
      };
    default:
      throw new Error();
  }
} */

type SessionContextType = {
  sessionState: SessionStateType;
  sessionDispatch: React.Dispatch<SessionActionType>;
};

export const SessionContext = React.createContext<Partial<SessionContextType>>({});

export default function SessionProvider({ children }: SessionProviderProps) {
  const [sessionState, sessionDispatch] = React.useReducer(
    sessionReducer,
    sessionInitState,
    (init) => init
  );

  return (
    <SessionContext.Provider
      value={{ sessionState: sessionState, sessionDispatch: sessionDispatch }}
    >
      {children}
    </SessionContext.Provider>
  );
}
