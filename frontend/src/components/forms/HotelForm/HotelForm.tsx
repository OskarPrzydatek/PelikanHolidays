import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@molecules/Input/Input";
import TextArea from "@molecules/TextArea/TextArea";
import Button from "@atoms/Button/Button";

type HotelFormValues = {
  name: string;
  address: string;
  stars: number;
  description: string;
};

export default function HotelForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HotelFormValues>();

  const onSubmit: SubmitHandler<HotelFormValues> = async (formData) => {
    console.log(formData);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nazwa Hotelu"
        register={register("name", { required: "Nazwa Hotelu Wymagana" })}
        error={errors.name}
      />
      <Input
        placeholder="Adres"
        register={register("address", { required: "Adres Hotelu Wymagany" })}
        error={errors.address}
      />
      <Input
        placeholder="Gwiazdki"
        register={register("stars", {
          required: "Ilość Gwiazdek Wymagana",
          setValueAs: (v) => parseFloat(v),
        })}
        error={errors.stars}
      />
      <TextArea
        placeholder="Opis Hotelu"
        register={register("description", { required: true, maxLength: 200 })}
        error={errors.description}
      />

      <Button label={"HOTEL"} />
    </form>
  );
}
