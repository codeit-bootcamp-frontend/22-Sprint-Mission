import styles from './index.module.css';
import Button from '../Button';
import { useState, useEffect, useRef } from 'react';
import SelectArrow from '@/assets/ic_arrow_down.svg';
import icDropDown from '@/assets/ic_dropdown.svg';

export default function Dropdown({ options, value, disabled, onChange, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel =
    options?.find((opt) => opt.value === value)?.label ?? value;

  const handleToggle = () => {
    if (disabled) {
      return;
    }
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setIsOpen(false);
    onChange?.(option);
  };
  return (
    <div className={styles.dropdownWrap}>
      <Button
        className={`${type ?? ''}`}
        onClick={handleToggle}
        disabled={disabled}
        type="button"
      >
        <span className={styles.value}>{selectedLabel}</span>
        {type === 'select' && <img src={SelectArrow} />}
        {type === 'dropdown' && <img src={icDropDown} />}
      </Button>
      {isOpen && !disabled && (
        <div className={styles.modal}>
          {options.map((option) => (
            <Button
              key={option.value}
              className="dropdownItem"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
