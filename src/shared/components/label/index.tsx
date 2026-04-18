import type { LabelProps } from '@/shared/components/label/label.types';
import { cn } from '@/shared/utils/cn';

export function Label({
  inputId,
  className,
  label,
  as: Component = 'label',
}: LabelProps) {
  return (
    <Component
      htmlFor={Component === 'label' ? inputId : undefined}
      className={cn('typo-2lg-bold text-secondary-800 block', className)}
    >
      {label}
    </Component>
  );
}
