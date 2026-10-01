"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

interface SareeProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

const CUSTOMER_FAVOURITES: SareeProduct[] = [
  {
    id: "cf-01",
    name: "Blue Woven Pure Viscose Saree",
    price: "₹ 3999",
    image: "/images/blue-woven-pure-silk-saree.jpg",
  },
  {
    id: "cf-02",
    name: "Blue Pure Viscose Woven Saree",
    price: "₹ 3999",
    image: "/images/paithani-peacock-teal-saree.jpg",
  },
  {
    id: "cf-03",
    name: "Light Violet Woven Pure Silk Cotton Maheshwari Saree",
    price: "₹ 4999",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
  },
  {
    id: "cf-04",
    name: "Pink Woven Pure Viscose Saree",
    price: "₹ 4999",
    image: "/images/magenta-pink-woven-silk-saree.jpg",
  },
  {
    id: "cf-05",
    name: "Royal Ivory Gold Woven Banarasi Saree",
    price: "₹ 5499",
    image: "/images/banarasi-gold-brocade-saree.jpg",
  },
  {
    id: "cf-06",
    name: "Champagne Gold Woven Chanderi Tissue Saree",
    price: "₹ 4499",
    image: "/images/chanderi-tissue-gold-saree.jpg",
  },
];

interface SareeCollectionProps {
  onOpenInquiry?: () => void;
}

export default function SareeCollection({ onOpenInquiry }: SareeCollectionProps) {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : CUSTOMER_FAVOURITES.length - 4));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < CUSTOMER_FAVOURITES.length - 4 ? prev + 1 : 0));
  };

  return (
    <section id="sarees" className="w-full bg-[#fbfaf8] py-14 md:py-20 px-4 md:px-10 relative">
      <div className="max-w-[1440px] mx-auto relative">
        {/* ── Carousel Container with Left & Right Arrow Buttons ── */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Saree"
            className="absolute -left-3 md:-left-5 top-[38%] -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/95 border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#555] hover:text-[#000] hover:bg-white hover:scale-105 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Saree"
            className="absolute -right-3 md:-right-5 top-[38%] -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/95 border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#555] hover:text-[#000] hover:bg-white hover:scale-105 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* ── 4-Column Product Cards Row ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-hidden">
            {CUSTOMER_FAVOURITES.slice(startIndex, startIndex + 4).map((saree) => (
              <div
                key={saree.id}
                onClick={onOpenInquiry}
                className="cursor-pointer group flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Rounded Image Card matching user screenshot */}
                <div className="relative aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#ebe8e2] shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={saree.image}
                    alt={saree.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Product Caption below image */}
                <div className="mt-3.5 px-1 flex flex-col gap-1 text-left">
                  <h3 className="text-[13px] md:text-[14px] text-[#201f1f] font-normal leading-snug line-clamp-1">
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

        {/* ── Customer Favourites Stately Serif Heading below cards ── */}
        <div className="mt-12 md:mt-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1f2421] tracking-tight">
            Customer Favourites
          </h2>
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
