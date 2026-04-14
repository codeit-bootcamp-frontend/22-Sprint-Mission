export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string;
  ownerId: number;
  ownerNickname?: string;
  favoriteCount: number;
  createdAt: string;
}

export type ProductSortOption = 'recent' | 'favorite';
