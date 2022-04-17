import clsx from 'clsx';
import Categories from '../../Sections/Categories';
import classes from './MobileNav.module.scss';
import { useAppSelector } from '../../../app/hooks';
import Overlay from '../Overlay';

const MobileNav = () => {
  const openNav = useAppSelector((state) => state.mobileNav.open);

  const mobileNavClasses = clsx({
    [classes.nav]: true,
    [classes.nav__visible]: openNav
  });

  return (
    <>
      {openNav && <Overlay navOverlay showOverlay={openNav ? true : false} />}
      <nav className={mobileNavClasses}>
        <Categories />
      </nav>
    </>
  );
};

export default MobileNav;
