import clsx from 'clsx';
import { ChangeEvent } from 'react';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/formData-types';
import classes from './Input.module.scss';

type InputProps = {
  htmlFor?: string;
  inputName: Path<FormValues>;
  label: string;
  register: UseFormRegister<FormValues>;
  rules?: RegisterOptions;
  type?: string;
  id: string;
  name?: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  value?: string;
  checked?: boolean;
  radio?: boolean;
  radioInput?: boolean;
  pattern?: { patternValue: string; message: string };
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  htmlFor,
  label,
  inputName,
  type,
  id,
  name,
  placeholder,
  inputClassName,
  labelClassName,
  value,
  checked,
  radio,
  radioInput,
  register,
  rules,
  onChange
}: InputProps) => {
  const labelClasses = clsx(
    {
      [classes.label]: true,
      [classes.radio]: radio
    },
    labelClassName
  );
  const inputClasses = clsx(
    {
      [classes.input]: true,
      [classes.radioInput]: radioInput
    },
    inputClassName
  );

  return (
    <>
      <input
        type={type ? type : 'text'}
        id={id}
        value={value}
        {...(register && register(inputName, rules))}
        placeholder={placeholder}
        className={inputClasses}
        checked={checked}
        name={name}
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
