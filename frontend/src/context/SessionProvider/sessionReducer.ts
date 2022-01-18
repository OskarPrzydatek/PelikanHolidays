import { SessionActions } from "./SessionActions";
import { SessionStateType } from "./sessionInitState";

export type SessionActionType =
  | { type: SessionActions.SESSION_START; payload: any }
  | { type: SessionActions.SESSION_STOP };

export function sessionReducer(
  state: SessionStateType,
  action: SessionActionType
) {
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
}
