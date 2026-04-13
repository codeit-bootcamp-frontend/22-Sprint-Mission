import { useState } from "react";
import sortIcon from "../assets/ic_sort.svg";
import arrowIcon from "../assets/ic_arrow_down.svg";

interface SortSelectProps {
  onChange: (value: string) => void;
}

export default function SortSelect({ onChange }: SortSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "recent", label: "최신순" },
    { value: "favorite", label: "좋아요순" },
  ];

  const [value, setValue] = useState<string>("최신순");

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center border border-gray-200 rounded-xl">
      {/* 모바일 : 아이콘 */}
      <button
        type="button"
        className="flex sm:hidden w-[42px] aspect-square items-center justify-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={sortIcon} alt="정렬 아이콘" className="w-4.5" />
      </button>

      {/* 데스크탑, 태블릿 : 라벨 */}
      <button
        type="button"
        className="hidden sm:flex min-w-[130px] w-full h-full px-5 cursor-pointer items-center justify-center gap-2.5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="w-full">{value}</span>
        <img src={arrowIcon} alt="정렬 아이콘" className="w-3" />
      </button>

      {isOpen && (
        <ul className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl z-10 w-[130px]">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                handleSelect(option.value);
                setValue(option.label);
              }}
              className={`px-4 py-2.5 cursor-pointer hover:bg-gray-100 text-center border-b border-gray-200 not-only-of-type:last:border-b-0
            ${value === option.value ? "text-blue-500 font-semibold" : "text-gray-700"}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
