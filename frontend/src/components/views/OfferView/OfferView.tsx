import Button from "@atoms/Button/Button";
import React from "react";

type OfferViewProps = {
  resource: any;
  deleteOffer?: boolean;
};

export default function OfferView({ resource, deleteOffer }: OfferViewProps) {
  const deleteOfferHandler = async () => {
    await fetch(`http://localhost:8080/offers/delete/${resource.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    window.location.reload();
  };

  const arrayToDate = (array: Array<number>) => {
    return `${array[0]}-${array[1] < 10 ? `0${array[1]}` : `${array[1]}`}-${
      array[2] < 10 ? `0${array[2]}` : `${array[2]}`
    }`;
  };

  React.useEffect(() => {
    console.log(resource);
  }, []);

  return (
    <section className="text-3xl">
      <h2 className="text-4xl mb-2">
        {deleteOffer ? "Usuń Ofertę" : "Podgląd Oferty"}
      </h2>
      <ul className="my-4">
        <li>Nazwa Oferty: {resource.name}</li>
        <li>Miejsce: {resource.location}</li>
        <li>
          Od {/* resource.termFrom.join("-") */ arrayToDate(resource.termFrom)}
        </li>
        <li>
          Do {/* resource.termTo.join("-") */ arrayToDate(resource.termTo)}
        </li>
        <li>Cena: {resource.price}</li>
        <li>Hotel: {resource.hotel.name}</li>
        <li>Transport: {resource.transport.transportType}</li>
        <li>
          Atrakcje Turystyczne:
          <ul>
            {resource.attractions.map((attraction: any) => (
              <li key={attraction.name}>
                {attraction.name} {attraction.price} PLN
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {deleteOffer && (
        <Button label="Usuń Oferte" onClick={deleteOfferHandler} />
      )}
    </section>
  );
}
