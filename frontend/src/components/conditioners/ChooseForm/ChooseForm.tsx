import AdminForm from "@blinks/AdminForm/AdminForm";
import ManagerForm from "@blinks/ManagerForm/ManagerForm";
import WorkerForm from "@blinks/WorkerForm/WorkerForm";
import { Users } from "@models/Users";

type ChooseFormProps = {
  role: string;
  functionality: string;
};

export default function ChooseForm({ role, functionality }: ChooseFormProps) {
  return (
    <>
      {role === Users.ADMIN && <AdminForm functionality={functionality} />}
      {role == Users.MANAGER && <ManagerForm functionality={functionality} />}
      {role === Users.WORKER && <WorkerForm functionality={functionality} />}
    </>
  );
}
