import cn from 'classnames';
import styles from './index.module.css';
import Button from '@/components/Common/Button';
import { useState } from 'react';

function Input({ children, error = false, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <input
        className={cn(styles.input, error && styles.error)}
        {...props}
        type={showPassword ? 'text' : 'password'}
      />
      <Button
        type="button"
        className="passwordToggle"
        onClick={handleToggle}
        view={showPassword}
      />
    </>
  );
}

export default Input;
