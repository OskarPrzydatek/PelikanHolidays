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
    <section className="text-2xl sm:text-3xl overflow-auto scrollbar scrollbar-thumb-black scrollbar-track-white">
      <h2 className="text-3xl sm:text-4xl mb-2">
        {deleteOffer ? "Usuń Ofertę" : "Podgląd Oferty"}
      </h2>
      <ul className="my-4 space-y-4">
        <li className="flex flex-col">
          <strong>Nazwa Oferty:</strong>
          <span>{resource.name}</span>
        </li>
        <li className="flex flex-col">
          <strong>Miejsce:</strong>
          <span>{resource.location}</span>
        </li>
        <li className="flex flex-col">
          <strong>Od:</strong>
          <span>{arrayToDate(resource.termFrom)}</span>
        </li>
        <li className="flex flex-col">
          <strong>Do:</strong>
          <span>{arrayToDate(resource.termTo)}</span>
        </li>
        <li className="flex flex-col">
          <strong>Cena:</strong>
          <span>{resource.price}</span>
        </li>
        <li className="flex flex-col">
          <strong>Hotel:</strong>
          <span>{resource.hotel.name}</span>
        </li>
        <li className="flex flex-col">
          <strong>Transport:</strong>
          <span>{resource.transport.transportType}</span>
        </li>
        <li className="flex flex-col mb-4">
          Atrakcje Turystyczne:
          <ul className="space-y-2">
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

      <style jsx>{`
        section {
          height: calc(82vh);
        }
      `}</style>
    </section>
  );
}
