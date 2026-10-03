"use client";

import { useState } from "react";
import Image from "next/image";
import RoundCarousel from "@/components/RoundCarousel";

interface SareeCard {
  id: string;
  name: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  image: string;
  badge?: string;
}

const FAVOURITE_SAREES: SareeCard[] = [
  {
    id: "cf-01",
    name: "Emerald Green & Purple Silk Saree",
    originalPrice: "₹48,500",
    salePrice: "₹43,650",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/our-col-1.png",
  },
  {
    id: "cf-02",
    name: "Mint Zari Kanjivaram Silk Saree",
    originalPrice: "₹52,000",
    salePrice: "₹46,800",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/our-col-2.jpg",
  },
  {
    id: "cf-03",
    name: "Royal Gold & Lilac Bridal Saree",
    originalPrice: "₹65,000",
    salePrice: "₹58,500",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/our-col-3.jpg",
  },
  {
    id: "cf-04",
    name: "Gold Brocade & Magenta Heritage Saree",
    originalPrice: "₹58,900",
    salePrice: "₹53,010",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/our-col-4.jpg",
  },
];

interface CustomerFavouritesProps {
  onOpenInquiry?: () => void;
}

export default function CustomerFavourites({ onOpenInquiry }: CustomerFavouritesProps) {
  return (
    <section
      id="customer-favourites"
      className="w-full bg-[#ffffff] pt-12 md:pt-16 pb-8 md:pb-12 px-4 md:px-10 relative border-b-0 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10 relative">
        
        {/* ── LEFT BRAND INFO COLUMN ── */}
        <div className="lg:w-[28%] flex flex-col justify-center text-left py-4 pr-4 border-b lg:border-b-0 lg:border-r border-[#eae7e0]">
          {/* Traditional Handloom Peacock (Mayura) Motif Logo */}
          <div className="mb-4">
            <svg
              width="54"
              height="62"
              viewBox="0 0 60 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#8B0000] filter drop-shadow-sm"
            >
              {/* Peacock Crown / Crest */}
              <circle cx="30" cy="6" r="2.5" fill="#8B0000" />
              <circle cx="24" cy="8" r="2" fill="#D4AF37" />
              <circle cx="36" cy="8" r="2" fill="#D4AF37" />
              <path d="M30 6L30 14M24 8L28 14M36 8L32 14" stroke="#8B0000" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Peacock Head & Curved Graceful Neck */}
              <path
                d="M30 14C27 14 24 16.5 24 20.5C24 25 28 27.5 28 32C28 35.5 25 38 21 38C17 38 13.5 35.5 13.5 32"
                stroke="#8B0000"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="28" cy="18" r="1.5" fill="#D4AF37" />

              {/* Feather Plumes & Intricate Body Motifs */}
              <path
                d="M30 20C36 19 46 22 48 30C50 38 45 48 36 52C28 55.5 18 52 14 44C12 40 12 34 16 30"
                stroke="#8B0000"
                strokeWidth="2.5"
                fill="#8B0000"
                fillOpacity="0.08"
              />
              <path
                d="M34 26C39 27 43 31 43 36C43 41 38 45 32 46"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeDasharray="2 2"
              />
              <circle cx="38" cy="32" r="2.5" fill="#8B0000" />
              <circle cx="42" cy="38" r="2" fill="#D4AF37" />
              <circle cx="34" cy="42" r="2" fill="#8B0000" />

              {/* Decorative Handloom Base Ring */}
              <ellipse cx="30" cy="58" rx="18" ry="4" stroke="#8B0000" strokeWidth="2" fill="none" />
              <ellipse cx="30" cy="58" rx="10" ry="2" fill="#D4AF37" />
            </svg>
          </div>

          {/* Heading in Elegant Serif */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] tracking-tight leading-tight mb-3">
            Our Collections
          </h2>

          {/* Descriptive Text */}
          <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed mb-6 max-w-sm">
            Experience the pinnacle of Indian craftsmanship with Chandrika&apos;s 3D rotating saree showcase. Drag or swipe to explore all unique weaves.
          </p>

          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B0000] hover:bg-[#111111] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-md max-w-xs"
          >
            <span>INQUIRE COLLECTION</span>
          </button>
        </div>

        {/* ── RIGHT 3D ROUND CAROUSEL COLUMN ── */}
        <div className="lg:w-[72%] relative w-full h-[460px] md:h-[500px] flex items-center justify-center">
          <RoundCarousel />
        </div>

      </div>
    </section>
  );
}
