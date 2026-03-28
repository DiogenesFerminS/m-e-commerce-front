import { ProductsService } from "@/services/products.service";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ category: string}>
}

const validCategories = ['guitar', 'bass', 'drum', 'accessories']

const ProductsPage = async ({ params }: Props) => {
    const { category } = await params;

    if (!validCategories.includes(category)){
        notFound();
    }

    const resp = await ProductsService.getProducts({
      category: category,
      limit: 8,
      page: 1
    });

    console.log(resp)
     
    return (
        <h1>{category}</h1>
    )
}

export default ProductsPage;