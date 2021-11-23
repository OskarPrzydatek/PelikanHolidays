type LoginPageLayoutProps = {
  children: React.ReactNode;
};

const LoginPageLayout = ({
  children,
}: LoginPageLayoutProps): React.ReactElement => {
  return <div>{children}</div>;
};

export default LoginPageLayout;
