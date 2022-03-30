import Icon from '../../ui/Icon';
import Logo from '../../ui/Logo';
import Socials from '../../ui/Socials';
import Navbar from '../Navbar';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__container} section-center`}>
        <Logo className={classes.logo} />
        <Navbar className={classes.nav} />
        <p className={classes.text}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <Socials className={classes.socials} />
        <p className={classes.copy}>
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
