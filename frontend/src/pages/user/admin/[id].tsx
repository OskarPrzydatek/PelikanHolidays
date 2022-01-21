import React from "react";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";

export default function AdminSubpage() {
  const [session, setSession] = React.useState<any>();
  const [users, setUsers] = React.useState();

  const handleSession = async () => {
    const response = await fetch("/api/session");
    const data = await response.json();
    setSession(data);
  };

  const handleUsersList = async () => {
    const response = await fetch("http://localhost:8080/users/list");
    const data = await response.json();
    setUsers(data);
  };

  React.useEffect(() => {
    handleSession();
    handleUsersList();
  }, []);

  return (
    <>
      {session && session.sessionExist ? (
        <UserPanelLayout
          username={session.user.firstName}
          role={session.user.userType}
          resources={users}
        />
      ) : (
        <SomethingWrong />
      )}
    </>
  );
}
