import type { InputProps } from '@/shared/components/input/input.types';
import { Label } from '@/shared/components/label';
import { cn } from '@/shared/utils/cn';
import { useId, type ComponentProps, type Ref } from 'react';

/**
 * 전역에서 사용하는 인풋 컴포넌트입니다.
 * 기본적으로 `<input>` 요소로 렌더링되며, `textarea` 속성을 true로 전달하면 `<textarea>`로 변환됩니다.
 * @example
 * // 1. 일반 Input
 * <Input label="상품명" placeholder="상품 이름을 입력해주세요" />
 * // 2. Textarea 사용
 * <Input textarea label="상품 설명" rows={5} placeholder="설명을 입력해주세요" />
 * // 3. 에러 상태 처리
 * <Input label="가격" errorMessage="숫자만 입력 가능합니다." />
 */
export function Input({
  label,
  type = 'text',
  id,
  required,
  ref,
  placeholder,
  className,
  labelClassName,
  errorMessage,
  textarea = false,
  rows = 3,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  const INPUT_CLASS = cn(
    'bg-secondary-100 typo-lg-regular text-secondary-800 w-full rounded-xl px-6 py-3.5',
    'placeholder:text-secondary-400',
    errorMessage && 'border-error border',
    className
  );

  return (
    <div className="flex w-full flex-col gap-4">
      {label && (
        <Label inputId={inputId} label={label} className={labelClassName} />
      )}

      {textarea ? (
        <textarea
          id={inputId}
          name={inputId}
          required={required}
          ref={ref as Ref<HTMLTextAreaElement>}
          placeholder={placeholder}
          rows={rows}
          className={cn(INPUT_CLASS, 'min-h-26 resize-none')}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={errorMessage ? errorId : undefined}
          {...(props as ComponentProps<'textarea'>)}
        />
      ) : (
        <input
          type={type}
          id={inputId}
          name={inputId}
          required={required}
          ref={ref as Ref<HTMLInputElement>}
          placeholder={placeholder}
          className={cn(INPUT_CLASS, 'min-h-14')}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={errorMessage ? errorId : undefined}
          {...(props as ComponentProps<'input'>)}
        />
      )}
      {errorMessage && (
        <p id={errorId} className="typo-lg-semibold text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
