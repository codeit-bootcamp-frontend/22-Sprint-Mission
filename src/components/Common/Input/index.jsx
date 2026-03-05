import cn from 'classnames';
import styles from './index.module.css';

function Input({ children, className = '', error = false, ...props }) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean); // 없는 클래스 제거

  return (
    <input
      className={cn(styles.input, error && styles.error, ...extraClasses)}
      {...props}
    />
  );
}

export default Input;
