import Button from "@atoms/Button/Button";
import Input from "@molecules/Input/Input";
import TextArea from "@molecules/TextArea/TextArea";
import { useForm, SubmitHandler } from "react-hook-form";

type TuristAtractionValues = {
  name: string;
  price: number;
  description: string;
};

export default function TuristAtractionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TuristAtractionValues>();

  const onSubmit: SubmitHandler<TuristAtractionValues> = async (formData) => {
    console.log(formData);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nazwa Atrakcji"
        register={register("name", { required: "Nazwa Atrakcji Wymagana" })}
        error={errors.name}
      />
      <Input
        placeholder="Cena"
        register={register("price", {
          required: "Cena Wymagana",
          setValueAs: (v) => parseFloat(v),
        })}
        error={errors.price}
      />
      <TextArea
        placeholder="Opis Atrakcji"
        register={register("description", { required: true, maxLength: 200 })}
        error={errors.description}
      />

      <Button label={"ATRAKCJA TURYSTYCZNA"} />
    </form>
  );
}
