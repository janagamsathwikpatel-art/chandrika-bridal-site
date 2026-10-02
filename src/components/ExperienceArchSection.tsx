"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, Sparkles } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  categoryTag: string;
  subtitle: string;
  priceRange: string;
  image: string;
}

const NALLI_CATEGORIES: CategoryItem[] = [
  {
    id: "cat-kanchipuram",
    name: "Bridal Kanchipuram",
    categoryTag: "KANCHIPURAM",
    subtitle: "Pure Mulberry Silk · 24K Gold Real Zari Korvai",
    priceRange: "₹24,500 – ₹67,500",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
  },
  {
    id: "cat-banarasi",
    name: "Banarasi Brocade",
    categoryTag: "BANARASI",
    subtitle: "Kadhwa Hand-Locked Floral Jaal & Tissue",
    priceRange: "₹39,500 – ₹54,000",
    image: "/images/banarasi-gold-brocade-saree.jpg",
  },
  {
    id: "cat-paithani",
    name: "Paithani & Patola",
    categoryTag: "OCCASIONS",
    subtitle: "Peacock Tapestry Weaves & Double Ikat",
    priceRange: "₹34,500 – ₹1,15,000",
    image: "/images/paithani-peacock-teal-saree.jpg",
  },
  {
    id: "cat-chanderi",
    name: "Chanderi Metallic",
    categoryTag: "FABRICS",
    subtitle: "Gossamer Lightweight Gold Tissue Weaves",
    priceRange: "₹24,500 – ₹44,500",
    image: "/images/chanderi-tissue-gold-saree.jpg",
  },
  {
    id: "cat-maheshwari",
    name: "Maheshwari & Silk Cotton",
    categoryTag: "NEW ARRIVALS",
    subtitle: "Handcrafted Traditional Heritage Weaves",
    priceRange: "₹4,999 – ₹26,400",
    image: "/images/fav-rust-maheshwari.png",
  },
  {
    id: "cat-readymade",
    name: "Ready-To-Wear & Blouses",
    categoryTag: "READYMADES",
    subtitle: "Pre-Draped Sarees & Stitched Blouses",
    priceRange: "₹3,999 – ₹18,900",
    image: "/images/fav-pink-viscose.png",
  },
];

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function ExperienceArchSection({
  onOpenInquiry,
  onSelectCategory,
}: ExperienceArchSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (categoryTag: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryTag);
    }
    const sareesSection = document.getElementById("sarees");
    if (sareesSection) {
      sareesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="experience"
      className="relative w-screen overflow-hidden flex flex-col items-center justify-center min-h-screen py-16"
      style={{
        backgroundColor: "#05084a",
      }}
    >
      {/* ── Deep Royal Blue Backdrop (Visible inside opened arch hole) ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundColor: "#05084a",
          backgroundImage:
            "radial-gradient(circle at 50% 55%, #080d69 0%, #05084a 55%, #030536 100%)",
        }}
      />

      {/* ── Stone Wall Background with Transparent Arch Frame ── */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <img
          src="/images/arch-background.webp"
          alt="Experience Wall Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* ── LEFT & RIGHT ARCHWAY DOORS (Slide open when isOpen === true) ── */}
      <div
        className={`absolute inset-0 z-15 flex pointer-events-none transition-all duration-1000 ease-in-out ${
          isOpen ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className={`w-1/2 h-full relative transition-transform duration-1000 ease-in-out ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            src="/images/door-left.png"
            alt="Door Left"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div
          className={`w-1/2 h-full relative transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            src="/images/door-right.png"
            alt="Door Right"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>

      {/* ── CLOSED ARCH FACADE VIEW (Initial State) ── */}
      {!isOpen && (
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 select-none my-auto">
          {/* Small Top Label */}
          <span
            style={{
              fontSize: "clamp(12px, 1.3vw, 16px)",
              letterSpacing: "0.38em",
              fontWeight: 500,
              color: "#ffffff",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            EXPERIENCE
          </span>

          {/* Large Bold Condensed Headline */}
          <h2
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(42px, 6.5vw, 86px)",
              letterSpacing: "0.02em",
              lineHeight: "0.95",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: 0,
              padding: 0,
              marginBottom: "38px",
              textShadow: "0 4px 24px rgba(0,0,0,0.85)",
            }}
          >
            SAREE COLLECTION
          </h2>

          {/* Interactive Door Opener Button */}
          <button
            onClick={() => setIsOpen(true)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 42px",
              border: "1.5px solid #ffffff",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: "clamp(11px, 1.1vw, 13px)",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.35s ease",
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#05084a";
              e.currentTarget.style.textShadow = "none";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.textShadow = "0 1px 6px rgba(0,0,0,0.7)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            EXPLORE THE COLLECTION
          </button>
        </div>
      )}

      {/* ── REVEALED INNER PAVILION: NALLI-INSPIRED "SHOP BY CATEGORY" ── */}
      {isOpen && (
        <div className="relative z-30 w-full max-w-[1380px] mx-auto px-4 md:px-8 py-8 animate-fadeIn flex flex-col items-center">
          {/* Top Control Bar with Close Button */}
          <div className="w-full flex items-center justify-between border-b border-white/20 pb-4 mb-6">
            <div className="flex items-center gap-2 text-[#ffd700]">
              <Sparkles size={16} />
              <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-semibold text-white">
                SHOP BY CATEGORY — HAUTE HANDLOOM ARCHIVE
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white hover:bg-white hover:text-[#05084a] text-[10px] tracking-widest uppercase transition-all duration-300 rounded-full"
            >
              <span>CLOSE ARCH</span>
              <X size={14} />
            </button>
          </div>

          {/* 6-Category Curated Grid (Inspired by Nalli) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-h-[75vh] overflow-y-auto pr-1 no-scrollbar">
            {NALLI_CATEGORIES.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCategoryClick(item.categoryTag)}
                className="group relative bg-[#0a0e5c]/70 border border-white/15 rounded-xl overflow-hidden cursor-pointer backdrop-blur-md transition-all duration-500 hover:border-[#ffd700] hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Category Image Card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05084a] via-black/20 to-transparent" />
                  
                  {/* Category Tag Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md text-[#ffd700] text-[9px] font-semibold tracking-widest uppercase rounded-full border border-[#ffd700]/30">
                    {item.categoryTag}
                  </span>
                </div>

                {/* Category Info Footer */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left bg-gradient-to-b from-[#05084a]/90 to-[#030536]">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#ffd700] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-white/70 tracking-wider mt-1 font-light line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#ffd700] tracking-wider text-[11px]">
                      {item.priceRange}
                    </span>
                    <span className="flex items-center gap-1 text-white group-hover:text-[#ffd700] font-medium tracking-widest text-[10px] uppercase transition-colors">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
