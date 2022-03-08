import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import Navbar from '../Navbar';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`section-center ${classes.header__container}`}>
        <Button name='logo' link='/' className={classes.logo}>
          <Icon icon='logo' size='100%' />
        </Button>
        <Navbar />
        <Button name='cart' link='/cart' className={classes.cart}>
          <Icon icon='cart' size='2rem' />
        </Button>
      </div>
    </header>
  );
};

export default Header;
