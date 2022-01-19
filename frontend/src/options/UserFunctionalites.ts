import { PanelFuncActions } from "@context/PanelFuncProvider/PanelFuncActions";

export type UserFunctionality = {
  label: string;
  functionality: any;
};

export const AdminFunctionalities: Array<UserFunctionality> = [
  {
    label: "Podgląd Użytkownika",
    functionality: PanelFuncActions.CHOOSE_SHOW,
  },
  {
    label: "Dodaj Użytkownika",
    functionality: PanelFuncActions.CHOOSE_ADD,
  },
  {
    label: "Edytuj Użytkownika",
    functionality: PanelFuncActions.CHOOSE_EDIT,
  },
  {
    label: "Usuń Użytkownika",
    functionality: PanelFuncActions.CHOOSE_DELETE,
  },
];

export const ManagerFunctionalities: Array<UserFunctionality> = [
  {
    label: "Podgląd Zasobu",
    functionality: PanelFuncActions.CHOOSE_SHOW,
  },
  {
    label: "Dodaj Zasób",
    functionality: PanelFuncActions.CHOOSE_ADD,
  },
  {
    label: "Edytuj Zasób",
    functionality: PanelFuncActions.CHOOSE_EDIT,
  },
  {
    label: "Usuń Zasób",
    functionality: PanelFuncActions.CHOOSE_DELETE,
  },
];

export const WorkerFunctionalities: Array<UserFunctionality> = [
  {
    label: "Podgląd Oferty",
    functionality: PanelFuncActions.CHOOSE_SHOW,
  },
  {
    label: "Dodaj Ofertę",
    functionality: PanelFuncActions.CHOOSE_ADD,
  },
  {
    label: "Edytuj Ofertę",
    functionality: PanelFuncActions.CHOOSE_EDIT,
  },
  {
    label: "Usuń Ofertę",
    functionality: PanelFuncActions.CHOOSE_DELETE,
  },
];
