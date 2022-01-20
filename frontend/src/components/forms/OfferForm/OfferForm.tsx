import Button from "@atoms/Button/Button";
import Checkbox from "@atoms/Checkbox/Checkbox";
import Radio from "@atoms/Radio/Radio";
import CheckboxGrup from "@layouts/CheckboxGrup/CheckboxGrup";
import RadioGrup from "@layouts/RadioGrup/RadioGrup";
import Input from "@molecules/Input/Input";
import Select from "@molecules/Select/Select";
import { SubmitHandler, useForm } from "react-hook-form";

type OfferFormProps = {
  hotels: Array<any>;
  offerAttractions: Array<any>;
};

type OfferFormValuess = {
  name: string;
  location: string;
  termFrom: string;
  termTo: string;
  price: number;
  hotel: any;
  transport: string;
  offerAttractions: Array<any>;
};

export default function OfferForm({
  hotels,
  offerAttractions,
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
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nazwa Oferty"
        register={register("name", { required: "Nazwa Oferty Wymagana" })}
        error={errors.name}
      />
      <Input
        placeholder="Nazwa Lokacji"
        register={register("location", { required: "Nazwa Lokacji Wymagana" })}
        error={errors.location}
      />
      <Input
        placeholder="Data Rozpoczęcia"
        type="date"
        register={register("termFrom", {
          required: "Data Rozpoczęcia Wymagana",
        })}
        error={errors.termFrom}
      />
      <Input
        placeholder="Data Zakończenia"
        type="date"
        register={register("termFrom", {
          required: "Data Zakończenia Wymagana",
        })}
        error={errors.termTo}
      />
      <Select
        placeholder="Wybierz Hotel"
        options={hotels}
        register={register("hotel", { required: "Hotel Wymagany" })}
        error={errors.hotel}
      />
      <RadioGrup label="Transport" error={errors.transport}>
        <Radio
          name="transport"
          label="Admin"
          value="ADMIN"
          register={register("transport", { required: "Transport Wymagany" })}
        />
        <Radio
          name="transport"
          label="Manager"
          value="MANAGER"
          register={register("transport", { required: "Transport Wymagany" })}
        />
        <Radio
          name="transport"
          label="Pracownik"
          value="WORKER"
          register={register("transport", { required: "Transport Wymagany" })}
        />
      </RadioGrup>
      <CheckboxGrup label="Wybierz Atrakcje" error={errors.offerAttractions}>
        {offerAttractions.map((offerAttraction) => (
          <Checkbox
            label={offerAttraction.name}
            value={offerAttraction}
            register={register("offerAttractions", {
              required: "Atrakcje Wymagane",
            })}
          />
        ))}
      </CheckboxGrup>

      <Button label="OFERTA" />
    </form>
  );
}
