import classes from './MenuBtn.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { toggle } from '../../../features/mobileNav/mobileNavSlice';
import Button from '../Button';
import clsx from 'clsx';

const MenuBtn = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.mobileNav.open);

  const btnClasses = clsx({
    [classes.menu__btn]: true,
    [classes.menu__open]: open
  });

  return (
    <>
      <Button
        className={btnClasses}
        onClick={() => dispatch(toggle())}
        ariaLabel='Menu'
      >
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </Button>
    </>
  );
};

export default MenuBtn;
