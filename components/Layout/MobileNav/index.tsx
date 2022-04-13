import Categories from '../../Sections/Categories';
import classes from './MobileNav.module.scss';

const MobileNav = () => {
  return (
    <nav className={classes.nav}>
      <Categories />
    </nav>
  );
};

export default MobileNav;
