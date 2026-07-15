import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = brand green fill; `default` = neutral bordered; `secondary` = inverted (foreground fill); `outline`/`dashed` = transparent bordered; `text` = no border; `danger`/`warning` = status fills. */
  variant?: 'primary' | 'default' | 'secondary' | 'outline' | 'dashed' | 'text' | 'danger' | 'warning';
  /** Height + padding + font-size step. */
  size?: 'tiny' | 'small' | 'medium' | 'large';
  /** Stretch to fill container width. */
  block?: boolean;
  /** Pill-shaped (border-radius: 999px). */
  rounded?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
