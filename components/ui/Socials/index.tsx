import Icon from '../Icon';
import classes from './Socials.module.scss';

const Socials = () => {
  return (
    <ul className={classes.socials}>
      <li>
        <a
          href='https://facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Icon icon='facebook' size={24} />
        </a>
      </li>
      <li>
        <a href='https://twitter.com' rel='noopener noreferrer' target='_blank'>
          <Icon icon='twitter' size={24} />
        </a>
      </li>
      <li>
        <a
          href='https://instagramm.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <Icon icon='instagram' size={24} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
