"use client";

import RoundCarousel from "@/components/RoundCarousel";

interface CustomerFavouritesProps {
  onOpenInquiry?: () => void;
}

export default function CustomerFavourites({ onOpenInquiry }: CustomerFavouritesProps) {
  return (
    <section
      id="customer-favourites"
      className="w-full bg-[#ffffff] pt-10 md:pt-14 pb-10 md:pb-14 px-0 relative border-b-0 overflow-hidden select-none"
    >
      <div className="w-full flex flex-col items-center justify-center text-center">
        
        {/* ── CENTER HEADER: OUR COLLECTIONS ── */}
        <div className="mb-6 md:mb-8 px-4 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#800020] uppercase font-bold mb-1">
            CHANDRIKA BRIDAL SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#111111] tracking-tight leading-tight mb-2 uppercase font-semibold">
            Our Collections
          </h2>
          <div className="w-12 h-px bg-[#b8860b] my-2" />
          <p className="text-xs md:text-sm text-[#555555] font-light leading-relaxed tracking-wide font-sans">
            Handcrafted Heirloom Weaves — Drag or swipe to explore our 3D interactive saree carousel
          </p>
        </div>

        {/* ── FULL LENGTH / FULL WIDTH 3D ROTATING SAREE CAROUSEL ── */}
        <div className="w-full relative h-[480px] sm:h-[520px] md:h-[560px] flex items-center justify-center overflow-hidden">
          <RoundCarousel />
        </div>

      </div>
    </section>
  );
}
