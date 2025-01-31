import React from 'react';
import { icons, IconName } from '@icons/index';

type IconProps = {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    />
  );
};

export default Icon;
