import FiltersBar from "@/components/products/filtersBar";
import ProductsGrid from "@/components/products/productsGrid";
import { PRODUCTS_HEADERS } from "@/constants/productsHeader";
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
  let headerText = PRODUCTS_HEADERS.default;
  let resp: ServiceResponse<ProductData> = { success: false, statusCode: 404 };

  if (category && !Array.isArray(category)) {
    if (validCategories.includes(category)) {
      resp = await ProductsService.getProducts({
        category: category,
        limit: 8,
        page: 1,
      });
      productsKey = `category-${category}`;
      headerText = PRODUCTS_HEADERS[category];
    } else {
      notFound();
    }
  }

  if (!category) {
    resp = await ProductsService.getProducts({
      limit: 8,
      page: 1,
    });
    headerText = PRODUCTS_HEADERS.default
  }

  return (
    <main className="flex flex-col my-6">
      {resp.data && (
        <>
          <div className="px-6 flex flex-col">
            <h3 className="text-primary text-4xl md:text-5xl font-bold mb-4 tracking-tighter italic">{headerText.title}</h3>
            <p className="text-tertiary leading-relaxed text-lg block max-w-4xl">{headerText.description}</p>
          </div>
          <FiltersBar/>
          <ProductsGrid products={resp.data.products} key={productsKey}/>
        </>
      )}
    </main>
  );
};

export default ProductsPage;
