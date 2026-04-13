import cn from 'classnames';
import styles from './index.module.css';
import IconHeartInActive from '@/assets/ic_heart_inactive.svg';
import IconHeartActive from '@/assets/ic_heart_active.svg';

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
      {className === 'likeBtn' &&
        (active ? (
          <img src={IconHeartActive} ale="좋아요 하트 아이콘" />
        ) : (
          <img src={IconHeartInActive} />
        ))}
      {children}
    </button>
  );
}

export default Button;
