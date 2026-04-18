import type { ComponentProps } from 'react';

export interface ImageUploaderProps extends Omit<
  ComponentProps<'input'>,
  'onChange'
> {
  label?: string;
  labelClassName?: string;
  errorMessage?: string;
  onChange?: (file: File | null) => void;
}
