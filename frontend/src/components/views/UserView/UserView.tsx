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

    window.location.reload();
  };

  return (
    <section className="text-2xl sm:text-3xl overflow-auto scrollbar scrollbar-thumb-black scrollbar-track-white">
      <h2 className="text-3xl sm:text-4xl mb-2">
        {deleteUser ? "Usuń" : "Podgląd"} Użytkownika
      </h2>
      <ul className="my-4 space-y-4">
        <li className="flex flex-col">
          <strong>Email:</strong>
          <span>{resource.email}</span>
        </li>
        <li className="flex flex-col">
          <strong>Imię:</strong>
          <span>{resource.firstName}</span>
        </li>
        <li className="flex flex-col">
          <strong>Nazwisko:</strong>
          <span>{resource.lastName}</span>
        </li>
        <li className="flex flex-col">
          <strong>Hasło:</strong>
          <span>{resource.password}</span>
        </li>
        <li className="flex flex-col">
          <strong>Rola:</strong>
          <span>{resource.userType}</span>
        </li>
      </ul>
      {deleteUser && (
        <Button label="Usuń Użytkownika" onClick={deleteUserHandler} />
      )}

      <style jsx>{`
        section {
          height: calc(82vh);
        }
      `}</style>
    </section>
  );
}
