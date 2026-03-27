import NavBar from "@/components/common/navBar/navBar";
import Hero from "@/components/home/hero";
import NewArrivals from "@/components/home/newArrivals";

const HomePage = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <NavBar/>
      <main className="pt-20">
        <Hero/>
       
        <NewArrivals/>
        <section className="py-24 px-8 md:px-16 bg-surface-container-lowest">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-primary/20"></div>
              <img
                className="w-full aspect-square object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
                data-alt="Artisanal luthier workshop with wooden guitar necks, tools, and sawdust under a warm vintage lamp"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcv5KX-9wxLrRnHAlZqrOCDyd2_Gnqdqopb8IJO7M7GoZq0hZfSlJXR7ZSDvFN8WE3HbFg685WGHQfO4yFvmoblESCgJYG-3jjXWKQjjy3rksWP1xalgtYXKEwEQwZ_GjldE4m-xd2bRy9T2GMMXrTWNnonIVgBA10-rI7YE9rw6aoSA8iMJdAQ6rCKJYLwHq6lbnYgoMbrUfBtLpcC1yFeC4lB8kYAuycYTUCLa_YwPj2ZvqzJyvQdCEpe6Vx1_Hpt1q_mQGKQcM"
              />
            </div>
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-12 uppercase tracking-tighter">
                Why the Atelier?
              </h2>
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <span className="text-primary font-headline font-black text-4xl opacity-30">
                    01
                  </span>
                  <div>
                    <h4 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2">
                      The Setup
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Every instrument passes through our master luthier&apos;s hands
                      for a custom 15-point inspection and professional setup
                      before shipping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <span className="text-primary font-headline font-black text-4xl opacity-30">
                    02
                  </span>
                  <div>
                    <h4 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2">
                      Tone Match
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      We record high-fidelity sound samples of the exact
                      instrument you are buying, so you know its unique voice
                      before it arrives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <span className="text-primary font-headline font-black text-4xl opacity-30">
                    03
                  </span>
                  <div>
                    <h4 className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-2">
                      Lifetime Support
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Membership at Fermín includes an annual professional
                      cleaning and truss-rod adjustment at any of our authorized
                      centers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 px-8 md:px-16 bg-surface">
          <div className="bg-surface-container-low p-12 md:p-24 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 hero-gradient border-l-4 border-primary">
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
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#0E0E0E] border-t border-[#4E4639]/20">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[#E9C176] font-bold text-xl font-headline tracking-widest">
            FERMÍN
          </span>
          <p className="font-['Inter'] text-sm uppercase tracking-wider text-[#9A8F80]">
            © 2024 Fermín Musical Instruments. The Master’s Atelier.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Inter'] text-sm uppercase tracking-wider text-[#9A8F80] hover:text-[#E9C176] transition-colors duration-300 opacity-80 hover:opacity-100"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-['Inter'] text-sm uppercase tracking-wider text-[#9A8F80] hover:text-[#E9C176] transition-colors duration-300 opacity-80 hover:opacity-100"
            href="#"
          >
            Shipping &amp; Returns
          </a>
          <a
            className="font-['Inter'] text-sm uppercase tracking-wider text-[#9A8F80] hover:text-[#E9C176] transition-colors duration-300 opacity-80 hover:opacity-100"
            href="#"
          >
            Contact Us
          </a>
          <a
            className="font-['Inter'] text-sm uppercase tracking-wider text-[#9A8F80] hover:text-[#E9C176] transition-colors duration-300 opacity-80 hover:opacity-100"
            href="#"
          >
            Our Story
          </a>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-[#C5A059] opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
            language
          </span>
          <span className="material-symbols-outlined text-[#C5A059] opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
            share
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
