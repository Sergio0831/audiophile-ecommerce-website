import classes from './Overlay.module.scss';
import clsx from 'clsx';

type OverlayProps = {
  navOverlay?: boolean;
  checkout?: boolean;
};

const Overlay = ({ navOverlay, checkout }: OverlayProps) => {
  const overlayClasses = clsx({
    [classes.overlay]: true,
    [classes.overlay__nav]: navOverlay,
    [classes.overlay__checkout]: checkout
  });

  return <div className={overlayClasses}></div>;
};

export default Overlay;
