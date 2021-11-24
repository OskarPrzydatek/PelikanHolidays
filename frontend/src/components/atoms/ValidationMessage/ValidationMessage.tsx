type ValidationMessageProps = {
  message: string;
};

const ValidationMessage = ({
  message,
}: ValidationMessageProps): React.ReactElement => {
  return <p className="text-red-500">{message}</p>;
};

export default ValidationMessage;
