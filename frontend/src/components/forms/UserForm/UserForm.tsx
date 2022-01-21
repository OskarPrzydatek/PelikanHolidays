import Button from "@atoms/Button/Button";
import Radio from "@atoms/Radio/Radio";
import PanelFormLayout from "@layouts/PanelFormLayout/PanelFormLayout";
import RadioGrup from "@layouts/RadioGrup/RadioGrup";
import Input from "@molecules/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type UserFormProps = {
  editedUser?: any;
};

type UserFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userType: string;
};

export default function UserForm({ editedUser }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>();

  const onSubmit: SubmitHandler<UserFormValues> = async (formData) => {
    console.log(formData);

    if(editedUser) {
      await fetch(`http://localhost:8080/users/update/${editedUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
    } else {
      await fetch("http://localhost:8080/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
    }

    window.location.reload();
  };

  return (
    <PanelFormLayout
      label={editedUser ? "Edytuj Użytkownika" : "Dodaj Użytkownika"}
      onSubmit={handleSubmit(onSubmit)}
      height="85"
    >
      <Input
        placeholder="Podaj Email"
        label="Email"
        type="text"
        register={register("email", {
          required: "Email Wymagany",
          value: editedUser ? editedUser.email : "",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Nieprawidłowy email",
          },
        })}
        error={errors.email}
      />
      <Input
        placeholder="Podaj Imię"
        label="Imię"
        register={register("firstName", {
          required: "Imię Wymagane",
          value: editedUser ? editedUser.firstName : "",
        })}
        error={errors.firstName}
      />
      <Input
        placeholder="Podaj Nazwisko"
        label="Nazwisko"
        register={register("lastName", {
          required: "Nazwisko Wymagane",
          value: editedUser ? editedUser.lastName : "",
        })}
        error={errors.lastName}
      />
      <Input
        placeholder="Podaj Hasło"
        label="Hasło"
        register={register("password", {
          required: "Hasło Wymagane",
          value: editedUser ? editedUser.password : "",
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
          register={register("userType", {
            required: "Rola Wymagana",
            value: editedUser ? editedUser.userType : "",
          })}
        />
        <Radio
          name="userType"
          label="Manager"
          value="MANAGER"
          register={register("userType", {
            required: "Rola Wymagana",
            value: editedUser ? editedUser.userType : "",
          })}
        />
        <Radio
          name="userType"
          label="Pracownik"
          value="WORKER"
          register={register("userType", {
            required: "Rola Wymagana",
            value: editedUser ? editedUser.userType : "",
          })}
        />
      </RadioGrup>
      <Button label={editedUser ? "Edytuj Użytkownika" : "Dodaj Użytkownika"} />
    </PanelFormLayout>
  );
}
