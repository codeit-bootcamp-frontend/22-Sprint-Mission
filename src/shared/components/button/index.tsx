import type { ElementType } from 'react';
import type { ButtonProps } from '@/shared/components/button/button.types';
import { cn } from '@/shared/utils/cn';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'inline-flex cursor-pointer items-center justify-center transition-colors duration-200',
    'disabled:bg-secondary-400 disabled:cursor-not-allowed disabled:border-0',
    'aria-disabled:bg-secondary-400 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:border-0',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-100 text-secondary-100',
          'overflow-hidden',
          'hover:bg-primary-200 active:bg-primary-300',
        ],
        outline: [
          'bg-secondary-50 text-primary-100 border-primary-100 border',
          'hover:bg-primary-100/10 disabled:text-secondary-100',
        ],
      },
      size: {
        large: [
          'typo-2lg-semibold md:typo-xl-semibold',
          'min-h-12 min-w-60 rounded-full px-[1em] md:min-h-14 md:min-w-89.25',
        ],
        medium: [
          'typo-2lg-semibold',
          'min-h-12 min-w-60 rounded-full px-[1em]',
        ],
        small48: ['typo-lg-semibold', 'min-h-12 rounded-lg px-7.5'],
        small40: ['typo-lg-semibold', 'min-h-10 rounded-lg px-5.75'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  }
);

/**
 * 전역에서 사용하는 버튼 컴포넌트입니다.
 * as 속성을 통해 button 외에도 Link 등 다른 태그로 렌더링할 수 있습니다.
 */
export function Button<T extends ElementType = 'button'>({
  as,
  type = 'button',
  variant = 'primary',
  size = 'large',
  onClick,
  className,
  disabled,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? 'button';

  return (
    <Component
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(Component === 'button'
        ? { type, disabled }
        : { 'aria-disabled': disabled })}
      {...props}
    >
      {children}
    </Component>
  );
}
