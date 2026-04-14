import type { ProductPaginationProps } from '@/features/products/components/all-products/product-pagination/productPagination.types';
import { IcArrowLeft, IcArrowRight } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

const PAGINATION_BUTTON_CLASS = cn(
  'border-secondary-200 typo-lg-semibold text-secondary-500 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white',
  'hover:bg-secondary-100',
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white'
);

const PAGE_GROUP_SIZE = 5;

export function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
  isPlaceholderData,
}: ProductPaginationProps) {
  const currentGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);
  const startPage = (currentGroup - 1) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <ul className="flex items-center justify-center gap-1">
      {startPage > 1 && (
        <li>
          <button
            className={PAGINATION_BUTTON_CLASS}
            onClick={() => onPageChange(startPage - 1)}
            disabled={isPlaceholderData}
          >
            <IcArrowLeft />
          </button>
        </li>
      )}
      {pageNumbers.map((num) => (
        <li key={num}>
          <button
            type="button"
            className={cn(
              PAGINATION_BUTTON_CLASS,
              currentPage === num &&
                'text-secondary-100 border-[#2F80ED] bg-[#2F80ED] hover:bg-[#2F80ED] disabled:bg-[#2F80ED] disabled:hover:bg-[#2F80ED]'
            )}
            onClick={() => onPageChange(num)}
            disabled={isPlaceholderData}
          >
            <span>{num}</span>
          </button>
        </li>
      ))}
      {endPage < totalPages && (
        <li>
          <button
            className={PAGINATION_BUTTON_CLASS}
            onClick={() => onPageChange(startPage + PAGE_GROUP_SIZE)}
            disabled={isPlaceholderData}
          >
            <IcArrowRight />
          </button>
        </li>
      )}
    </ul>
  );
}
