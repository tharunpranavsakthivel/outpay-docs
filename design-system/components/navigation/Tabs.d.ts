import * as React from 'react';

export interface TabItem { value: string; label: string; }

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  /** Render-prop: receives the active tab value, returns the panel content. */
  children: (active: string) => React.ReactNode;
}

export declare function Tabs(props: TabsProps): JSX.Element;
