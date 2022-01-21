import React from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";

const UserSubpage: NextPage = () => {
  const [session, setSession] = React.useState<any>();

  const [attractions, setAttractions] = React.useState<Array<any>>();
  const [hotels, setHotels] = React.useState<Array<any>>();

  const handleSession = async () => {
    const response = await fetch("/api/session");
    const data = await response.json();
    setSession(data);
  };

  const handleHotelsList = async () => {
    const response = await fetch("http://localhost:8080/hotels/list");
    const data = await response.json();
    setHotels(data);
  };

  const handleAttractionsList = async () => {
    const response = await fetch("http://localhost:8080/attractions/list");
    const data = await response.json();
    setAttractions(data);
  };

  const concatResources = () => {
    if (attractions !== undefined && hotels !== undefined) {
      return attractions.concat(hotels);
    }
  };

  React.useEffect(() => {
    handleSession();
    handleHotelsList();
    handleAttractionsList();
  }, []);

  return (
    <>
      {session && session.sessionExist ? (
        <UserPanelLayout
          username={session.user.firstName}
          role={session.user.userType}
          resources={
            concatResources()
          }
        />
      ) : (
        <SomethingWrong />
      )}
    </>
  );
};

export default UserSubpage;
