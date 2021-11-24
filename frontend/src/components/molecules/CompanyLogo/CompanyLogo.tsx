import Logo from "@atoms/Logo/Logo";

const CompanyLogo = () => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <Logo />
      <div className="italic text-center">
        <h1 className="text-7xl font-black">PELIKAN HOLIDAYS</h1>
        <p className="text-3xl">NAJLEPSZE WAKACJE 4EVER</p>
      </div>
    </div>
  );
};

export default CompanyLogo;
