import cn from 'classnames';
import styles from './index.module.css';
import Button from '@/components/Common/Button';

function Modal({ className = '', to, button, title, subText, onClose }) {
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean);

  const classNames = cn(styles.modalBox, ...extraClasses);

  return (
    <div className={styles.modalWrap} onClick={onClose}>
      <div className={classNames} to={to} onClick={(e) => e.stopPropagation()}>
        {title && <p className={styles.modalTitle}>{title}</p>}
        {subText && <p className={styles.modalSubText}>{subText}</p>}
        {button && (
          <div className={styles.buttonWrap}>
            <Button
              type="button"
              className="primary btnM btnClose"
              onClick={onClose}
            >
              {button}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
