import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './Navbar.module.scss';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Headphones', path: '/headphones' },
  { title: 'Speakers', path: '/speakers' },
  { title: 'Earphones', path: '/earphones' }
];

const Navbar = () => {
  const router = useRouter();

  // const linkClasses = clsx({
  //   [classes.link]: true,
  //   [classes.link__active]: router.pathname === link.path
  // });

  return (
    <nav className={classes.nav}>
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
