import Link from 'next/link';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  activeClassName?: string;
  link?: string;
  name?: string;
  form?: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
};

const Button = ({
  type,
  className,
  link,
  children,
  onClick,
  name,
  form
}: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={className} onClick={onClick}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      name={name}
      className={className}
      onClick={onClick}
      form={form}
    >
      {children}
    </button>
  );
};

export default Button;
