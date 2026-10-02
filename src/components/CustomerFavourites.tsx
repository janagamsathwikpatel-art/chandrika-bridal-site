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
    name: "Pink Mysore Silk Saree",
    originalPrice: "₹12,165",
    salePrice: "₹10,949",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/kanjivaram-pink-pure-silk.png",
  },
  {
    id: "cf-02",
    name: "Grey Mysore Silk Saree",
    originalPrice: "₹13,085",
    salePrice: "₹11,777",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/blue-woven-pure-silk-saree.jpg",
  },
  {
    id: "cf-03",
    name: "Peach Plain Mysore Silk Saree",
    originalPrice: "₹11,255",
    salePrice: "₹10,130",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/chanderi-tissue-gold-saree.jpg",
  },
  {
    id: "cf-04",
    name: "Royal Crimson Kanjivaram Silk Saree",
    originalPrice: "₹54,330",
    salePrice: "₹48,900",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
  },
  {
    id: "cf-05",
    name: "Gold Woven Banarasi Brocade Saree",
    originalPrice: "₹43,890",
    salePrice: "₹39,500",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/banarasi-gold-brocade-saree.jpg",
  },
  {
    id: "cf-06",
    name: "Teal Pure Paithani Silk Saree",
    originalPrice: "₹38,330",
    salePrice: "₹34,500",
    discount: "(10% OFF)",
    badge: "Sale",
    image: "/images/paithani-peacock-teal-saree.jpg",
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
          {/* Traditional Handloom Peacock Motif Logo */}
          <div className="mb-4">
            <svg
              width="44"
              height="52"
              viewBox="0 0 44 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#8B0000]"
            >
              <path
                d="M22 0C13.2 0 6 7.2 6 16C6 24 12 30.5 19.5 31.8V42H13V46H31V42H24.5V31.8C32 30.5 38 24 38 16C38 7.2 30.8 0 22 0ZM22 26C16.5 26 12 21.5 12 16C12 10.5 16.5 6 22 6C27.5 6 32 10.5 32 16C32 21.5 27.5 26 22 26Z"
                fill="currentColor"
              />
              <circle cx="22" cy="16" r="4" fill="#8B0000" />
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
