import { Product } from "@/interfaces/product/products.interface";
import ProductCard from "./productCard";

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-auto my-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  );
};

export default ProductsGrid;
