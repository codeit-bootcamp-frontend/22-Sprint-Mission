import type { Product } from '@/features/products/types/product.types';

export interface GetProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'favorite';
  keyword?: string;
}

export interface GetProductsResponse {
  totalCount: number;
  list: Product[];
}
