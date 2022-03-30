import clsx from 'clsx';
import { socials } from '../../../db/socials';
import Icon from '../Icon';
import classes from './Socials.module.scss';

type SocialsProps = {
  className?: string;
};

const Socials = ({ className }: SocialsProps) => {
  const socialsClasses = clsx(
    {
      [classes.socials]: true
    },
    className
  );

  return (
    <ul className={socialsClasses}>
      {socials.map((social) => (
        <li>
          <a
            href={`https://${social.icon}.com`}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Icon icon={social.icon} size={social.size} color={social.color} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
