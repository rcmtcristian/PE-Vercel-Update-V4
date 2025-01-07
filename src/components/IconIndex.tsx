import * as LucideIcons from 'lucide-react';

import * as MuiIcons from '@mui/icons-material'

export interface IconIndexProps {
  icon?:
    | "account-circle"
    | "check-circle"
    | "arrow-back"
    | "arrow-forward"
    | "menu"
    | "more-vert"
    | "brightness-1"
    | "crop-square"
    | "layers"
    | "more-horiz"
    | "send"
    | "play-arrow"
    | "network-wifi"
    | "battery-full"
    | "signal-cellular-4-bar"
    | "flash-on"
    | "close"
    | "search"
    | "square"
    | "triangle"
    | "web-asset"
    | "keyboard-arrow-down"
    | "keyboard-arrow-up"
    | "arrow-drop-down"
    | "arrow-drop-up"
    | "chevron-right"
    | "chevron-left"
    | "arrow-right"
    | "x"
    | "send";
  className?: string;
  iconLibrary?: 'material' | 'lucide';
  size?: number;
  color?: string;
}

export const IconIndex = ({
  icon = "arrow-drop-up",
  className = "",
  iconLibrary = 'material',
  size = 24,
  color = 'rgb(59, 130, 246)',
  ...props
}: IconIndexProps): JSX.Element => {
  // Map Material Icons to their component names
  const MuiIconMap: { [key: string]: string } = {
    'account-circle': 'AccountCircle',
    'check-circle': 'CheckCircle',
    'arrow-back': 'ArrowBack',
    'arrow-forward': 'ArrowForward',
    'menu': 'Menu',
    'more-vert': 'MoreVert',
    'brightness-1': 'Brightness1',
    'crop-square': 'CropSquare',
    'layers': 'Layers',
    'more-horiz': 'MoreHoriz',
    'send': 'send',
    'play-arrow': 'PlayArrow',
    'network-wifi': 'NetworkWifi',
    'battery-full': 'BatteryFull',
    'signal-cellular-4-bar': 'SignalCellular4Bar',
    'flash-on': 'FlashOn',
    'close': 'Close',
    'search': 'Search',
    'square': 'CheckBoxOutlineBlank',
    'triangle': 'ChangeHistory',
    'web-asset': 'WebAsset',
    'keyboard-arrow-down': 'KeyboardArrowDown',
    'keyboard-arrow-up': 'KeyboardArrowUp',
    'arrow-drop-down': 'ArrowDropDown',
    'arrow-drop-up': 'ArrowDropUp',
    'chevron-right': 'ChevronRight',
    'chevron-left': 'ChevronLeft'
  };

  // Map Lucide Icons to their component names
  const lucideIconMap: { [key: string]: string } = {
    'arrow-right': 'ArrowRight',
    'x': 'X',
    'send': 'SendHorizontal'
  };

  const renderIcon = () => {
    if (iconLibrary === 'material') {
      const IconComponent = (MuiIcons as any)[MuiIconMap[icon] || 'ArrowDropUp'];
      return IconComponent ? (
        <IconComponent 
          style={{ 
            fontSize: size, 
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
        />
      ) : null;
    } else {
      const IconComponent = (LucideIcons as any)[lucideIconMap[icon] || 'ArrowRight'];
      return IconComponent ? (
        <IconComponent 
          size={size} 
          color={color}
          className="flex items-center justify-center"
        />
      ) : null;
    }
  };

  return (
    <div
      className={`
        shrink-0 
        w-6 
        h-6 
        relative 
        flex 
        items-center 
        justify-center 
        ${className}
      `}
      {...props}
    >
      {renderIcon()}
    </div>
  );
};

export default IconIndex;