import EditIcon from './edit.svg?react';
import PlusBubbleIcon from './plusBubble.svg?react';
import ArrowUpIcon from './arrowUp.svg?react';

export const icons = {
  edit: EditIcon,
  plusBubble: PlusBubbleIcon,
  arrowUp: ArrowUpIcon,
};

export type IconName = keyof typeof icons;
