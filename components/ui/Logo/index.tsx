import clsx from 'clsx';
import Button from '../Button';
import Icon from '../Icon';
import classes from './Logo.module.scss';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  const logoClasses = clsx(
    {
      [classes.logo]: true
    },
    className
  );

  return (
    <Button name='logo' link='/' className={logoClasses} aria-label='Logo'>
      <Icon icon='logo' size='100%' />
    </Button>
  );
};

export default Logo;
