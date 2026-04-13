import searchIcon from "../assets/ic_search.svg";

interface InputProps {
  isSearch?: boolean;
  placeholder?: string;
  className?: string;
}

export default function Input({
  isSearch,
  placeholder,
  className,
}: InputProps) {
  return (
    <div
      className={`sm:w-auto md:min-w-[325px] flex items-center px-5 py-2 bg-[#F3F4F6] rounded-xl ${className}`}
    >
      {isSearch && <img src={searchIcon} alt="검색 아이콘" />}
      <input placeholder={placeholder} className="w-full h-full" />
    </div>
  );
}
