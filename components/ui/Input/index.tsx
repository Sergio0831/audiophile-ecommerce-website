import clsx from 'clsx';
import classes from './Input.module.scss';

type InputProps = {
  htmlFor: string;
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  className?: string;
};

const Input = ({
  htmlFor,
  label,
  type,
  id,
  name,
  placeholder,
  className
}: InputProps) => {
  const labelClasses = clsx(
    {
      [classes.label]: true
    },
    className
  );
  const inputClasses = clsx(
    {
      [classes.input]: true
    },
    className
  );

  return (
    <label htmlFor={htmlFor} className={labelClasses}>
      {label}
      <input
        type={type ? type : 'text'}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
      />
    </label>
  );
};

export default Input;
