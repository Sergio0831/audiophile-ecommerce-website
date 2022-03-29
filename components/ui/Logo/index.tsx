import Button from '../Button';
import Icon from '../Icon';
import classes from './Logo.module.scss';

const Logo = () => {
  return (
    <Button name='logo' link='/' className={classes.logo} aria-label='Logo'>
      <Icon icon='logo' size='100%' />
    </Button>
  );
};

export default Logo;
