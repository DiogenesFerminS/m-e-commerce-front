import ProductsGrid from "@/components/products/productsGrid";
import { ServiceResponse } from "@/interfaces/common/service-response.interface";
import { ProductData } from "@/interfaces/product/products.interface";
import { ProductsService } from "@/services/products.service";
import { notFound } from "next/navigation";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const validCategories = ["guitar", "bass", "drum", "accessories"];

const ProductsPage = async ({ searchParams }: Props) => {
  const { category } = await searchParams;
  let productsKey = 'default-key';
  let resp: ServiceResponse<ProductData> = { success: false, statusCode: 404 };

  if (category && !Array.isArray(category)) {
    if (validCategories.includes(category)) {
      resp = await ProductsService.getProducts({
        category: category,
        limit: 8,
        page: 1,
      });
      productsKey = `category-${category}`;
    } else {
      notFound();
    }
  }

  if (!category) {
    resp = await ProductsService.getProducts({
      limit: 8,
      page: 1,
    });
  }

  return (
    <main className="flex flex-col my-6">
      {resp.data && (
        <>
          <h3>{category}</h3>
          <ProductsGrid products={resp.data.products} key={productsKey}/>
        </>
      )}
    </main>
  );
};

export default ProductsPage;
