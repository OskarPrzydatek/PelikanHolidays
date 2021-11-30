type LoginPageLayoutProps = {
  children: React.ReactNode;
};

const LoginPageLayout = ({
  children,
}: LoginPageLayoutProps): React.ReactElement => {
  return <div className="flex flex-col md:flex-row p-10 h-screen md:justify-between">{children}</div>;
};

export default LoginPageLayout;
