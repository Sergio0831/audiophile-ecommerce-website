import classes from './MenuBtn.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggle } from '../../../features/mobileNav/mobileNavSlice';

const MenuBtn = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.mobileNav.open);

  return (
    <>
      <input
        type='checkbox'
        id='menu-checkbox'
        className={classes.menu}
        onChange={() => dispatch(toggle())}
        checked={open}
      />
      <label htmlFor='menu-checkbox' className={classes.menu__label}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </>
  );
};

export default MenuBtn;
