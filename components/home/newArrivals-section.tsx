import { ProductResponse } from "@/interfaces/product/products.interface";
import ArrivalsCard from "./arrivalCard";
import { ProductsService } from "@/services/products.service";

const NewArrivals = async () => {

  const result = await ProductsService.getNewArrivals();

  if (!result.success) {
    <span>Error</span>
  }

  if (!result.data) {
    return <span>error</span>
  }

  return (
    <section className="py-24 px-8 md:px-16 bg-stone-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
        <div>
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            New Arrivals
          </h2>
          <p className="text-on-surface-variant font-body">
            Exceptional pieces recently added to our gallery.
          </p>
        </div>
        <a
          className="text-primary uppercase tracking-widest text-xs font-bold border-b border-primary/40 pb-1 hover:border-primary transition-all"
          href="#"
        >
          View All Instruments
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          result.data.products.map((product) => (
            <ArrivalsCard product={product} key={product.id}/>
          ))
        }
        
      </div>
    </section>
  );
};

export default NewArrivals;
