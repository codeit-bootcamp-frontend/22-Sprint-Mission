import type { ProductSortOption } from '@/features/products/types/product.types';

export interface ProductMenuProps {
  value: ProductSortOption;
  onOrderByChange: (value: ProductSortOption) => void;
}
