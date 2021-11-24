type LoginPageLayoutProps = {
  children: React.ReactNode;
};

const LoginPageLayout = ({
  children,
}: LoginPageLayoutProps): React.ReactElement => {
  return <div className="flex p-10 h-screen justify-between">{children}</div>;
};

export default LoginPageLayout;
