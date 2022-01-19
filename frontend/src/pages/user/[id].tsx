import React, { Suspense } from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";

const UserSubpage: NextPage = () => {
  const [session, setSession] = React.useState<any>();

  const handleSession = async () => {
    const response = await fetch("/api/session");
    const data = await response.json();
    setSession(data);
  };

  React.useEffect(() => {
    handleSession();

    console.log(session);
    
  }, []);

  return (
    <>
      {session && session.sessionExist ? (
        <UserPanelLayout
          username={session.user.firstName}
          role={session.user.userType}
        />
      ) : (
        <SomethingWrong />
      )}
    </>
  );
};

export default UserSubpage;
