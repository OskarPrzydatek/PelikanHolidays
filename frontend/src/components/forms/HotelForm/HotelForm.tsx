import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@molecules/Input/Input";
import TextArea from "@molecules/TextArea/TextArea";
import Button from "@atoms/Button/Button";
import PanelFormLayout from "@layouts/PanelFormLayout/PanelFormLayout";
import React from "react";

type HotelFormProps = {
  editedHotel?: any;
};

type HotelFormValues = {
  id?: number;
  name: string;
  address: string;
  stars: number;
  description: string;
};

export default function HotelForm({ editedHotel }: HotelFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HotelFormValues>();

  const onSubmit: SubmitHandler<HotelFormValues> = async (formData) => {
    if (editedHotel) {
      await fetch(`http://localhost:8080/hotels/update/${editedHotel.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } else {
      await fetch("http://localhost:8080/hotels/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }

    window.location.reload();
  };

  React.useEffect(() => {
    if(editedHotel) {
      setValue("id", editedHotel.id);
    }
  });

  return (
    <PanelFormLayout
      label={editedHotel ? "Edytuj Hotel" : "Dodaj Hotel"}
      onSubmit={handleSubmit(onSubmit)}
      height="65"
    >
      <Input
        label="Nazwa Hotelu"
        placeholder="Podaj Nazwę Hotelu"
        register={register("name", {
          required: "Nazwa Hotelu Wymagana",
          value: editedHotel ? editedHotel.name : "",
        })}
        error={errors.name}
      />
      <Input
        label="Adres"
        placeholder="Podaj Adres"
        register={register("address", {
          required: "Adres Hotelu Wymagany",
          value: editedHotel ? editedHotel.address : "",
        })}
        error={errors.address}
      />
      <Input
        label="Gwiazdki"
        placeholder="Podaj Ilość Gwiazdek"
        register={register("stars", {
          required: "Ilość Gwiazdek Wymagana",
          pattern: {
            value: /[\+\-\.\,]$/,
            message: "Tylko Format Numeryczny",
          },
          value: editedHotel ? editedHotel.stars : "",
          valueAsNumber: true,
        })}
        error={errors.stars}
      />
      <TextArea
        label="Opis Hotelu"
        placeholder="Dodaj Opis Hotelu (Max 200 Znaków)"
        register={register("description", {
          required: true,
          value: editedHotel ? editedHotel.description : "",
          maxLength: 200,
        })}
        error={errors.description}
      />

      <Button label={editedHotel ? "Edytuj Hotel" : "Dodaj Hotel"} />
    </PanelFormLayout>
  );
}
