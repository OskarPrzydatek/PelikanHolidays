import Button from "@atoms/Button/Button";

type HotelViewProps = {
  resource: any;
  deleteHotel?: boolean;
};

export default function HotelView({ resource, deleteHotel }: HotelViewProps) {
  const deleteHotelHandler = async () => {
    console.log("Hotel Deleted");
  };

  return (
    <section className="text-3xl">
      <h2 className="text-4xl mb-2">
        {deleteHotel ? "Usuń Hotel" : "Podglad Hotelu"}
      </h2>
      <ul className="my-4">
        <li>Nazwa Hotelu: {resource.name}</li>
        <li>Adres: {resource.address}</li>
        <li>Gwiazdki: {resource.stars}</li>
        <li>Opis: {resource.description}</li>
      </ul>
      {deleteHotel && (
        <Button label="Usuń Hotel" onClick={deleteHotelHandler} />
      )}
    </section>
  );
}
