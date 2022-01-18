import type { NextPage } from "next";
import LoginPageLayout from "@layouts/LoginPageLayout/LoginPageLayout";
import CompanyLogo from "@molecules/CompanyLogo/CompanyLogo";
import LoginForm from "../components/forms/LoginForm/LoginForm";
import Loading from "@atoms/Loading/Loading";

const Home: NextPage = () => {
  return (
    
    <Loading />
  );
};

export default Home;


{/* <LoginPageLayout>
      <CompanyLogo />
      <LoginForm />
    </LoginPageLayout> */}