import classes from './MenuBtn.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggle } from '../../../features/mobileNav/mobileNavSlice';
import clsx from 'clsx';
import { Turn as Hamburger } from 'hamburger-react';
import { closeCart } from '../../../features/cart/cartSlice';

const MenuBtn = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.mobileNav.open);

  return (
    <div className={classes.menu__btn}>
      <Hamburger
        toggled={open}
        toggle={() => {
          dispatch(toggle());
          dispatch(closeCart());
        }}
        size={20}
        label='Show menu'
        hideOutline={false}
        distance='lg'
        duration={0.2}
      />
    </div>
  );
};

export default MenuBtn;
