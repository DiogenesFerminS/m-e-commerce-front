import FiltersBar from "@/components/products/filtersBar";
import ProductsGrid from "@/components/products/productsGrid";
import { PRODUCTS_HEADERS } from "@/constants/productsHeader";
import { ProductsService } from "@/services/products.service";
import { notFound } from "next/navigation";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const validCategories = ["guitar", "bass", "drum", "accessories"];

const ProductsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const category = typeof params.category === 'string' ? params.category : undefined;
  const sort = typeof params.sort === 'string' ? params.sort : undefined;
  const brand = typeof params.brand === 'string' ? params.brand : undefined;

  if(category && !validCategories.includes(category)) {
    notFound();
  }

  const queryPayload: { limit: number, page: number, sort?: string ,category?: string, brand?: string } = {
    limit: 8,
    page: 1
  }

  if (category) {
    queryPayload.category = category;
  }

  if (sort) {
    queryPayload.sort = sort;
  }

  if (brand) {
    queryPayload.brand = brand;
  }

  const resp = await ProductsService.getProducts(queryPayload);
  const header = PRODUCTS_HEADERS[category ?? "default" ]
  const productsKey = `grid-${category || 'all'}-${sort || 'def'}-${brand || 'all'}`;

  return (
    <main className="flex flex-col my-6">
      {resp.data && (
        <>
          <div className="px-6 flex flex-col">
            <h3 className="text-primary text-4xl md:text-5xl font-bold mb-4 tracking-tighter italic">{header.title}</h3>
            <p className="text-tertiary leading-relaxed text-lg block max-w-4xl">{header.description}</p>
          </div>
          <FiltersBar brands={resp.data.brands}/>
          <ProductsGrid products={resp.data.products} key={productsKey}/>
        </>
      )}
    </main>
  );
};

export default ProductsPage;
