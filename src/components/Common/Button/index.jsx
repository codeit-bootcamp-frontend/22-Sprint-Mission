import cn from 'classnames';
import styles from './index.module.css';

function Button({ children, className = '', ...props }) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean); // 없는 클래스 제거

  return (
    <button className={cn(styles.btn, ...extraClasses)} {...props}>
      {children}
    </button>
  );
}

export default Button;
