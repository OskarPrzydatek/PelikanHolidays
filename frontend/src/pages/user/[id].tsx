import React from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import { SessionContext } from "@context/SessionProvider/SessionProvider";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";

const UserSubpage: NextPage = () => {
  const { sessionState } = React.useContext(SessionContext);

  return (
    <>
      {sessionState && sessionState.sessionExist ? (
        <UserPanelLayout
          username={sessionState.user.email}
          role={sessionState.user.userType}
        />
      ) : (
        <SomethingWrong />
      )}
    </>
  );
};

export default UserSubpage;
