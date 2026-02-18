import cn from 'classnames';
import styles from './index.module.css';

function Button({
  children,
  className = '',
  active = false,
  disabled = false,
  view = false,
  ...props
}) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean); // 없는 클래스 제거

  return (
    <button
      className={cn(styles.btn, ...extraClasses, {
        [styles.active]: view, // true면 active
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
