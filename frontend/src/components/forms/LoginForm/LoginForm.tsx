import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@atoms/Button/Button";
import Input from "@molecules/Input/Input";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  // Temporary method to debug
  const onSubmit: SubmitHandler<LoginFormValues> = async (formData) => {
    const URL = `localhost:8080/login?email=${formData.email}&password=${formData.password}`;

    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
  };

  return (
    <form
      className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-4/5 lg:w-3/5 space-y-2 sm:space-y-10">
        <div className="space-y-2 sm:space-y-4">
          <Input
            placeholder="Email"
            type="text"
            register={register("email", { required: "Email Wymagany" })}
            error={errors.email}
          />
          <Input
            placeholder="Haslo"
            type="password"
            register={register("password", { required: "Hasło Wymagane" })}
            error={errors.password}
          />
        </div>

        <Button label="ZALOGUJ" />
      </div>
    </form>
  );
};

export default LoginForm;
