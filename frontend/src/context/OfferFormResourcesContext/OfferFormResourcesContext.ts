import React from "react";

type OfferFormResourcesContextType = {
  hotels: Array<any>;
  attractions: Array<any>;
};

export const OfferFormResourcesContext = React.createContext<
  Partial<OfferFormResourcesContextType>
>({});
