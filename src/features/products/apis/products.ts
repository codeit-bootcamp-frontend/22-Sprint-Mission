import type {
  GetProductsParams,
  GetProductsResponse,
} from '@/features/products/apis/products.types';
import { get } from '@/shared/apis/fetchInstance';

export const getProducts = (params?: GetProductsParams) => {
  if (!params) return get<GetProductsResponse>('/products');

  const queryString = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) acc[key] = String(value);
        return acc;
      },
      {} as Record<string, string>
    )
  ).toString();

  return get<GetProductsResponse>(`/products?${queryString}`);
};
