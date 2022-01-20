import Button from "@atoms/Button/Button";
import Radio from "@atoms/Radio/Radio";
import RadioGrup from "@layouts/RadioGrup/RadioGrup";
import Input from "@molecules/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type UserFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userType: string;
};

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>();

  const onSubmit: SubmitHandler<UserFormValues> = async (formData) => {
    console.log(formData);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email"
        type="text"
        register={register("email", {
          required: "Email Wymagany",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Nieprawidłowy email",
          },
        })}
        error={errors.email}
      />
      <Input
        placeholder="Imię"
        register={register("firstName", { required: "Imię Wymagane" })}
        error={errors.firstName}
      />
      <Input
        placeholder="Nazwisko"
        register={register("lastName", { required: "Nazwisko Wymagane" })}
        error={errors.lastName}
      />
      <Input
        placeholder="Hasło"
        register={register("password", {
          required: "Hasło Wymagane",
          minLength: 6,
          maxLength: 12,
        })}
        error={errors.password}
        minLengthValidationMessage="Hasło Powinno Zawierać Conajmniej 6 Znaków"
        maxLengthValidationMessage="Hasło Nie Powinno Zawierać Więcej Niż 12 Znaków "
      />
      <RadioGrup label="Rola Użytkownika" error={errors.userType}>
        <Radio
          name="userType"
          label="Admin"
          value="ADMIN"
          register={register("userType", { required: "Rola Wymagana" })}
        />
        <Radio
          name="userType"
          label="Manager"
          value="MANAGER"
          register={register("userType", { required: "Rola Wymagana" })}
        />
        <Radio
          name="userType"
          label="Pracownik"
          value="WORKER"
          register={register("userType", { required: "Rola Wymagana" })}
        />
      </RadioGrup>
      <Button label="UŻYTKOWNIK" />
    </form>
  );
}
