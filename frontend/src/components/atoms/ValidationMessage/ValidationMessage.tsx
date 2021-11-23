type ValidationMessageProps = {
  message: string;
};

const ValidationMessage = ({
  message,
}: ValidationMessageProps): React.ReactElement => {
  return <p>{message}</p>;
};

export default ValidationMessage;
