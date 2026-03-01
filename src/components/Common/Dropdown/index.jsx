import styles from './index.module.css';
import Button from '../Button';
import { useState, useEffect, useRef } from 'react';
import SelectArrow from '@/assets/ic_arrow_down.svg';

export default function Dropdown({ options, value, disabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    if (disabled) {
      return;
    }
    setIsOpen(!isOpen);
    console.log(isOpen);
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
              onClick={() => handleSelect(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(option);
                }
              }}
              role="option"
              tabIndex="0"
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
