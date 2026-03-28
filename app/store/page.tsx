import DetailsSection from "@/components/home/details-section";
import Hero from "@/components/home/hero-section";
import NewArrivals from "@/components/home/newArrivals-section";

const HomePage = () => {
  return (
    <main>
      <Hero />

      <NewArrivals />

      <DetailsSection />
      <section className="py-24 px-8 md:px-16 bg-surface">
        <div className="p-12 md:p-24 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 bg-linear-to-r from-primary/30 via-primary/10 to-transparent border-l-4 border-primary">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">
              Hear the Difference.
            </h2>
            <p className="text-on-surface-variant text-lg">
              Subscribe to our newsletter and receive curated playlists of our
              newest arrivals recorded live in the Atelier.
            </p>
          </div>
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-4">
              <input
                className="bg-surface-container-highest border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary text-on-surface uppercase tracking-widest text-xs"
                placeholder="YOUR EMAIL ADDRESS"
                type="email"
              />
              <button className="bg-primary text-on-primary font-headline font-bold py-4 uppercase tracking-widest text-sm rounded-sm hover:bg-primary-container transition-colors">
                Join the Atelier
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
