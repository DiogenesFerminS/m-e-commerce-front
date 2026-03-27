const NewArrivals = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-primary text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tighter">
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
        <div className="group relative bg-surface-container-low overflow-hidden rounded-sm cursor-pointer border-b border-outline-variant/10 h-[500px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            data-alt="Professional hollow body electric guitar resting against a vintage amplifier in a dimly lit mahogany room"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhiKeiC5bw9xbw53SZT05CfD_l9hu_FE8Lt5HaFTbWUZoRWQL5lk-YrgxMnpJr5IQF2_iYen7ZkfMQTt4vgJ2IjpjQvR0_ZOKUfnIjixsJdl1g6k2eecETl8pRhutI0lDHftUW8_nQyy8MgNQ8HWCqOVKnDcxUV41huPHyoWM3xq6ehH9CG5OnVvNjoUywxr5nHVm2-PaTnDCHj-ueau-u_p805RZJvU4n_BF4hdWwjgeA-b3HDEIk9fjg4amHplOzGsQBFYBvR8w"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-primary-container font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
              Guitar of the Month
            </span>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-1">
              Heritage Hollow Body
            </h3>
            <p className="text-on-surface-variant mb-4 text-sm max-w-sm line-clamp-2 italic">
              Crafted from select Grade-A maple with custom gold-foil pickups.
            </p>
            <span className="text-primary text-xl font-headline">
              $4,250.00
            </span>
          </div>
        </div>
        <div className="group relative bg-surface-container-low overflow-hidden rounded-sm cursor-pointer border-b border-outline-variant/10 h-[500px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
            data-alt="Minimalist top view of professional drum set cymbals with dramatic lighting and deep shadows"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlqfEwUSfxGvNQN7AGim6GgqE3uM_YT8VLlBHy2AgSnEbYAoMczZ5swKB8B7-uDreaxfjKFZgTqN_QxsbeDLSUf6GLjRHuTuu6UvVCR7xUWIkP-CW3DFdmL3UCMvzM3m0KIcG6zWBxvn2_kIfHW-9uTPO-jHUwWM6wbdCxcntCvcFLBQQChdE3W6EeW7_dmxHT-xqp13QZMU97MWyNiILVn53RYll5zDjDKT-54biiwskt45ivVyO8FvXveyu5PEfyeePBi62q9IU"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-primary-container font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
              Percussion Master
            </span>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-1">
              Cymbal Master Series
            </h3>
            <p className="text-on-surface-variant mb-4 text-sm max-w-sm line-clamp-2 italic">
              Hand-hammered B20 bronze for explosive response and dark sustain.
            </p>
            <span className="text-primary text-xl font-headline">$890.00</span>
          </div>
        </div>
        <div className="group relative bg-surface-container-low overflow-hidden rounded-sm cursor-pointer border-b border-outline-variant/10 h-[500px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
            data-alt="Close up of high-end guitar strings and bridge, focusing on the intricate metallic details and polished wood"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA4ZtXvPNN7Xq-tGhpGScsN_wHsSXBVbfqGxPPNXdaa1tH8Vvz099JJBB2nSrM8W9NBXkJc3wLmOXtcjyyQmnSJXBV9j5nPfkswaVG-1n8668LhC02K7L4c2lF2xQQ53PQ2NjZzOo0Htpb08GT02yZiYnvZHxPInnU6A_KV9uiKmwI9SjZUSuRCUDYooAZG7T_HXAVSe7ilEuS02J7zYtFfjNBc2CRufyJHn1n5ucRjkyCZEsDknJGesX4tidRui7LLwGKHxwy-8A"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-primary-container font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
              Components
            </span>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-1">
              Hand-Wound Pickups
            </h3>
            <p className="text-on-surface-variant mb-4 text-sm max-w-sm line-clamp-2 italic">
              Boutique vintage-voiced single coils for unmatched clarity and
              bite.
            </p>
            <span className="text-primary text-xl font-headline">$340.00</span>
          </div>
        </div>
        <div className="group relative bg-surface-container-low overflow-hidden rounded-sm cursor-pointer border-b border-outline-variant/10 h-[500px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
            data-alt="Exquisite dark wood bass guitar detail with sleek curves and metallic accents"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsgnzVG-FzBAAkxkf63UXMhQn_eaIU0nUWTG5gWGVikZRN1VvLl-hfpBLmY87eC9lI0FaXg8vvL6tpLGv7JH9-NH0It4iqf1UYfqD2bs9pDZnntxXQ5gEwIysgphBDlr98AVLkw1w3WiOfjSmgGKKlYmZpcfKMtzGW3KmWPA7ghHQu4U0r_ChhEEl83s7xN8ggviK0-oC3tCeazjvFDcZhxQz9XWwQ0hV6Eoy1JuosYGm2yzL0to8geHwuIrKV5a9_XZopLsZg3Gc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-primary-container font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
              Limited Edition
            </span>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-1">
              Atelier Reserve Bass
            </h3>
            <p className="text-on-surface-variant mb-4 text-sm max-w-sm line-clamp-2 italic">
              A masterful blend of modern ergonomics and classNameic low-end
              growl.
            </p>
            <span className="text-primary text-xl font-headline">
              $2,800.00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
