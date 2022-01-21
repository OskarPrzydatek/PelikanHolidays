import Button from "@atoms/Button/Button";
import PanelFormLayout from "@layouts/PanelFormLayout/PanelFormLayout";
import Input from "@molecules/Input/Input";
import TextArea from "@molecules/TextArea/TextArea";
import { useForm, SubmitHandler } from "react-hook-form";

type TuristAtractionProps = {
  editedTuristAtraction?: any;
};

type TuristAtractionValues = {
  name: string;
  price: number;
  description: string;
};

export default function TuristAtractionForm({
  editedTuristAtraction,
}: TuristAtractionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TuristAtractionValues>();

  const onSubmit: SubmitHandler<TuristAtractionValues> = async (formData) => {
    console.log(formData);

    if (editedTuristAtraction) {
      await fetch(
        `http://localhost:8080/attractions/update/${editedTuristAtraction.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
    } else {
      await fetch("http://localhost:8080/attractions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }

    window.location.reload();
  };

  return (
    <PanelFormLayout
      label={
        editedTuristAtraction
          ? "Edytuj Atrakcję Turystyczną"
          : "Dodaj Atrakcję Turystyczną"
      }
      onSubmit={handleSubmit(onSubmit)}
      height="70"
    >
      <Input
        placeholder="Podaj Nazwe Atrakcji"
        label="Nazwa Atrakcji"
        register={register("name", {
          required: "Nazwa Atrakcji Wymagana",
          value: editedTuristAtraction ? editedTuristAtraction.name : "",
        })}
        error={errors.name}
      />
      <Input
        label="Cena"
        placeholder="Podaj Cenę (Liczba)"
        register={register("price", {
          required: "Cena Wymagana",
          pattern: {
            value: /^\d+$/,
            message: "Tylko Format Numeryczny",
          },
          value: editedTuristAtraction && editedTuristAtraction.price,
          valueAsNumber: true,
        })}
        error={errors.price}
      />
      <TextArea
        label="Opis Atrakcji"
        placeholder="Dodaj Opis Atrakcji (Max 200 Znaków)"
        register={register("description", {
          required: true,
          value: editedTuristAtraction ? editedTuristAtraction.description : "",
          maxLength: 200,
        })}
        error={errors.description}
      />

      <Button
        label={editedTuristAtraction ? "Edytuj Atrakcję" : "Dodaj Atrakcję"}
      />
    </PanelFormLayout>
  );
}
