type PanelFuncButtonProps = {
  label: string;
  onClick: () => any;
};

export default function PanelFuncButton({
  label,
  onClick,
}: PanelFuncButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-xl bg-white p-2 border-8 border-black font-black 
						focus:outline-none focus-visible:outline-none `}
    >
      {label}
    </button>
  );
}
