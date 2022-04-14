import classes from './Overlay.module.scss';
import { useAppSelector } from '../../../app/hooks';
import clsx from 'clsx';

const Overlay = () => {
  const open = useAppSelector((state) => state.mobileNav.open);

  const overlayClasses = clsx({
    [classes.overlay]: true,
    [classes.overlay__visible]: open
  });

  return <div className={overlayClasses}></div>;
};

export default Overlay;
