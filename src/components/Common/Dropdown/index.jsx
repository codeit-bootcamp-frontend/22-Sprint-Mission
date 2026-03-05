import styles from './index.module.css';
import Button from '../Button';
import { useState, useEffect, useRef } from 'react';
import SelectArrow from '@/assets/ic_arrow_down.svg';

export default function Dropdown({ options, value, disabled, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (disabled) {
      return;
    }
    setIsOpen(!isOpen);
  };
  const handleSelect = (e) => {
    const status = e.target.value;
    setIsOpen(false);

    onChange?.(status); // ⭐ 부모에게 선택값 전달
  };
  return (
    <div className={styles.dropdownWrap}>
      <Button
        className="dropdown btnM"
        onClick={handleToggle}
        disabled={disabled}
      >
        <span className={styles.value}>{value}</span>
        <img src={SelectArrow} />
      </Button>
      {isOpen && !disabled && (
        <div className={styles.modal}>
          {options.map((option) => (
            <Button
              key={option}
              className="dropdownItem"
              onClick={handleSelect}
              value={option}
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
