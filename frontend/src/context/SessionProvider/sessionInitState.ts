export type SessionStateType = {
  user: any;
  sessionExist: boolean;
};

export const sessionInitState: SessionStateType = {
  user: {},
  sessionExist: false,
};
