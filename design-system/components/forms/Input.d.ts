import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  label?: string;
  hint?: string;
  error?: string;
}

export declare function Input(props: InputProps): JSX.Element;
