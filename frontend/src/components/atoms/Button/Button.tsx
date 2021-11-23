/**
 *
 * @param onClickMethod (optional) - give us posibility
 * to implement callack for onClick button method with how many
 * params we want in callack and return what we want.
 *
 * @about onClickMethod && onClickMethod means than if onClickMethod
 * equals true then onClickMethod is called.
 *
 * @happy @hacking
 *
 */

type ButtonProps = {
  label: string;
  onClickMethod?: (...vals: any) => any;
};

const Button = ({ label, onClickMethod }: ButtonProps): React.ReactElement => {
  return <button onClick={onClickMethod && onClickMethod}>{label}</button>;
};

export default Button;
