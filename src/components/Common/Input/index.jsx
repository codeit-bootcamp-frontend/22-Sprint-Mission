import cn from 'classnames';
import styles from './index.module.css';

function Input({
  children,
  className = '',
  error = false,
  maxLength,
  onKeyDown,
  onBlur,
  ...props
}) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean);

  return (
    <input
      className={cn(styles.input, error && styles.error, ...extraClasses)}
      {...props}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
}

export default Input;
