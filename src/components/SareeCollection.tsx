"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SareeProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  categories: string[];
}

const ALL_PRODUCTS: SareeProduct[] = [
  {
    id: "sp-01",
    name: "Pure Silk Pink Kanjivaram Saree",
    price: "₹28,336.00",
    image: "/images/kanjivaram-pink-pure-silk.png",
    categories: ["NEW ARRIVALS", "KANCHIPURAM", "OCCASIONS", "DESIGNED BY CHANDRIKA", "SHOP ALL"],
  },
  {
    id: "sp-02",
    name: "Gold Dual Tone Kanjivaram Tissue Saree",
    price: "₹67,507.00",
    image: "/images/kanjivaram-gold-dual-tone.png",
    categories: ["NEW ARRIVALS", "KANCHIPURAM", "OCCASIONS", "SHOP ALL"],
  },
  {
    id: "sp-03",
    name: "Pure Silk Navy Blue Kanjivaram Saree",
    price: "₹24,652.00",
    image: "/images/kanjivaram-navy-blue.png",
    categories: ["KANCHIPURAM", "SHOP ALL"],
  },
  {
    id: "sp-04",
    name: "Arunima - Off White Muppagam Saree",
    price: "₹24,500.00",
    image: "/images/kanjivaram-arunima-muppagam.png",
    categories: ["KANCHIPURAM", "DESIGNED BY CHANDRIKA", "SHOP ALL"],
  },
  {
    id: "sp-05",
    name: "Royal Crimson Red Pure Silk Kanjivaram Saree",
    price: "₹48,900.00",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
    categories: ["KANCHIPURAM", "OCCASIONS", "SHOP ALL"],
  },
  {
    id: "sp-06",
    name: "Royal Ivory Gold Woven Banarasi Brocade Saree",
    price: "₹39,500.00",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    categories: ["NEW ARRIVALS", "BANARASI", "OCCASIONS", "SHOP ALL"],
  },
  {
    id: "sp-07",
    name: "Champagne Gold Woven Chanderi Tissue Saree",
    price: "₹44,500.00",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    categories: ["BANARASI", "FABRICS", "SHOP ALL"],
  },
  {
    id: "sp-08",
    name: "Peacock Teal Pure Paithani Silk Saree",
    price: "₹34,500.00",
    image: "/images/paithani-peacock-teal-saree.jpg",
    categories: ["NEW ARRIVALS", "OCCASIONS", "SHOP ALL"],
  },
  {
    id: "sp-09",
    name: "Royal Blue Woven Pure Silk Saree",
    price: "₹32,000.00",
    image: "/images/blue-woven-pure-silk-saree.jpg",
    categories: ["FABRICS", "DESIGNED BY CHANDRIKA", "SHOP ALL"],
  },
  {
    id: "sp-10",
    name: "Magenta Pink Woven Silk Saree",
    price: "₹36,800.00",
    image: "/images/magenta-pink-woven-silk-saree.jpg",
    categories: ["NEW ARRIVALS", "OCCASIONS", "FABRICS", "SHOP ALL"],
  },
  {
    id: "sp-11",
    name: "Patan Patola Double Ikat Silk Saree",
    price: "₹52,000.00",
    image: "/images/patan-patola-double-ikat-saree.jpg",
    categories: ["DESIGNED BY CHANDRIKA", "OCCASIONS", "SHOP ALL"],
  },
  {
    id: "sp-12",
    name: "Tussar Silk Handloom Saree & Fabric",
    price: "₹22,900.00",
    image: "/images/tussar-silk-handloom-saree.jpg",
    categories: ["FABRICS", "READYMADES", "SHOP ALL"],
  },
  {
    id: "sp-13",
    name: "Light Violet Woven Maheshwari Silk Cotton Saree",
    price: "₹26,400.00",
    image: "/images/fav-rust-maheshwari.png",
    categories: ["READYMADES", "FABRICS", "SHOP ALL"],
  },
  {
    id: "sp-14",
    name: "Pink Woven Pure Viscose Ready-To-Wear Saree",
    price: "₹18,900.00",
    image: "/images/fav-pink-viscose.png",
    categories: ["READYMADES", "SHOP ALL"],
  },
];

const CATEGORIES = [
  "SHOP ALL",
  "NEW ARRIVALS",
  "KANCHIPURAM",
  "BANARASI",
  "OCCASIONS",
  "DESIGNED BY CHANDRIKA",
  "READYMADES",
  "FABRICS",
];

interface SareeCollectionProps {
  onOpenInquiry?: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function SareeCollection({
  onOpenInquiry,
  selectedCategory = "SHOP ALL",
  onSelectCategory,
}: SareeCollectionProps) {
  const [currentCategory, setCurrentCategory] = useState(selectedCategory);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (selectedCategory) {
      setCurrentCategory(selectedCategory);
      setStartIndex(0);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setStartIndex(0);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  // Filter products based on selected category
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    if (currentCategory === "SHOP ALL" || currentCategory === "ALL") return true;
    return product.categories.includes(currentCategory);
  });

  const maxIndex = Math.max(0, filteredProducts.length - 4);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const displayedProducts =
    filteredProducts.length <= 4
      ? filteredProducts
      : filteredProducts.slice(startIndex, startIndex + 4);

  return (
    <section id="sarees" className="w-full bg-[#fbfaf8] py-14 md:py-20 px-4 md:px-10 relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto relative">
        {/* ── Section Header ── */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2421] tracking-tight">
              Featured products
            </h2>
            <p className="mt-1 text-sm md:text-base text-[#6b6965]">
              {currentCategory === "SHOP ALL" || !currentCategory
                ? "Fresh weaves, added daily — discover sarees handwoven just for you"
                : `Fresh handwoven sarees selected for ${currentCategory}`}
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="text-sm font-semibold text-[#8B0000] hover:text-[#5e0000] flex items-center gap-1 transition-colors self-start sm:self-end whitespace-nowrap"
          >
            View All <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* ── Product Display Grid / Carousel ── */}
        <div className="relative group/carousel min-h-[360px]">
          {filteredProducts.length > 4 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                aria-label="Previous Saree"
                className="absolute -left-3 md:-left-5 top-[40%] -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/95 border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#555] hover:text-[#000] hover:bg-white hover:scale-105 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                aria-label="Next Saree"
                className="absolute -right-3 md:-right-5 top-[40%] -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/95 border border-[#e2dfd7] shadow-md flex items-center justify-center text-[#555] hover:text-[#000] hover:bg-white hover:scale-105 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {displayedProducts.map((saree) => (
                <div
                  key={saree.id}
                  onClick={onOpenInquiry}
                  className="cursor-pointer group flex flex-col text-left"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[244/365] w-full overflow-hidden bg-[#ebe8e2] shadow-sm rounded-lg">
                    <Image
                      src={saree.image}
                      alt={saree.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Product Details */}
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
          ) : (
            <div className="py-12 text-center text-[#666]">
              <p className="text-base font-medium">No items found in this category.</p>
              <button
                onClick={() => handleCategoryChange("SHOP ALL")}
                className="mt-3 px-4 py-2 bg-[#8B0000] text-white text-xs font-semibold rounded-full"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
