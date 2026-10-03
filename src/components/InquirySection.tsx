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
    <section id="why-chandrika" className="w-full bg-[#fdfbf7] pt-6 md:pt-8 select-none">
      
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 px-4 sm:px-6">
        {/* Pink Bougainvillea Flower Divider Line matching user screenshot */}
        <div className="w-full flex items-center justify-center mb-8">
          <div className="flex-1 border-t border-[#e2dfd7]" />
          <div className="px-6 relative flex items-center justify-center">
            <Image
              src="/images/bougainvillea-flower-transparent.png"
              alt="Pink Bougainvillea Flower Motif"
              width={150}
              height={48}
              className="object-contain filter drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex-1 border-t border-[#e2dfd7]" />
        </div>

        {/* Eyebrow: THE CHANDRIKA DISTINCTION */}
        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#800020] font-bold mb-2">
          The Chandrika Distinction
        </p>

        {/* Main Title: DISCOVER CHANDRIKA */}
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-gray-900 uppercase mb-2">
          Discover Chandrika
        </h2>
      </div>

      {/* ── Interactive Mouse-Hover Zoom 4-Image Accordion Gallery ── */}
      <div className="w-full flex flex-col md:flex-row gap-0 overflow-hidden">
        {DISCOVER_IMAGES.map((item) => (
          <div
            key={item.id}
            onClick={onOpenInquiry}
            className="group cursor-pointer relative w-full md:flex-1 md:hover:flex-[1.45] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden bg-gray-100 transition-all duration-700 ease-in-out"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center group-hover:scale-110 group-hover:brightness-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
            {/* Subtle Overlay transition on hover */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>

    </section>
  );
}
