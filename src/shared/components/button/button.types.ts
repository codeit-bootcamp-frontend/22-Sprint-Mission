import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react';

export type ButtonVariant = 'primary' | 'outline';
export type ButtonSize = 'large' | 'medium' | 'small48' | 'small40';

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ComponentProps<'button'>['type'];
};

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
} & ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonBaseProps | 'as'>;
