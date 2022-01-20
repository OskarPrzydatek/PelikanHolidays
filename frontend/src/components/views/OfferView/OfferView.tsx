import Button from "@atoms/Button/Button";

type OfferViewProps = {
  resource: any;
  deleteOffer?: boolean;
};

export default function OfferView({ resource, deleteOffer }: OfferViewProps) {
  const deleteOfferHandler = async () => {
    console.log("Turist Atraction Deleted");
  };

  return (
    <section className="text-3xl">
      <h2 className="text-4xl mb-2">
        {deleteOffer ? "Usuń Ofertę" : "Podgląd Oferty"}
      </h2>
      <ul className="my-4">
        <li>Nazwa Oferty: {resource.name}</li>
        <li>Miejsce: {resource.location}</li>
        <li>Od {resource.termFrom}</li>
        <li>Do {resource.termTo}</li>
        <li>Cena: {resource.price}</li>
        <li>Hotel: {resource.hotel.name}</li>
        <li>Transport: {resource.transport}</li>
        <li>
          Atrakcje Turystyczne:
          <ul>
            {resource.attractions.map((attraction: any) => (
              <li>
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
