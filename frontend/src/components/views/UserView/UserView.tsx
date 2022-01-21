import Button from "@atoms/Button/Button";

type UserViewProps = {
  resource: any;
  deleteUser?: boolean;
};

export default function UserView({ resource, deleteUser }: UserViewProps) {
  const deleteUserHandler = async () => {
    console.log("User Deleted");

    await fetch(`http://localhost:8080/users/delete/${resource.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <section className="text-3xl">
      <h2 className="text-4xl mb-2">
        {deleteUser ? "Usuń" : "Podgląd"} Użytkownika
      </h2>
      <ul className="my-4">
        <li>Email: {resource.email}</li>
        <li>Imię: {resource.firstName}</li>
        <li>Nazwisko: {resource.lastName}</li>
        <li>Hasło: {resource.password}</li>
        <li>Rola: {resource.userType}</li>
      </ul>
      {deleteUser && (
        <Button label="Usuń Użytkownika" onClick={deleteUserHandler} />
      )}
    </section>
  );
}
