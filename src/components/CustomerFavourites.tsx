"use client";

import RoundCarousel from "@/components/RoundCarousel";

interface CustomerFavouritesProps {
  onOpenInquiry?: () => void;
}

export default function CustomerFavourites({ onOpenInquiry }: CustomerFavouritesProps) {
  return (
    <section
      id="customer-favourites"
      className="w-full bg-[#ffffff] pt-8 md:pt-12 pb-0 relative border-b-0 overflow-hidden select-none"
    >
      <div className="w-full flex flex-col items-center justify-center text-center">
        
        {/* ── CENTER HEADER: OUR COLLECTIONS ── */}
        <div className="mb-2 px-4 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#800020] uppercase font-bold mb-1">
            CHANDRIKA BRIDAL SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#111111] tracking-tight leading-tight mb-1 uppercase font-semibold">
            Our Collections
          </h2>
          <div className="w-12 h-px bg-[#b8860b] my-1.5" />
          <p className="text-xs md:text-sm text-[#555555] font-light leading-relaxed tracking-wide font-sans">
            Handcrafted Heirloom Weaves — Drag or swipe to explore our 3D interactive saree carousel
          </p>
        </div>

        {/* ── FULL LENGTH 3D ROTATING SAREE CAROUSEL (TIGHT VERTICAL BOUNDS) ── */}
        <div className="w-full relative h-[380px] sm:h-[420px] md:h-[450px] flex items-center justify-center overflow-hidden -mb-4">
          <RoundCarousel />
        </div>

      </div>
    </section>
  );
}
