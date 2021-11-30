import Logo from "@atoms/Logo/Logo";

const CompanyLogo = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <Logo />
      <div className="italic text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 3xl:text-7xl font-black">PELIKAN HOLIDAYS</h1>
        <p className="hidden md:block text-2xl 3xl:text-3xl">NAJLEPSZE WAKACJE 4EVER</p>
      </div>
    </div>
  );
};

export default CompanyLogo;
