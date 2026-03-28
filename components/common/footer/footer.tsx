import React from "react";

const Footer = () => {
  return (
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
        <span className="material-symbols-outlined text-primary opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
          language
        </span>
        <span className="material-symbols-outlined text-primary opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
          share
        </span>
      </div>
    </footer>
  );
};

export default Footer;
