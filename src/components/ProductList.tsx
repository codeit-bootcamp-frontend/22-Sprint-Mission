import { useEffect, useState } from "react";
import type { Item } from "../types/Product";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useWindowSize } from "../hook/useWindowSize";

interface ProductListProps {
  title: string;
}

function getItemsPerPage(width: number): number {
  // Desktop : 4개, tablet: 2개, mobile: 1개
  if (width < 640) return 1;
  if (width < 768) return 2;
  return 4;
}

export default function ProductList({ title }: ProductListProps) {
  const [bestProducts, setBestProducts] = useState<Item[]>([]);

  // 반응형에 맞게 아이템 노출 개수 조절
  const { width } = useWindowSize();
  const itemsPerPage = getItemsPerPage(width);

  useEffect(() => {
    const getBestProducts = async () => {
      try {
        const res = await axios.get(
          `https://panda-market-api.vercel.app/products?page=1&pageSize=${itemsPerPage}&orderBy=favorite`,
        );
        setBestProducts(res.data.list);
      } catch (error) {
        console.error(error);
      }
    };
    getBestProducts();
  }, [itemsPerPage]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl">{title}</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-2.5 md:gap-6">
        {bestProducts.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
