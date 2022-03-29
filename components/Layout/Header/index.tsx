import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import Logo from '../../ui/Logo';
import MenuBtn from '../../ui/MenuBtn';
import Navbar from '../Navbar';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`section-center ${classes.header__container}`}>
        <MenuBtn />
        <Logo />
        <Navbar />
        <Button
          name='cart'
          link='/cart'
          className={classes.cart}
          aria-label='Cart'
        >
          <Icon icon='cart' size='2rem' />
        </Button>
      </div>
    </header>
  );
};

export default Header;
