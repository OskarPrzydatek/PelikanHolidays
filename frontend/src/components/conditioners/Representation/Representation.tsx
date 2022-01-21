import ChooseRepresentation from "@conditioners/ChooseRepresentation/ChooseRepresentation";
import { PanelFunctionalites } from "@models/PanelFuctionalites";

type RepresentationProps = {
  role: string;
  functionality: string;
};

export default function Representation({
  role,
  functionality,
}: RepresentationProps) {
  return (
    <>
      {functionality === PanelFunctionalites.SHOW && (
        <ChooseRepresentation
          role={role}
          functionality={PanelFunctionalites.SHOW}
        />
      )}
      {functionality === PanelFunctionalites.DELETE && (
        <ChooseRepresentation
          role={role}
          functionality={PanelFunctionalites.DELETE}
        />
      )}
    </>
  );
}
