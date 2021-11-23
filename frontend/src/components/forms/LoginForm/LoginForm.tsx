import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@atoms/Button/Button";
import Input from "@molecules/Input/Input";

type LoginFormValues = {
  login: string;
  password: string;
};

const LoginForm = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  // Temporary method to debug
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Login"
        type="text"
        register={register("login", { required: "Login Wymagany" })}
        error={errors.login}
      />
      <Input
        label="Haslo"
        type="password"
        register={register("password", { required: "Hasło Wymagane" })}
        error={errors.password}
      />
      <Button label="Zaloguj" />
    </form>
  );
};

export default LoginForm;
