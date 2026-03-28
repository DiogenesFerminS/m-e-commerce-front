import DetailsSection from "@/components/home/details-section";
import Hero from "@/components/home/hero-section";
import NewArrivals from "@/components/home/newArrivals-section";

const HomePage = () => {
  return (
    <main>
      <Hero />

      <NewArrivals />

      <DetailsSection />
     
    </main>
  );
};

export default HomePage;
