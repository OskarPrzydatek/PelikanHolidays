import ValidationMessage from "@atoms/ValidationMessage/ValidationMessage";

type CheckboxGrupProps = {
  label: string;
  children: React.ReactNode;
  error?: any;
};

export default function CheckboxGrup({
  label,
  children,
  error,
}: CheckboxGrupProps) {
  return (
    <div className="space-y-2">
      <h2>{label}</h2>
      <div className="flex flex-col">{children}</div>
      {error && <ValidationMessage message={error.message} />}
    </div>
  );
}
