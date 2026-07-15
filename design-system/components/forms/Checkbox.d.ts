import * as React from 'react';

export interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
