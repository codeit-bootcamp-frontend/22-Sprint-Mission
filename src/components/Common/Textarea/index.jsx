import cn from 'classnames';
import styles from './index.module.css';

function Textarea({
  children,
  className = '',
  name,
  error = false,
  placeholder,
  ...props
}) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean); // 없는 클래스 제거

  return (
    <textarea
      className={cn(styles.textarea, error && styles.error, ...extraClasses)}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Textarea;
