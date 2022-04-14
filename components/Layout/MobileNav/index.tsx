import clsx from 'clsx';
import Categories from '../../Sections/Categories';
import classes from './MobileNav.module.scss';
import { useAppSelector } from '../../../app/hooks';

const MobileNav = () => {
  const open = useAppSelector((state) => state.mobileNav.open);

  const mobileNavClasses = clsx({
    [classes.nav]: true,
    [classes.nav__visible]: open
  });

  return (
    <nav className={mobileNavClasses}>
      <Categories />
    </nav>
  );
};

export default MobileNav;
