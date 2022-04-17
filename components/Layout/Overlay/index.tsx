import classes from './Overlay.module.scss';
import clsx from 'clsx';

type OverlayProps = {
  showOverlay: boolean;
  navOverlay?: boolean;
};

const Overlay = ({ navOverlay, showOverlay }: OverlayProps) => {
  const overlayClasses = clsx({
    [classes.overlay]: true,
    [classes.overlay__visible]: showOverlay,
    [classes.overlay__nav]: navOverlay
  });

  return <div className={overlayClasses}></div>;
};

export default Overlay;
