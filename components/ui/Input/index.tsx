import clsx from 'clsx';
import classes from './Input.module.scss';

type InputProps = {
  htmlFor: string;
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  radio?: boolean;
  radioInput?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  htmlFor,
  label,
  type,
  id,
  name,
  placeholder,
  className,
  value,
  checked,
  radio,
  radioInput,
  onChange
}: InputProps) => {
  const labelClasses = clsx(
    {
      [classes.label]: true,
      [classes.radio]: radio
    },
    className
  );
  const inputClasses = clsx(
    {
      [classes.input]: true,
      [classes.radioInput]: radioInput
    },
    className
  );

  return (
    <>
      <input
        type={type ? type : 'text'}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        checked={checked}
        onChange={onChange}
      />{' '}
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
        {radio && <span></span>}
      </label>
    </>
  );
};

export default Input;
