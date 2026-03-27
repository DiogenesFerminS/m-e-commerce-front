import { Search } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-230.25 flex items-center px-8 md:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          fill
          className="object-cover"
          alt="Close-up of a high-end electric guitar body with sunburst finish and gold hardware in a moody, dark studio setting"
          src="/hero-guitar.webp"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-neutral/90 via-neutral/80 to-transparent z-10"></div>
      <div className="relative z-20 max-w-3xl">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
          The Master&apos;s Collection
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] mb-8 tracking-tight">
          Find your <br />
          <span className="text-primary italic font-light">true sound.</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-xl mb-10 leading-relaxed font-light">
          From the first string to the last cymbal. Explore our premium catalog
          of guitars, basses, drums, and accessories from the best brands.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-neutral px-8 py-4 font-bold rounded-sm flex items-center border gap-2 hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300">
            Explore Catalog
            <span className="text-inherit">
                <Search/>
            </span>
          </button>
          <button className="border px-8 py-4 font-bold rounded-sm hover:bg-primary/20 transition-all duration-300">
            The Atelier Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
