import Icon from '../../ui/Icon';
import Logo from '../../ui/Logo';
import Socials from '../../ui/Socials';
import Navbar from '../Navbar';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__container} section-center`}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.nav}>
          <Navbar />
        </div>
        <div className={classes.text}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className={classes.socials}>
          <Socials />
        </div>
        <div className={classes.copy}>
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
