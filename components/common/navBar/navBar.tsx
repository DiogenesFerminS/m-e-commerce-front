import { CircleUser, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import NavLink from "./navLink";

interface Link {
  href: string
  label: string
}

const navLinks: Link[] = [
  {
    href: "/store/products?category=guitar",
    label: "Guitars"
  },
  {
    href: "/store/products?category=drum",
    label: "Drums"
  },
  {
    href: "/store/products?category=bass",
    label: "Basses"
  },
  {
    href: "/store/products?category=accessories",
    label: "Accessories"
  },
]

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-neutral transition-colors duration-300">
      <div className="flex items-center gap-12">
        <Link 
          href={'/store'}
          className="text-2xl font-black text-primary uppercase tracking-widest font-headline">
          Fermín
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {
            navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label}/>
            ))
          }
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
