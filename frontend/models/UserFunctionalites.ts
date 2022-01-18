export type UserFunctionality = {
  label: string;
  endpoint: string;
};

export const AdminFunctionalities: Array<UserFunctionality> = [
  {
    label: "Dodaj Użytkownika",
    endpoint: "",
  },
  {
    label: "Edytuj Użytkownika",
    endpoint: "",
  },
  {
    label: "Usuń Użytkownika",
    endpoint: "",
  },
];

export const ManagerFunctionalities: Array<UserFunctionality> = [
  {
    label: "Dodaj Zasób",
    endpoint: "",
  },
  {
    label: "Edytuj Zasób",
    endpoint: "",
  },
  {
    label: "Usuń Zasób",
    endpoint: "",
  },
];

export const WorkerFunctionalities: Array<UserFunctionality> = [
  {
    label: "Dodaj Ofertę",
    endpoint: "",
  },
  {
    label: "Edytuj Ofertę",
    endpoint: "",
  },
  {
    label: "Usuń Ofertę",
    endpoint: "",
  },
];
