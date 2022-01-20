import AdminRepresentation from "@blinks/AdminRepresentation/AdminRepresentation";
import ManagerRepresentation from "@blinks/ManagerRepresentation/ManagerRepresentation";
import WorkerRepresentation from "@blinks/WorkerRepresentation/WorkerRepresentation";
import { Users } from "@models/Users";

type ChooseFormProps = {
  role: string;
  functionality: string;
};

export default function ChooseRepresentation({
  role,
  functionality,
}: ChooseFormProps) {
  return (
    <>
      {role === Users.ADMIN && (
        <AdminRepresentation functionality={functionality} />
      )}
      {role === Users.MANAGER && (
        <ManagerRepresentation functionality={functionality} />
      )}
      {role === Users.WORKER && (
        <WorkerRepresentation functionality={functionality} />
      )}
    </>
  );
}
