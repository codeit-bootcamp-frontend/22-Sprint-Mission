import cn from 'classnames';
import styles from './index.module.css';
import Button from '@/components/Common/Button';
import { useState } from 'react';

function Input({ children, className = '', error = false, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };
  const extraClasses = className
    .split(' ')
    .map((name) => styles[name])
    .filter(Boolean);
  return (
    <>
      <input
        className={cn(styles.input, error && styles.error)}
        {...props}
        type={showPassword ? 'text' : 'password'}
      />
      <Button
        type="button"
        className={cn('input passwordToggle', error && 'error')}
        onClick={handleToggle}
        view={showPassword}
      />
    </>
  );
}

export default Input;
