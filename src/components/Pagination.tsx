import prevIcon from "../assets/btn_prev.svg";
import nextIcon from "../assets/btn_next.svg";

interface PaginationProps {
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  total,
  currentPage,
  onChange,
}: PaginationProps) {
  const pageNum = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <ul className="flex items-center gap-2 mt-6">
      {/* 이전 */}
      <li>
        <button
          onClick={() => onChange(Math.max(currentPage - 1, 1))}
          className="w-10 aspect-square flex items-center justify-center border border-gray-200 rounded-full"
        >
          <img src={prevIcon} alt="" />
        </button>
      </li>

      {/* 페이지 */}
      {pageNum.map((num) => (
        <li key={num}>
          <button
            onClick={() => onChange(num)}
            className={`w-10 aspect-square px-3 py-1 border rounded-full ${
              num === currentPage
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-200"
            }`}
          >
            {num}
          </button>
        </li>
      ))}

      {/* 다음 */}
      <li>
        <button
          onClick={() => onChange(Math.min(currentPage + 1, total))}
          className="w-10 aspect-square flex items-center justify-center border border-gray-200 rounded-full"
        >
          <img src={nextIcon} alt="" />
        </button>
      </li>
    </ul>
  );
}
