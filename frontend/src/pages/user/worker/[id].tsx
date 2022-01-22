import React from "react";
import { NextPage } from "next";
import UserPanelLayout from "@layouts/UserPanelLayout/UserPanelLayout";
import SomethingWrong from "@atoms/SomethingWrong/SomethingWrong";
import { OfferFormResourcesContext } from "@context/OfferFormResourcesContext/OfferFormResourcesContext";

const UserSubpage: NextPage = () => {
  const [session, setSession] = React.useState<any>();
  const [offers, setOffers] = React.useState();

  const [attractions, setAttractions] = React.useState<Array<any>>();
  const [hotels, setHotels] = React.useState<Array<any>>();

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

  React.useEffect(() => {
    handleSession();
    handleOffersList();
    handleHotelsList();
    handleAttractionsList();
  }, []);

  return (
    <>
      {session && session.sessionExist ? (
        <OfferFormResourcesContext.Provider value={{
          hotels: hotels,
          attractions: attractions,
        }}>
          <UserPanelLayout
            username={session.user.firstName}
            role={session.user.userType}
            resources={offers}
          />
        </OfferFormResourcesContext.Provider>
      ) : (
        <SomethingWrong />
      )}
    </>
  );
};

export default UserSubpage;
