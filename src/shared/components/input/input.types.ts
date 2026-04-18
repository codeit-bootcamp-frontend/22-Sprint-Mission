import type { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  textarea?: boolean;
  rows?: number;
}
