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
  };

  return (
    <section className="text-3xl">
      <h2 className="text-4xl mb-2">
        {deleteTuristAtraction
          ? "Usuń Atrakcję Turystyczną"
          : "Podgląd Atrakcji Turystcznej"}
      </h2>
      <ul className="my-4">
        <li>Nazwa Atrakcji: {resource.name}</li>
        <li>Cena: {resource.price} PLN</li>
        <li>Opis: {resource.description}</li>
      </ul>
      {deleteTuristAtraction && (
        <Button
          label="Usuń Atrakcję Turystyczną"
          onClick={deleteTuristAtractionHandler}
        />
      )}
    </section>
  );
}
