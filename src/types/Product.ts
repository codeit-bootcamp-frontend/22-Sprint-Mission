export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoriteCount: number;
  ownerId: number;
  ownerNickname: string;
  createdAt: string; // ISO 문자열
}
