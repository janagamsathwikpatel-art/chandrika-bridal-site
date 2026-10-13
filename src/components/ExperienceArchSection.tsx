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
      name: "Pure Zari Kanchipuram",
      tag: "Kanchipuram Korvai",
      image: "/images/kanjivaram-pink-pure-silk.png",
      filter: "KANCHIPURAM",
    },
    {
      name: "Banarasi Silk",
      tag: "Real Zari Kadhwa",
      image: "/images/banarasi-gold-brocade-saree.jpg",
      filter: "BANARASI",
    },
    {
      name: "Mysore Crepe",
      tag: "Pure Mulberry Crepe",
      image: "/images/magenta-pink-woven-silk-saree.jpg",
      filter: "OCCASIONS",
    },
    {
      name: "Ikats",
      tag: "Double Ikat Weave",
      image: "/images/patan-patola-double-ikat-saree.jpg",
      filter: "DESIGNED BY ROSEPETAL",
    },
    {
      name: "Tussar",
      tag: "Wild Handloom Silk",
      image: "/images/tussar-silk-handloom-saree.jpg",
      filter: "FABRICS",
    },
    {
      name: "Soft Silks",
      tag: "Lustrous Featherweight",
      image: "/images/fav-pink-viscose.png",
      filter: "NEW ARRIVALS",
    },
    {
      name: "Kanchi Half Fine",
      tag: "Ancestral Zari Weave",
      image: "/images/kanjivaram-gold-dual-tone.png",
      filter: "KANCHIPURAM",
    },
    {
      name: "Organza",
      tag: "Embroidered Sheer",
      image: "/images/chanderi-tissue-gold-saree.jpg",
      filter: "FABRICS",
    },
    {
      name: "Paithani",
      tag: "Peacock Tapestry",
      image: "/images/paithani-peacock-teal-saree.jpg",
      filter: "OCCASIONS",
    },
    {
      name: "Silk Cotton",
      tag: "Handloom Blend",
      image: "/images/fav-teal-woven.png",
      filter: "READYMADES",
    },
    {
      name: "Chiffon",
      tag: "Printed Luxury",
      image: "/images/kanjivaram-arunima-muppagam.png",
      filter: "DESIGNED BY ROSEPETAL",
    },
    {
      name: "Georgette",
      tag: "Textured Drape",
      image: "/images/fav-rust-maheshwari.png",
      filter: "FABRICS",
    },
    {
      name: "Cotton",
      tag: "Authentic Handloom",
      image: "/images/artisan-weaver-handloom.jpg",
      filter: "SHOP ALL",
    },
    {
      name: "Bangalore Silk",
      tag: "Pure Silk Weave",
      image: "/images/blue-woven-pure-silk-saree.jpg",
      filter: "FABRICS",
    },
    {
      name: "Banarasi Katan Silk",
      tag: "Royal Katan Brocade",
      image: "/images/royal-kanjivaram-bridal-saree.jpg",
      filter: "BANARASI",
    },
    {
      name: "Kanchipuram Tissue Silk",
      tag: "24K Gold Tissue",
      image: "/images/chanderi-tissue-gold-saree.jpg",
      filter: "KANCHIPURAM",
    },
    {
      name: "Chanderi",
      tag: "Metallic Sheer",
      image: "/images/fav-blue-woven.png",
      filter: "FABRICS",
    },
    {
      name: "Brocade Kanchipuram",
      tag: "Heavy Bridal Zari",
      image: "/images/kanjivaram-navy-blue.png",
      filter: "KANCHIPURAM",
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

      {/* ── REVEALED STATE INSIDE OPENED DOORS: SHOP BY CATEGORY (Matching 2nd Screenshot) ── */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-start pt-16 md:pt-20 pb-12 px-4 md:px-12 overflow-y-auto transition-all duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-6"
        }`}
      >
        {/* Top Header Row with Left Back Button */}
        <div className="w-full max-w-6xl flex items-center justify-between mb-6 pb-3 border-b border-white/20">
          {/* BACK BUTTON ON LEFT SIDE */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white/10 hover:bg-white/25 text-white rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-105"
            aria-label="Back to closed doors"
          >
            <ArrowLeft size={14} />
            <span>BACK</span>
          </button>

          <div className="text-center flex-1 mx-3">
            <span className="text-[9px] md:text-[11px] tracking-[0.35em] text-[#ffd700] font-semibold uppercase block mb-0.5">
              ROSEPETAL DESIGNER BOUTIQUE
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider uppercase font-sans">
              SHOP BY CATEGORY
            </h2>
          </div>

          {/* Inquiry / Consultation Button on Right */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8B0000] hover:bg-[#600000] text-white text-[11px] font-semibold tracking-widest uppercase rounded-full transition-all shadow-md"
          >
            <Sparkles size={13} />
            <span>BOOK FIT</span>
          </button>
        </div>

        {/* 18-Category Grid matching 2nd screenshot (media_1791043229233.png) */}
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 my-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.filter)}
              className="group cursor-pointer flex flex-col items-start transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-black/40 border border-white/20 shadow-md group-hover:border-[#ffd700] transition-all">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <span className="mt-2 text-[11px] md:text-[12px] font-medium text-white/95 tracking-wide line-clamp-1 group-hover:text-[#ffd700] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
