import type { NextPage } from "next";
import LoginPageLayout from "@layouts/LoginPageLayout/LoginPageLayout";
import CompanyLogo from "@molecules/CompanyLogo/CompanyLogo";
import LoginForm from "../components/forms/LoginForm/LoginForm";
import React from "react";

const Home: NextPage = () => {
  return (
    <LoginPageLayout>
      <CompanyLogo />
      <LoginForm />
    </LoginPageLayout>
  );
};

export default Home;
