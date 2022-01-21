import Button from "@atoms/Button/Button";
import Checkbox from "@atoms/Checkbox/Checkbox";
import CheckboxGrup from "@layouts/CheckboxGrup/CheckboxGrup";
import PanelFormLayout from "@layouts/PanelFormLayout/PanelFormLayout";
import { transport } from "@mocks/transport";
import Input from "@molecules/Input/Input";
import Select from "@molecules/Select/Select";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type OfferFormProps = {
  hotels: Array<any>;
  attractions: Array<any>;
  editedOffer?: any;
};

type OfferFormValuess = {
  id?: number;
  name: string;
  location: string;
  termFrom: string;
  termTo: string;
  price: number;
  hotel: any;
  transport: any;
  attractions: Array<any>;
};

export default function OfferForm({
  hotels,
  attractions,
  editedOffer,
}: OfferFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OfferFormValuess>();

  const [choosenAttranctions, setChoosenAttractions] = React.useState<
    Array<any>
  >([]);

  const onSubmit: SubmitHandler<OfferFormValuess> = async (formData) => {
    if (editedOffer) {
      await fetch(`http://localhost:8080/offers/update/${editedOffer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } else {
      await fetch("http://localhost:8080/offers/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }

    window.location.reload();
  };

  React.useEffect(() => {
    if (editedOffer) {
      setValue("id", editedOffer.id);
    }
  });

  return (
    <PanelFormLayout
      label={editedOffer ? "Edytuj Ofertę" : "Dodaj Ofertę"}
      onSubmit={handleSubmit(onSubmit)}
      height="85"
    >
      <Input
        label="Nazwa Oferty"
        placeholder="Podaj Nazwe Oferty"
        register={register("name", {
          required: "Nazwa Oferty Wymagana",
          value: editedOffer ? editedOffer.name : "",
        })}
        error={errors.name}
      />
      <Input
        label="Nazwa Lokacji"
        placeholder="Podaj Nazwę Lokacji"
        register={register("location", {
          required: "Nazwa Lokacji Wymagana",
          value: editedOffer ? editedOffer.location : "",
        })}
        error={errors.location}
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
          value: editedOffer && editedOffer.price,
          valueAsNumber: true,
        })}
        error={errors.location}
      />
      <Input
        label="Data Rozpoczęcia"
        placeholder="Podaj Datę Rozpoczęcia"
        type="date"
        register={register("termFrom", {
          required: "Data Rozpoczęcia Wymagana",
          value: editedOffer ? editedOffer.termFrom : "",
        })}
        error={errors.termFrom}
      />
      <Input
        label="Data Zakończenia"
        placeholder="Podaj Datę Zakończenia"
        type="date"
        register={register("termTo", {
          required: "Data Zakończenia Wymagana",
          value: editedOffer ? editedOffer.termTo : "",
        })}
        error={errors.termTo}
      />
      <Select
        label="Hotel"
        placeholder="Wybierz Hotel"
        options={hotels}
        register={register("hotel.id", {
          required: "Hotel Wymagany",
          value: editedOffer && editedOffer.hotel.id,
          valueAsNumber: true,
        })}
        error={errors.hotel}
      />
      <Select
        label="Transport"
        placeholder="Wybierz Transport"
        options={transport}
        register={register("transport.id", {
          required: "Transport Wymagany",
          value: editedOffer && editedOffer.transport.id,
          valueAsNumber: true,
        })}
        error={errors.hotel}
      />
      <CheckboxGrup label="Wybierz Atrakcje" error={errors.attractions}>
        {attractions.map((offerAttraction) => (
          <Checkbox
            key={offerAttraction.name}
            label={offerAttraction.name}
            value={offerAttraction.id}
            editedOffer={editedOffer}
            choosenAttranctions={choosenAttranctions}
            setChoosenAttractions={setChoosenAttractions}
          />
        ))}
      </CheckboxGrup>

      <Button
        label={editedOffer ? "Edytuj Ofertę" : "Dodaj Ofertę"}
        onClick={() => setValue("attractions", choosenAttranctions)}
      />
    </PanelFormLayout>
  );
}
