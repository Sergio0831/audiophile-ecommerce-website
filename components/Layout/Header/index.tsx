import clsx from 'clsx';
import { useRouter } from 'next/router';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import Logo from '../../ui/Logo';
import MenuBtn from '../../ui/MenuBtn';
import { useAppDispatch } from '../../../app/hooks';
import Navbar from '../Navbar';
import classes from './Header.module.scss';
import { closeCart, toggleCart } from '../../../features/cart/cartSlice';

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

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
          className={classes.cart}
          aria-label='Cart'
          onClick={() => dispatch(toggleCart())}
        >
          <Icon icon='cart' size='2.3rem' color='#fff' />
        </Button>
      </div>
    </header>
  );
};

export default Header;
