import type { ProductActionBarProps } from '@/features/products/components/all-products/product-action-bar/productActionBar.types';
import { ProductAddButton } from '@/features/products/components/all-products/product-add-button';
import { ProductMenu } from '@/features/products/components/all-products/product-action-bar/product-menu';
import { IcSearch } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

export function ProductActionBar({
  value,
  onOrderByChange,
}: ProductActionBarProps) {
  return (
    <div className="flex items-center gap-3">
      <search className="relative flex-1">
        <form>
          <input
            type="text"
            aria-label="상품 검색"
            className={cn(
              'bg-secondary-100 typo-lg-regular text-secondary-800 h-10.5 w-full rounded-xl py-2.25 pr-4 pl-11 md:w-71.25 lg:w-81.25',
              'placeholder:text-secondary-400 placeholder:typo-lg-regular'
            )}
            placeholder="검색할 상품을 입력해주세요"
          />
          <IcSearch className="text-secondary-400 absolute top-1/2 left-4 -translate-y-1/2" />
        </form>
      </search>
      <ProductAddButton className="hidden md:flex" />
      <ProductMenu value={value} onOrderByChange={onOrderByChange} />
    </div>
  );
}
