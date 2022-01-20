import Button from "@atoms/Button/Button";
import Checkbox from "@atoms/Checkbox/Checkbox";
import Radio from "@atoms/Radio/Radio";
import CheckboxGrup from "@layouts/CheckboxGrup/CheckboxGrup";
import PanelFormLayout from "@layouts/PanelFormLayout/PanelFormLayout";
import RadioGrup from "@layouts/RadioGrup/RadioGrup";
import Input from "@molecules/Input/Input";
import Select from "@molecules/Select/Select";
import { SubmitHandler, useForm } from "react-hook-form";

type OfferFormProps = {
  hotels: Array<any>;
  attractions: Array<any>;
  editedOffer?: any;
};

type OfferFormValuess = {
  name: string;
  location: string;
  termFrom: string;
  termTo: string;
  price: number;
  hotel: any;
  transport: string;
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
    formState: { errors },
  } = useForm<OfferFormValuess>();

  const onSubmit: SubmitHandler<OfferFormValuess> = async (formData) => {
    console.log(formData);
  };

  return (
    <PanelFormLayout
      label={editedOffer ? "Edytuj Ofertę" : "Dodaj Ofertę"}
      onSubmit={handleSubmit(onSubmit)}
      height="85"
    >
      <Input
        placeholder="Nazwa Oferty"
        register={register("name", {
          required: "Nazwa Oferty Wymagana",
          value: editedOffer ? editedOffer.name : "",
        })}
        error={errors.name}
      />
      <Input
        placeholder="Nazwa Lokacji"
        register={register("location", {
          required: "Nazwa Lokacji Wymagana",
          value: editedOffer ? editedOffer.location : "",
        })}
        error={errors.location}
      />
      <Input
        placeholder="Data Rozpoczęcia"
        type="date"
        register={register("termFrom", {
          required: "Data Rozpoczęcia Wymagana",
          value: editedOffer ? editedOffer.termFrom : "",
        })}
        error={errors.termFrom}
      />
      <Input
        placeholder="Data Zakończenia"
        type="date"
        register={register("termTo", {
          required: "Data Zakończenia Wymagana",
          value: editedOffer ? editedOffer.termTo : "",
        })}
        error={errors.termTo}
      />
      <Select
        placeholder="Wybierz Hotel"
        options={hotels}
        register={register("hotel", {
          required: "Hotel Wymagany",
          value: editedOffer ? editedOffer.hotel : null,
        })}
        error={errors.hotel}
      />
      <RadioGrup label="Transport" error={errors.transport}>
        <Radio
          name="transport"
          label="Autobus"
          value="BUS"
          register={register("transport", {
            required: "Transport Wymagany",
            value: editedOffer ? editedOffer.transport : "",
          })}
        />
        <Radio
          name="transport"
          label="Samolot"
          value="PLANE"
          register={register("transport", {
            required: "Transport Wymagany",
            value: editedOffer ? editedOffer.transport : "",
          })}
        />
        <Radio
          name="transport"
          label="Statek"
          value="PROM"
          register={register("transport", {
            required: "Transport Wymagany",
            value: editedOffer ? editedOffer.transport : "",
          })}
        />
      </RadioGrup>
      <CheckboxGrup label="Wybierz Atrakcje" error={errors.attractions}>
        {attractions.map((offerAttraction) => (
          <Checkbox
            label={offerAttraction.name}
            value={offerAttraction}
            register={register("attractions", {
              required: "Atrakcje Wymagane",
              value: editedOffer
                ? editedOffer.attractions.map(
                    (offerAttraction: any) => offerAttraction
                  )
                : "",
            })}
          />
        ))}
      </CheckboxGrup>

      <Button label={editedOffer ? "Edytuj Ofertę" : "Dodaj Ofertę"} />
    </PanelFormLayout>
  );
}
