import clsx from 'clsx';
import { useRouter } from 'next/router';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import Logo from '../../ui/Logo';
import MenuBtn from '../../ui/MenuBtn';
import Navbar from '../Navbar';
import classes from './Header.module.scss';

const Header = () => {
  const router = useRouter();

  const headerClasses = clsx({
    [classes.header]: true,
    [classes.header__home]: router.pathname === '/'
  });

  return (
    <header className={headerClasses}>
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
