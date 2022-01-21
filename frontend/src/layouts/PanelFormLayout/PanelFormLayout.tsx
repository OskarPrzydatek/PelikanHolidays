type PanelFormLayoutProps = {
  label: string;
  onSubmit: (value: any) => any;
  children: React.ReactNode;
  height: string;
};

export default function PanelFormLayout({
  label,
  onSubmit,
  children,
  height,
}: PanelFormLayoutProps) {
  return (
    <form
      className="space-y-6 overflow-auto pr-8 scrollbar scrollbar-thumb-black scrollbar-track-white"
      onSubmit={onSubmit}
    >
      <h2 className="text-4xl mb-2">{label}</h2>
      {children}

      <style jsx>{`
        form {
          height: calc(${height}vh);
        }
      `}</style>
    </form>
  );
}
