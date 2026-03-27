import { CircleUser, Search, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-neutral transition-colors duration-300">
      <div className="flex items-center gap-12">
        <span className="text-2xl font-black text-primary uppercase tracking-widest font-headline">
          Fermín
        </span>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-headline font-bold tracking-tight text-primary border-b-2 border-primary pb-1"
            href="#"
          >
            Guitars
          </a>
          <a
            className="font-headline font-bold tracking-tight text-tertiary hover:text-primary transition-colors"
            href="#"
          >
            Drums
          </a>
          <a
            className="font-headline font-bold tracking-tight text-tertiary hover:text-primary transition-colors"
            href="#"
          >
            Basses
          </a>
          <a
            className="font-headline font-bold tracking-tight text-tertiary hover:text-primary transition-colors"
            href="#"
          >
            Accessories
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-surface-container-highest px-4 py-2 rounded-sm border-b border-outline-variant/20">
          <span className="text-on-surface-variant text-sm mr-2 text-primary">
            <Search/>
          </span>
          <input
            className="bg-transparent border-none text-sm focus:ring-0 text-on-surface placeholder:text-outline w-48 outline-none"
            placeholder="Search Atelier..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:bg-gray-600/50 p-2 rounded-lg transition-all duration-200 scale-95 active:scale-90">
            <span className="text-primary">
              <ShoppingCart/>
            </span>
          </button>
          <button className="hover:bg-gray-600/50 p-2 rounded-lg transition-all duration-200 scale-95 active:scale-90">
            <span className="text-primary">
              <CircleUser/>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
