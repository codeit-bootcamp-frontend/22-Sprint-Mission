import type { ProductAddButtonProps } from '@/features/products/components/all-products/product-add-button/productAddButton.types';
import { Button } from '@/shared/components/button';
import { cn } from '@/shared/utils/cn';
import { Link } from 'react-router';

export function ProductAddButton({ className }: ProductAddButtonProps) {
  return (
    <Button
      as={Link}
      to="/additem"
      size="small40"
      className={cn('h-10.5', className)}
    >
      상품 등록하기
    </Button>
  );
}
