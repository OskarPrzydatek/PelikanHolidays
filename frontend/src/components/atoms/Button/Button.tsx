type ButtonProps = {
  label: string;
  onClick?: (...vals: any) => any;
};

const Button = ({ label, onClick }: ButtonProps): React.ReactElement => {
  return (
    <button
      className="bg-black text-white w-full text-3xl p-2 font-black mt-6"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
