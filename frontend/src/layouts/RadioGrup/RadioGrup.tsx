import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";

type RadioGrupProps = {
  label: string;
  children: React.ReactNode;
  error?: any;
};

export default function RadioGrup({ label, children, error }: RadioGrupProps) {
  return (
    <div>
      <h2>{label}</h2>
      <div className="w-full flex justify-between px-4">{children}</div>
      {error && <ValidationMessage message={error.message} />}
    </div>
  );
}
