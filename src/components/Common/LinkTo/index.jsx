import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './index.module.css';

function LinkTo({ children, className = '', to }) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean);

  const classNames = cn(styles.linkto, ...extraClasses);

  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
}

export default LinkTo;
