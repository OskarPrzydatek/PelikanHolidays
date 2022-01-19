import React, { Suspense } from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";
import Loading from "@atoms/Loading/Loading";

const UserSubpage: NextPage = () => {
  const [session, setSession] = React.useState<any>();

  const handleSession = async () => {
    const response = await fetch("/api/session");
    const data = await response.json();
    setSession(data);
  };

  React.useEffect(() => {
    handleSession();
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
