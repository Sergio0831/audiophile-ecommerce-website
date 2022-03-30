import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../../../db/navLinks';
import classes from './Navbar.module.scss';

type NavBarProps = {
  className?: string;
};

const Navbar = ({ className }: NavBarProps) => {
  const router = useRouter();

  const navClasses = clsx(
    {
      [classes.nav]: true
    },
    className
  );

  return (
    <nav className={navClasses}>
      <ul className={classes.nav__list}>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.path} passHref>
              <a
                className={
                  router.pathname === link.path
                    ? `${classes.link__active} ${classes.link}`
                    : `${classes.link}`
                }
              >
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
