import { getProducts } from '@/features/products/apis/products';
import { ProductActionBar } from '@/features/products/components/all-products/product-action-bar';
import { ProductAddButton } from '@/features/products/components/all-products/product-add-button';
import { ProductPagination } from '@/features/products/components/all-products/product-pagination';
import { ProductItem } from '@/features/products/components/product-item';
import { ProductItemSkeleton } from '@/features/products/components/product-item/product-item-skeleton';
import { ProductListError } from '@/features/products/components/product-list-error';
import { useResponsivePageSize } from '@/shared/hooks/useResponsivePageSize';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function AllProducts() {
  const pageSize = useResponsivePageSize(10, 6, 4);

  const [orderBy, setOrderBy] = useState<'recent' | 'favorite'>('recent');
  const [page, setPage] = useState(1);
  const [prevPageSize, setPrevPageSize] = useState(pageSize);

  if (prevPageSize !== pageSize) {
    const currentFirstItemIndex = (page - 1) * prevPageSize;
    const newPage = Math.floor(currentFirstItemIndex / pageSize) + 1;
    setPrevPageSize(pageSize);
    setPage(newPage);
  }

  const { data, isPending, isError, isPlaceholderData, refetch } = useQuery({
    queryKey: ['items', orderBy, page, pageSize],
    queryFn: () => getProducts({ orderBy, page, pageSize }),
    placeholderData: keepPreviousData,
  });
  const items = data?.list;
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleOrderByChange = (newOrderBy: 'recent' | 'favorite') => {
    if (orderBy === newOrderBy) return;
    setOrderBy(newOrderBy);
    setPage(1);
  };

  return (
    <section>
      <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0">
        <div className="flex items-center justify-between">
          <h2 className="typo-xl-bold text-secondary-900">전체 상품</h2>
          <ProductAddButton className="flex md:hidden" />
        </div>
        <ProductActionBar
          value={orderBy}
          onOrderByChange={handleOrderByChange}
        />
      </div>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-7.5 md:grid-cols-3 md:gap-x-4 md:gap-y-10 lg:grid-cols-5 lg:gap-x-6">
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
      {totalCount > 0 && (
        <div className="mt-10">
          <ProductPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            isPlaceholderData={isPlaceholderData}
          />
        </div>
      )}
    </section>
  );
}
