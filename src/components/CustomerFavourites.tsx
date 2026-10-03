"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Copy } from "lucide-react";

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
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : FAVOURITE_SAREES.length - 3));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < FAVOURITE_SAREES.length - 3 ? prev + 1 : 0));
  };

  return (
    <section
      id="customer-favourites"
      className="w-full bg-[#ffffff] py-14 md:py-20 px-4 md:px-10 relative border-b border-[#ece9e2]"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative">
        
        {/* ── LEFT BRAND INFO COLUMN (Pothys Style) ── */}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] tracking-tight leading-tight mb-4">
            Our Collections
          </h2>

          {/* Descriptive Text matching Pothys screenshot */}
          <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed mb-6 max-w-sm">
            Experience the pinnacle of Indian craftsmanship with Chandrika&apos;s luxurious collection.
          </p>
        </div>

        {/* ── RIGHT CAROUSEL COLUMN (3-Card Slider matching Pothys Screenshot) ── */}
        <div className="lg:w-[72%] relative flex items-center">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Collection"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#444] hover:text-[#000] hover:scale-105 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Collection"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#444] hover:text-[#000] hover:scale-105 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* 3-Product Grid Row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
            {FAVOURITE_SAREES.slice(startIndex, startIndex + 3).map((saree) => (
              <div
                key={saree.id}
                onClick={onOpenInquiry}
                className="cursor-pointer group flex flex-col text-left transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Top-Left Sale Badge & Top-Right Wishlist Heart */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f7f5f0] border border-[#eee9df] shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={saree.image}
                    alt={saree.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Top-Left Sale Badge */}
                  {saree.badge && (
                    <span className="absolute top-3 left-3 bg-[#f5e8cf] text-[#7a4918] font-bold text-[11px] px-3 py-1 rounded shadow-sm">
                      {saree.badge}
                    </span>
                  )}

                  {/* Top-Right Circular Wishlist Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    aria-label="Wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-black/5 shadow flex items-center justify-center text-[#555] hover:text-[#8B0000] hover:scale-110 transition-all"
                  >
                    <Heart size={15} />
                  </button>
                </div>

                {/* Product Caption below image matching Pothys screenshot */}
                <div className="mt-3 flex flex-col gap-1">
                  <h3 className="text-[13px] md:text-[14px] text-[#222222] font-medium leading-snug line-clamp-1 group-hover:underline">
                    {saree.name}
                  </h3>

                  {/* Pricing row with Strikethrough + Sale Price + % OFF + Action Icons */}
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-[11px] md:text-[12px] text-[#e53935] line-through font-normal">
                        {saree.originalPrice}
                      </span>
                      <span className="text-[13px] md:text-[14px] font-bold text-[#111111]">
                        {saree.salePrice}
                      </span>
                      <span className="text-[10px] md:text-[11px] font-semibold text-[#2e7d32]">
                        {saree.discount}
                      </span>
                    </div>

                    {/* Action Icons on Bottom Right */}
                    <div className="flex items-center gap-1.5 text-[#555555]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenInquiry?.();
                        }}
                        aria-label="Quick View"
                        className="p-1 hover:text-black transition-colors"
                      >
                        <Copy size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenInquiry?.();
                        }}
                        aria-label="Add to Bag"
                        className="p-1 hover:text-black transition-colors"
                      >
                        <ShoppingBag size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
