import ChooseForm from "@conditioners/ChooseForm/ChooseForm";
import { PanelFunctionalites } from "@models/PanelFuctionalites";

type FormViewProps = {
  role: string;
  functionality: string;
};

export default function FormView({ role, functionality }: FormViewProps) {
  return (
    <>
      {functionality === PanelFunctionalites.ADD && (
        <ChooseForm functionality={PanelFunctionalites.ADD} role={role} />
      )}
      {functionality === PanelFunctionalites.EDIT && (
        <ChooseForm functionality={PanelFunctionalites.EDIT} role={role} />
      )}
    </>
  );
}
