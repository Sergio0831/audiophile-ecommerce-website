import IcoMoon from 'react-icomoon';
import iconSet from '../../../icons/selection.json';

type IconProps = {
  color?: string;
  size?: string | number;
  icon: string;
  className?: string;
};

const Icon = ({ color, size, icon, className = '' }: IconProps) => {
  return (
    <IcoMoon
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
