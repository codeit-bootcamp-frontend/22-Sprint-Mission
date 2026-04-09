import ProductList from "../components/ProductList";
import AllProductList from "../components/AllProductList";

export default function ItemsPage() {
  return (
    <>
      <div className="flex flex-col gap-10 mx-4 sm:mx-6 mt-4 sm:mt-6">
        <ProductList title="베스트 상품" />
        <AllProductList title="전체 상품" />
      </div>
    </>
  );
}
