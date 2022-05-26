import clsx from 'clsx';
import { useRouter } from 'next/router';
import Button from '../../ui/Button';
import Icon from '../../ui/Icon';
import Logo from '../../ui/Logo';
import MenuBtn from '../../ui/MenuBtn';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Navbar from '../Navbar';
import classes from './Header.module.scss';
import { toggleCart } from '../../../features/cart/cartSlice';
import Amount from '../../ui/Amount';
import { close } from '../../../features/mobileNav/mobileNavSlice';

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartTotalQuantity } = useAppSelector((state) => state.cart);

  const headerClasses = clsx({
    [classes.header]: true,
    [classes.header__home]: router.pathname === '/'
  });

  return (
    <header className={headerClasses}>
      <div className={`section-center ${classes.header__container}`}>
        <MenuBtn />
        <div className={classes.header__logo}>
          <Logo />
        </div>
        <Navbar className={classes.header__nav} />
        <Button
          name='cart'
          className={classes.cart}
          ariaLabel='Cart'
          onClick={(e) => {
            dispatch(toggleCart());
            dispatch(close());
            e.stopPropagation();
          }}
        >
          <Icon icon='cart' size='2.3rem' color='#fff' />
          {cartTotalQuantity > 0 && <Amount items={cartTotalQuantity} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
