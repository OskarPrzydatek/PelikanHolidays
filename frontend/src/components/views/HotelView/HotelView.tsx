import Button from "@atoms/Button/Button";

type HotelViewProps = {
  resource: any;
  deleteHotel?: boolean;
};

export default function HotelView({ resource, deleteHotel }: HotelViewProps) {
  const deleteHotelHandler = async () => {
    console.log("Hotel Deleted");

    await fetch(`http://localhost:8080/hotels/delete/${resource.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    window.location.reload();
  };

  return (
    <section className="text-2xl sm:text-3xl overflow-auto scrollbar scrollbar-thumb-black scrollbar-track-white">
      <h2 className="text-3xl sm:text-4xl mb-2">
        {deleteHotel ? "Usuń Hotel" : "Podglad Hotelu"}
      </h2>
      <ul className="my-4 space-y-4">
        <li className="flex flex-col">
          <strong>Nazwa Hotelu:</strong>
          <span>{resource.name}</span>
        </li>
        <li className="flex flex-col">
          <strong>Adres:</strong>
          <span>{resource.address}</span>
        </li>
        <li className="flex flex-col">
          <strong>Gwiazdki:</strong>
          <span>{resource.stars}</span>
        </li>
        <li className="flex flex-col">
          <strong>Opis:</strong>
          <span>{resource.description}</span>
        </li>
      </ul>
      {deleteHotel && (
        <Button label="Usuń Hotel" onClick={deleteHotelHandler} />
      )}

      <style jsx>{`
        section {
          height: calc(82vh);
        }
      `}</style>
    </section>
  );
}
