"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

const DISCOVER_IMAGES = [
  {
    id: 1,
    alt: "Timeless Kanjivaram Silk Saree",
    image: "/images/cta-saree-1.jpg",
  },
  {
    id: 2,
    alt: "Ancestral Heritage Silk Saree",
    image: "/images/cta-saree-2.jpg",
  },
  {
    id: 3,
    alt: "Royal Craftsmanship Silk Saree",
    image: "/images/cta-saree-3.png",
  },
  {
    id: 4,
    alt: "Heirloom Masterpiece Silk Saree",
    image: "/images/cta-saree-4.jpg",
  },
];

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="why-chandrika" className="w-full bg-[#fdfbf7] pt-16 md:pt-20 border-t border-[#e8e6e1] select-none">
      
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 px-4 sm:px-6">
        {/* Sparkle Gold Emblem */}
        <div className="w-12 h-12 rounded-full bg-[#800020]/10 border border-[#800020]/20 flex items-center justify-center mb-4 shadow-sm">
          <Sparkles size={22} className="text-[#800020]" />
        </div>

        {/* Eyebrow: THE CHANDRIKA DISTINCTION */}
        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#800020] font-bold mb-2">
          The Chandrika Distinction
        </p>

        {/* Main Title: DISCOVER CHANDRIKA */}
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-gray-900 uppercase mb-2">
          Discover Chandrika
        </h2>

        {/* Gold Italic Tagline: First & The Finest Since 1928 */}
        <h3 className="text-xl md:text-3xl font-serif italic text-[#b8860b] tracking-wide mb-4">
          First &amp; The Finest Since 1928
        </h3>

        <div className="w-16 h-px bg-[#b8860b]/40 mx-auto mb-4" />

        {/* Subtitle Description */}
        <p className="text-sm md:text-base text-gray-600 font-light tracking-wide leading-relaxed font-sans max-w-2xl">
          A century of handloom heritage, master weaver devotion, and pure silk elegance created to be cherished across generations.
        </p>
      </div>

      {/* ── Full-Width Edge-to-Edge 4-Image Grid Layout ── */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
        {DISCOVER_IMAGES.map((item) => (
          <div
            key={item.id}
            onClick={onOpenInquiry}
            className="group cursor-pointer relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden bg-gray-100"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Subtle Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
          </div>
        ))}
      </div>

    </section>
  );
}
