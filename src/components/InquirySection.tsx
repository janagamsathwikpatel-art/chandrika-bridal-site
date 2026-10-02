"use client";

import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

const DISCOVER_CARDS = [
  {
    id: 1,
    title: "Timeless Kanjivaram",
    subtitle: "Royal Navy & Aqua Korvai Silk",
    tag: "Pure Handloom",
    image: "/images/cta-saree-1.jpg",
  },
  {
    id: 2,
    title: "Ancestral Heritage",
    subtitle: "Aqua Sea-Green & Magenta Silk",
    tag: "Master Craftsmen",
    image: "/images/cta-saree-2.jpg",
  },
  {
    id: 3,
    title: "Royal Craftsmanship",
    subtitle: "Light Blue & Purple Woven Silk",
    tag: "24K Gold Zari",
    image: "/images/cta-saree-3.png",
  },
  {
    id: 4,
    title: "Heirloom Masterpiece",
    subtitle: "Teal & Crimson Gold Border Silk",
    tag: "100% Pure Silk",
    image: "/images/cta-saree-4.jpg",
  },
];

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="why-chandrika" className="w-full bg-[#fdfbf7] py-16 md:py-24 border-t border-[#e8e6e1] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
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
            Bringing you 100% certified pure mulberry silk with lab-tested 24K real gold zari.
          </p>
        </div>

        {/* ── 4-Box Card Grid Layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DISCOVER_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={onOpenInquiry}
              className="group cursor-pointer rounded-2xl bg-white p-3.5 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e8e6e1] hover:border-[#b8860b]/40 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Luxury Tag Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#ffd700] text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full border border-[#ffd700]/30 shadow-sm">
                    {card.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-1 pb-2">
                  <h4 className="text-lg font-serif font-medium text-gray-900 group-hover:text-[#800020] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-sans mt-1 line-clamp-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-1 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#800020] group-hover:text-[#b8860b] transition-colors">
                <span>Explore Collection</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
