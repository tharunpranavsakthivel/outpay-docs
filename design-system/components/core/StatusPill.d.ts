import * as React from 'react';

export interface StatusPillProps extends React.HTMLAttributes<HTMLDivElement> {
  /** default = neutral outline; success = brand green (Paid); warning = amber (Pending); destructive = red (Failed); secondary = low-emphasis fill. */
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'secondary';
  children?: React.ReactNode;
}

export declare function StatusPill(props: StatusPillProps): JSX.Element;
