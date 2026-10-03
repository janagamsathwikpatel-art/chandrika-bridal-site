"use client";

import { useState } from "react";
import { ArrowLeft, Sparkles, ChevronRight } from "lucide-react";

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function ExperienceArchSection({
  onOpenInquiry,
  onSelectCategory,
}: ExperienceArchSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      name: "KANCHIPURAM",
      tag: "Pure Mulberry Silk & Korvai Zari",
      image: "/images/kanjivaram-pink-pure-silk.png",
      filter: "KANCHIPURAM",
    },
    {
      name: "BANARASI",
      tag: "Kadhwa Brocade & Real Zari",
      image: "/images/banarasi-gold-brocade-saree.jpg",
      filter: "BANARASI",
    },
    {
      name: "PAITHANI",
      tag: "Peacock Tapestry Weave",
      image: "/images/paithani-peacock-teal-saree.jpg",
      filter: "OCCASIONS",
    },
    {
      name: "CHANDERI",
      tag: "Metallic Sheer Tissue Silk",
      image: "/images/chanderi-tissue-gold-saree.jpg",
      filter: "FABRICS",
    },
    {
      name: "PATOLA",
      tag: "Double Ikat Master Weave",
      image: "/images/patan-patola-double-ikat-saree.jpg",
      filter: "DESIGNED BY CHANDRIKA",
    },
    {
      name: "READYMADES",
      tag: "Pre-Draped & Stitched Blouses",
      image: "/images/fav-pink-viscose.png",
      filter: "READYMADES",
    },
  ];

  const handleCategoryClick = (catFilter: string) => {
    if (onSelectCategory) {
      onSelectCategory(catFilter);
    }
    const sareesSection = document.getElementById("sarees");
    if (sareesSection) {
      sareesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="experience"
      className="relative w-screen overflow-hidden flex flex-col items-center justify-center bg-[#05084a]"
      style={{
        height: "100vh",
        minHeight: "700px",
      }}
    >
      {/* ── Deep Royal Blue Backdrop (Visible behind open doors) ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundColor: "#05084a",
          backgroundImage:
            "radial-gradient(circle at 50% 55%, #080d69 0%, #05084a 55%, #030536 100%)",
        }}
      />

      {/* ── Stone Wall Background Frame with Transparent Arch Opening ── */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        <img
          src="/images/arch-background.webp"
          alt="Experience Wall Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* ── LEFT DOOR ── */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-10 transition-transform duration-1000 ease-in-out pointer-events-none"
        style={{
          transform: isOpen ? "translateX(-100%)" : "translateX(0%)",
        }}
      >
        <img
          src="/images/door-left.png"
          alt="Left Door"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* ── RIGHT DOOR ── */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-10 transition-transform duration-1000 ease-in-out pointer-events-none"
        style={{
          transform: isOpen ? "translateX(100%)" : "translateX(0%)",
        }}
      >
        <img
          src="/images/door-right.png"
          alt="Right Door"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* ── CLOSED DOOR FRONT STATE (Headline + Explore Button) ── */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center text-center px-4 select-none transition-all duration-700 ${
          isOpen
            ? "opacity-0 pointer-events-none scale-95"
            : "opacity-100 pointer-events-auto scale-100"
        }`}
        style={{
          marginTop: "clamp(20px, 4vh, 60px)",
        }}
      >
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

      {/* ── REVEALED STATE INSIDE OPENED DOORS: SHOP BY CATEGORY ── */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-start pt-20 md:pt-28 pb-12 px-6 md:px-16 overflow-y-auto transition-all duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-6"
        }`}
      >
        {/* Top Header Row with Left Back Button */}
        <div className="w-full max-w-5xl flex items-center justify-between mb-8 pb-4 border-b border-white/20">
          {/* BACK BUTTON ON LEFT SIDE */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2 bg-white/10 hover:bg-white/25 text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-105"
            aria-label="Back to closed doors"
          >
            <ArrowLeft size={16} />
            <span>BACK</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#ffd700] font-semibold uppercase block mb-1">
              CHANDRIKA HAUTE BRIDAL
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wider uppercase font-sans">
              SHOP BY CATEGORY
            </h2>
          </div>

          {/* Inquiry / Consultation Button on Right */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#8B0000] hover:bg-[#600000] text-white text-xs font-semibold tracking-widest uppercase rounded-full transition-all shadow-md"
          >
            <Sparkles size={14} />
            <span>BOOK FIT</span>
          </button>
        </div>

        {/* Category Cards Grid inside open portal */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 my-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.filter)}
              className="group cursor-pointer relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-black/40 shadow-xl transition-all duration-500 hover:scale-[1.03] hover:border-[#ffd700]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[9px] md:text-[10px] text-[#ffd700] font-medium tracking-widest uppercase mb-0.5">
                  {cat.tag}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm md:text-lg font-bold text-white tracking-wider uppercase">
                    {cat.name}
                  </h3>
                  <ChevronRight
                    size={16}
                    className="text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
