import React from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";

const UserSubpage: NextPage = () => {
  const [session, setSession] = React.useState<any>();
  const [offers, setOffers] = React.useState();

  const handleSession = async () => {
    const response = await fetch("/api/session");
    const data = await response.json();
    setSession(data);
  };

  const handleOffersList = async () => {
    const response = await fetch("http://localhost:8080/offers/list");
    const data = await response.json();
    setOffers(data);
  };

  React.useEffect(() => {
    handleSession();   
    handleOffersList(); 
  }, []);

  return (
    <>
      {session && session.sessionExist ? (
        <UserPanelLayout
          username={session.user.firstName}
          role={session.user.userType}
          resources={offers}
        />
      ) : (
        <SomethingWrong />
      )}
    </>
  );
};

export default UserSubpage;
