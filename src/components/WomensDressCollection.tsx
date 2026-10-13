"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

interface WomensDressCollectionProps {
  onOpenInquiry?: () => void;
}

interface DressCard {
  id: string;
  title: string;
  saleBadge: string;
  discount: string;
  discountPrefix?: string;
  image: string;
  tagline: string;
}

const DRESS_CARDS: DressCard[] = [
  {
    id: "dress-01",
    title: "Vasundhara Anarkali Collection",
    saleBadge: "DIWALI SALE",
    discount: "10% OFF",
    discountPrefix: "FLAT",
    image: "/images/dress-anarkali-burgundy.jpg",
    tagline: "Royal Crimson Zardozi Couture Gown",
  },
  {
    id: "dress-02",
    title: "Pillars Of Rosepetal Collection",
    saleBadge: "DIWALI SALE",
    discount: "20% OFF",
    discountPrefix: "UPTO",
    image: "/images/dress-lehenga-blush.jpg",
    tagline: "Haute Blush Evening Gown Dress",
  },
  {
    id: "dress-03",
    title: "Daughters Of Rosepetal",
    saleBadge: "DIWALI SALE",
    discount: "15% OFF",
    discountPrefix: "FLAT",
    image: "/images/dress-cape-emerald.jpg",
    tagline: "Imperial Banarasi Cape Dress",
  },
];

export default function WomensDressCollection({
  onOpenInquiry,
}: WomensDressCollectionProps) {
  return (
    <section className="w-full bg-[#ffffff] py-16 md:py-24 px-4 md:px-10 border-b border-[#ece9e2] select-none">
      <div className="max-w-[1360px] mx-auto">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] md:text-[11px] tracking-[0.38em] uppercase text-[#800020] font-semibold block mb-2">
            Festive Couture Edit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] tracking-tight leading-tight">
            Women&apos;s Designer Dresses
          </h2>
          <div className="w-12 h-px bg-[#b8860b] mx-auto mt-3.5 mb-2.5" />
          <p className="text-xs md:text-sm font-light text-[#666666] tracking-wide max-w-md mx-auto">
            Celebratory silhouettes handcrafted in pure silks, organzas, and heirloom embellishments.
          </p>
        </div>

        {/* ── 3 Festive Arch Cards Grid (Matching User Reference) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start justify-center max-w-5xl mx-auto">
          {DRESS_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={onOpenInquiry}
              className="group cursor-pointer flex flex-col items-center text-center transition-all duration-300"
            >
              {/* ── Jharokha Scalloped Arch Container ── */}
              <div className="relative w-full aspect-[9/16] max-h-[580px] overflow-hidden rounded-b-lg shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-[#1a050d]">
                
                {/* SVG Scalloped Arch Outline with Marigold Garland Top Decoration */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <svg
                    viewBox="0 0 360 640"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full preserve-3d"
                  >
                    {/* Dark Exterior Arch Mask (Frames the jharokha opening) */}
                    <path
                      d="M 0 0 L 360 0 L 360 640 L 0 640 Z M 20 620 L 340 620 L 340 180 C 340 120 310 90 280 85 C 250 80 230 55 200 45 C 185 40 175 40 160 45 C 130 55 110 80 80 85 C 50 90 20 120 20 180 Z"
                      fill="#ffffff"
                      fillRule="evenodd"
                    />

                    {/* Outer Thin Gold Border Around Jharokha Arch */}
                    <path
                      d="M 20 620 L 20 180 C 20 120 50 90 80 85 C 110 80 130 55 160 45 C 175 40 185 40 200 45 C 230 55 250 80 280 85 C 310 90 340 120 340 180 L 340 620"
                      stroke="#d4af37"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Festive Marigold Garland Festoons (Orange & Yellow Dots) */}
                    {/* Left Garland Drops */}
                    {[80, 110, 140, 170, 200, 230, 260].map((y, idx) => (
                      <g key={`l-${idx}`}>
                        <circle cx="32" cy={y} r="5.5" fill={idx % 2 === 0 ? "#FF8C00" : "#FFD700"} />
                        <circle cx="32" cy={y} r="3" fill={idx % 2 === 0 ? "#FF4500" : "#FFA500"} />
                      </g>
                    ))}
                    {/* Right Garland Drops */}
                    {[80, 110, 140, 170, 200, 230, 260].map((y, idx) => (
                      <g key={`r-${idx}`}>
                        <circle cx="328" cy={y} r="5.5" fill={idx % 2 === 0 ? "#FF8C00" : "#FFD700"} />
                        <circle cx="328" cy={y} r="3" fill={idx % 2 === 0 ? "#FF4500" : "#FFA500"} />
                      </g>
                    ))}
                    {/* Top Arch Marigold Arc */}
                    {[
                      [70, 85], [105, 75], [140, 58], [180, 42], [220, 58], [255, 75], [290, 85]
                    ].map(([x, y], idx) => (
                      <g key={`t-${idx}`}>
                        <circle cx={x} cy={y} r="6" fill={idx % 2 === 0 ? "#FF8C00" : "#FFD700"} />
                        <circle cx={x} cy={y} r="3.2" fill={idx % 2 === 0 ? "#FF4500" : "#FFA500"} />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Dress Model Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />

                {/* Bottom Shadow Gradient for Text Contrast */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/95 via-black/75 to-transparent z-10 pointer-events-none" />

                {/* ── Festive Offer Badge Overlay (Matching User Screenshot) ── */}
                <div className="absolute inset-x-4 bottom-5 z-20 flex flex-col items-center text-center text-white select-none pointer-events-none">
                  {/* Diya / Festive Motif Emblem */}
                  <div className="flex items-center gap-1.5 mb-1 text-[#ffd700]">
                    <Sparkles size={12} className="animate-pulse" />
                  </div>

                  {/* DIWALI SALE Header */}
                  <span className="text-[11px] sm:text-[12px] tracking-[0.28em] font-serif uppercase text-[#fdfaf5] font-medium drop-shadow-sm">
                    {card.saleBadge}
                  </span>

                  {/* Horizontal Divider Line */}
                  <div className="w-12 h-px bg-white/40 my-1" />

                  {/* Discount Callout */}
                  <div className="flex items-baseline gap-1 my-0.5">
                    {card.discountPrefix && (
                      <span className="text-[9px] tracking-wider uppercase text-white/80 font-light">
                        {card.discountPrefix}
                      </span>
                    )}
                    <span className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white drop-shadow-md">
                      {card.discount}
                    </span>
                  </div>

                  {/* Collection Subtitle */}
                  <span className="text-[10px] sm:text-[11px] font-sans text-white/90 tracking-wide font-light line-clamp-1 mt-0.5">
                    {card.title}
                  </span>
                </div>
              </div>

              {/* ── Minimalist Underlined Action Link ── */}
              <div className="mt-5">
                <span className="text-xs sm:text-[13px] font-serif tracking-[0.16em] uppercase text-[#1a1a1a] group-hover:text-[#800020] underline underline-offset-8 decoration-1 decoration-[#888888] group-hover:decoration-[#800020] transition-colors font-medium">
                  Shop Now
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
