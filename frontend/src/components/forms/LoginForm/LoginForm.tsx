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
    <form
      className="w-1/2 p-4 flex flex-col justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-3/5 space-y-10">
        <div className="space-y-4">
          <Input
            placeholder="Login"
            type="text"
            register={register("login", { required: "Login Wymagany" })}
            error={errors.login}
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
