import { Link } from "react-router-dom";
import type { Item } from "../types/Product";
import Input from "./Input";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import Button from "./Button";
import { useWindowSize } from "../hook/useWindowSize";
import axios from "axios";

interface ProductListProps {
  title: string;
}

function getItemsPerPage(width: number): number {
  // Desktop : 10개, tablet: 6개, mobile: 4개
  if (width < 640) return 4;
  if (width < 768) return 6;
  return 10;
}

export default function AllProductList({ title }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Item[]>([]);
  const [sortOption, setSortOption] = useState<string>("recent");

  // 반응형에 맞게 아이템 노출 개수 조절
  const { width } = useWindowSize();
  const itemsPerPage = getItemsPerPage(width);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${itemsPerPage}&orderBy=${sortOption}`,
        );
        setAllProducts(res.data.list);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [currentPage, sortOption, itemsPerPage]);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-4 w-full">
        {/* 모바일 맞춤 레이아웃 */}
        <div className="flex flex-col justify-center gap-2 sm:hidden">
          <div className="flex items-center">
            <h3 className="font-bold text-xl flex-1">{title}</h3>
            <Link to="/additem">
              <Button content="상품 등록하기" />
            </Link>
          </div>
          <div className="flex items-center gap-3.5">
            <Input
              placeholder={"검색할 상품을 입력해주세요"}
              isSearch
              className="flex-1"
            />
            <SortSelect onChange={(value) => setSortOption(value)} />
          </div>
        </div>

        {/* 데스크탑, 태블릿 맞춤 레이아웃 */}
        <div className="hidden items-center justify-between sm:flex">
          <h3 className="font-bold text-xl">{title}</h3>
          <div className="flex gap-3">
            <Input placeholder={"검색할 상품을 입력해주세요"} isSearch />
            <Link to="/additem">
              <Button content="상품 등록하기" />
            </Link>
            <SortSelect onChange={(value) => setSortOption(value)} />
          </div>
        </div>

        {/* 아이템 리스트 */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {allProducts.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </ul>
      </div>

      {/* 페이지네이션 */}
      <Pagination
        total={allProducts.length}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
}
