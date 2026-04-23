import { getProducts } from '@/features/products/apis/products';
import { ProductItem } from '@/features/products/components/product-item';
import { ProductItemSkeleton } from '@/features/products/components/product-item/product-item-skeleton';
import { ProductListError } from '@/features/products/components/product-list-error';
import { useResponsivePageSize } from '@/shared/hooks/useResponsivePageSize';
import { useQuery } from '@tanstack/react-query';

const ORDER_BY = 'favorite';

export default function BestProducts() {
  const pageSize = useResponsivePageSize(4, 2, 1);

  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ['items', 'best', { pageSize, orderBy: ORDER_BY }],
    queryFn: () => getProducts({ pageSize, orderBy: ORDER_BY }),
  });

  const items = data?.list;
  return (
    <section>
      <h2 className="typo-xl-bold text-secondary-900 mb-4">베스트 상품</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-2.5 lg:grid-cols-4 lg:gap-6">
        {isPending &&
          Array.from({ length: pageSize }).map((_, i) => (
            <li key={i}>
              <ProductItemSkeleton />
            </li>
          ))}
        {isError && <ProductListError onRetry={() => refetch()} />}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <ProductItem item={item} />
            </li>
          ))}
      </ul>
    </section>
  );
}
