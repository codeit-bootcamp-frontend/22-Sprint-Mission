import cn from 'classnames';
import styles from './index.module.css';

function Textarea({ children, className = '', error = false, ...props }) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean); // 없는 클래스 제거

  return (
    <textarea
      className={cn(styles.textarea, error && styles.error, ...extraClasses)}
      {...props}
    />
  );
}

export default Textarea;
