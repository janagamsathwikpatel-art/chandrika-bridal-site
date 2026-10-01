"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#0e0e0d] text-[#e8e6e1] pt-24 pb-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-between min-h-[480px]">
        {/* Brand Big Statement */}
        <div className="text-center max-w-2xl mt-8">
          <span className="text-[28px] md:text-[42px] tracking-[0.35em] font-light text-white uppercase block mb-4">
            CHANDRIKA
          </span>
          <p className="text-[11px] md:text-[13px] tracking-[0.2em] text-[#a6a39b] uppercase leading-relaxed font-light">
            Chandrika is an ode to quiet luxury, offering refined bridal design for the woman who
            seeks elegance without excess.
          </p>
        </div>

        {/* Scroll To Top interactive button */}
        <div className="my-14">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 rounded-full text-[10px] tracking-[0.25em] uppercase"
          >
            <span>SCROLL TO THE TOP</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom meta & links */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-[#767573]">
          <div className="flex gap-6 uppercase">
            <a href="#about" className="hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#collection" className="hover:text-white transition-colors">
              Silhouettes
            </a>
            <a href="#boutiques" className="hover:text-white transition-colors">
              Stockists
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Editorial
            </a>
          </div>

          <p className="uppercase">
            © {new Date().getFullYear()} CHANDRIKA HAUTE BRIDAL. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-4 uppercase">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pinterest
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Vogue Runway
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
