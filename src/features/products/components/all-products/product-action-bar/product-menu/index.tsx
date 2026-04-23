import type { ProductMenuProps } from '@/features/products/components/all-products/product-action-bar/product-menu/productMenu.types';
import { IcDropDown, IcSort } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';
import { useEffect, useRef, useState } from 'react';

const DROPDOWN_STYLE = cn('border-secondary-200 rounded-xl border bg-white');

const DROPDWON_BUTTON_STYLE = cn(
  'flex h-10.5 w-full cursor-pointer items-center justify-center',
  'hover:bg-secondary-100'
);

export function ProductMenu({ value, onOrderByChange }: ProductMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onOrderByChange(event.currentTarget.value as 'recent' | 'favorite');
    setIsOpen(false);
  };

  return (
    <div className="z-dropdown relative shrink-0" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          DROPDOWN_STYLE,
          'flex h-10.5 w-10.5 cursor-pointer items-center justify-between px-2.25 py-2.25 md:w-32.5',
          'md:px-5 md:py-3'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden md:block">
          {value === 'recent' ? '최신순' : '좋아요순'}
        </span>
        <IcDropDown className="hidden md:block" />
        <IcSort className="text-secondary-800 h-6 w-6 md:hidden" />
      </button>
      {isOpen && (
        <ul
          className={cn(
            DROPDOWN_STYLE,
            'absolute top-12.5 right-0 w-32.5 overflow-hidden'
          )}
        >
          <li>
            <button
              value="recent"
              className={cn(DROPDWON_BUTTON_STYLE)}
              onClick={handleButtonClick}
            >
              최신순
            </button>
          </li>
          <li>
            <button
              value="favorite"
              className={cn(
                DROPDWON_BUTTON_STYLE,
                'border-t-secondary-200 border-t'
              )}
              onClick={handleButtonClick}
            >
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
