import type { ProductListErrorProps } from '@/features/products/components/product-list-error/productListError.types';
import { Button } from '@/shared/components/button';

export function ProductListError({ onRetry }: ProductListErrorProps) {
  return (
    <div className="bg-secondary-50 col-span-full flex h-60 flex-col items-center justify-center gap-4 rounded-2xl">
      <p className="typo-lg-medium text-secondary-600">
        상품 목록을 불러오는 데 실패했습니다.
      </p>
      <Button variant="outline" size="small40" onClick={onRetry}>
        다시 시도
      </Button>
    </div>
  );
}
