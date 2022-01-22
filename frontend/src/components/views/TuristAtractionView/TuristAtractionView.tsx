import Button from "@atoms/Button/Button";

type TuristAtractionViewProps = {
  resource: any;
  deleteTuristAtraction?: boolean;
};

export default function TuristAtractionView({
  resource,
  deleteTuristAtraction,
}: TuristAtractionViewProps) {
  const deleteTuristAtractionHandler = async () => {
    console.log("Turist Atraction Deleted");

    await fetch(`http://localhost:8080/attractions/delete/${resource.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    window.location.reload();
  };

  return (
    <section className="text-2xl sm:text-3xl overflow-auto scrollbar scrollbar-thumb-black scrollbar-track-white">
      <h2 className="text-3xl sm:text-4xl mb-2">
        {deleteTuristAtraction
          ? "Usuń Atrakcję Turystyczną"
          : "Podgląd Atrakcji Turystcznej"}
      </h2>
      <ul className="my-4 space-y-4">
        <li className="flex flex-col">
          <strong>Nazwa Atrakcji:</strong>
          <span> {resource.name}</span>
        </li>
        <li className="flex flex-col">
          <strong>Cena:</strong>
          <span>{resource.price} PLN</span>
        </li>
        <li className="flex flex-col">
          <strong>Opis:</strong>
          <span>{resource.description}</span>
        </li>
      </ul>
      {deleteTuristAtraction && (
        <Button
          label="Usuń Atrakcję Turystyczną"
          onClick={deleteTuristAtractionHandler}
        />
      )}

      <style jsx>{`
        section {
          height: calc(82vh);
        }
      `}</style>
    </section>
  );
}
