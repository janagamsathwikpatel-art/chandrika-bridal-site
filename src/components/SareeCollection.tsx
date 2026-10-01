"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, MessageCircle } from "lucide-react";

interface SareeProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

const FEATURED_PRODUCTS: SareeProduct[] = [
  {
    id: "fp-01",
    name: "Pure Silk Pink Kanjivaram Saree",
    price: "₹28,336.00",
    image: "/images/kanjivaram-pink-pure-silk.png",
  },
  {
    id: "fp-02",
    name: "Gold Dual Tone Kanjivaram Tissue Saree",
    price: "₹67,507.00",
    image: "/images/kanjivaram-gold-dual-tone.png",
  },
  {
    id: "fp-03",
    name: "Pure Silk Navy Blue Kanjivaram Saree",
    price: "₹24,652.00",
    image: "/images/kanjivaram-navy-blue.png",
  },
  {
    id: "fp-04",
    name: "Arunima - Off White Muppagam Saree",
    price: "₹24,500.00",
    image: "/images/kanjivaram-arunima-muppagam.png",
  },
  {
    id: "fp-05",
    name: "Royal Crimson Red Pure Silk Kanjivaram Saree",
    price: "₹48,900.00",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
  },
  {
    id: "fp-06",
    name: "Royal Ivory Gold Woven Banarasi Brocade Saree",
    price: "₹39,500.00",
    image: "/images/banarasi-gold-brocade-saree.jpg",
  },
  {
    id: "fp-07",
    name: "Peacock Teal Pure Paithani Silk Saree",
    price: "₹34,500.00",
    image: "/images/paithani-peacock-teal-saree.jpg",
  },
  {
    id: "fp-08",
    name: "Royal Blue Woven Pure Silk Saree",
    price: "₹32,000.00",
    image: "/images/blue-woven-pure-silk-saree.jpg",
  },
];

interface SareeCollectionProps {
  onOpenInquiry?: () => void;
}

export default function SareeCollection({ onOpenInquiry }: SareeCollectionProps) {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : FEATURED_PRODUCTS.length - 4));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < FEATURED_PRODUCTS.length - 4 ? prev + 1 : 0));
  };

  return (
    <section id="sarees" className="w-full bg-[#fbfaf8] py-14 md:py-20 px-4 md:px-10 relative">
      <div className="max-w-[1440px] mx-auto relative">
        {/* ── Section Header matching User Screenshot ── */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2421] tracking-tight">
              Featured products
            </h2>
            <p className="mt-1 text-sm md:text-base text-[#6b6965]">
              Fresh weaves, added daily — discover sarees handwoven just for you
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="text-sm font-semibold text-[#8B0000] hover:text-[#5e0000] flex items-center gap-1 transition-colors self-start sm:self-end whitespace-nowrap"
          >
            View All <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* ── Carousel Container with Left & Right Arrow Buttons ── */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Saree"
            className="absolute -left-3 md:-left-5 top-[40%] -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/95 border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#555] hover:text-[#000] hover:bg-white hover:scale-105 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Saree"
            className="absolute -right-3 md:-right-5 top-[40%] -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/95 border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#555] hover:text-[#000] hover:bg-white hover:scale-105 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* ── 4-Column Product Cards Row Matching Reference ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-hidden">
            {FEATURED_PRODUCTS.slice(startIndex, startIndex + 4).map((saree) => (
              <div
                key={saree.id}
                onClick={onOpenInquiry}
                className="cursor-pointer group flex flex-col text-left"
              >
                {/* Image Card Container with Wishlist Heart and Quick View */}
                <div className="relative aspect-[244/365] w-full overflow-hidden bg-[#ebe8e2] shadow-sm">
                  <Image
                    src={saree.image}
                    alt={saree.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Quick View on Hover */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenInquiry?.();
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#201f1f] text-[11px] font-medium rounded-full shadow-md hover:bg-[#f5f5f5] transition-all"
                    >
                      <ShoppingBag size={13} />
                      Quick View
                    </button>
                  </div>

                  {/* Circular Wishlist Heart Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    aria-label="Add to wishlist"
                    className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center text-[#555] hover:text-[#8B0000] hover:bg-white hover:scale-110 transition-all duration-200"
                  >
                    <Heart size={15} />
                  </button>
                </div>

                {/* Product Caption below image */}
                <div className="mt-3 px-0.5 flex flex-col gap-1">
                  <h3 className="text-[13px] md:text-[14px] text-[#201f1f] font-normal leading-snug line-clamp-1 group-hover:underline">
                    {saree.name}
                  </h3>
                  <p className="text-[13px] md:text-[14px] font-bold text-[#111111]">
                    {saree.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button in bottom right corner */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle size={30} fill="currentColor" stroke="none" />
      </a>
    </section>
  );
}
