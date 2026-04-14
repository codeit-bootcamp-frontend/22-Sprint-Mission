import type { Product } from '@/features/products/types/product.types';
import type { SyntheticEvent } from 'react';
import { IcHeart } from '@/shared/assets/icons';

interface ProductItemProps {
  item: Product;
}

const DUMMY_IMAGE =
  'https://placehold.co/600x600/EFEFEF/bfbfbf?font=poppins&text=No+Image';

export function ProductItem({ item }: ProductItemProps) {
  const { images, name, price, favoriteCount } = item;

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DUMMY_IMAGE;
  };

  return (
    <article className="hover-fade">
      <figure className="aspect-square overflow-hidden rounded-2xl bg-black/10">
        <img
          src={images?.[0] || DUMMY_IMAGE}
          alt={name}
          onError={handleImageError}
          className="h-full w-full object-cover object-center"
        />
      </figure>
      <div className="mt-2.5 flex flex-col gap-1.5 lg:mt-4">
        <p className="typo-md-medium text-secondary-800">{name}</p>
        <p className="typo-lg-bold text-secondary-800">{price}</p>
        <div className="flex items-center gap-1.25">
          <IcHeart className="h-4 w-4" />
          <p className="typo-xs-medium text-secondary-600">{favoriteCount}</p>
        </div>
      </div>
    </article>
  );
}
