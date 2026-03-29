import { Product } from "@/interfaces/product/products.interface";
import Image from "next/image";

interface Props {
    product: Product;
}

const ProductCard = async ({ product }: Props) => {

  const mainImage = product.images.find((img) => img.isMain);

  if(!mainImage) {
    return <span>Error</span>
  }

  return (
    <div className="group relative bg-neutral overflow-hidden rounded-sm cursor-pointer border-b border-primary h-125 w-full">
      
      <Image
        src={`${process.env.PUBLIC_URL}${mainImage.path}`}
        alt={product.name}
        unoptimized={process.env.NODE_ENV === 'development'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
      />
      
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral/90"></div>
      
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
          {product.brand}
        </span>
        
        <h3 className="text-3xl font-headline font-bold text-tertiary mb-1">
          {product.name}
        </h3>
        
        <p className="text-secondary mb-4 text-sm max-w-sm line-clamp-2 italic">
          {product.description}
        </p>
        
        <span className="text-primary text-xl font-headline">
          ${Number(product.price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
