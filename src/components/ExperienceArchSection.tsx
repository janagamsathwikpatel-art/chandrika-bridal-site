"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

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
      image: "/images/weave-1.png",
      filter: "KANCHIPURAM",
    },
    {
      name: "Banarasi Silk",
      tag: "Real Zari Kadhwa",
      image: "/images/weave-2.png",
      filter: "BANARASI",
    },
    {
      name: "Mysore Crepe",
      tag: "Pure Mulberry Crepe",
      image: "/images/weave-3.png",
      filter: "OCCASIONS",
    },
    {
      name: "Ikats",
      tag: "Double Ikat Weave",
      image: "/images/weave-4.png",
      filter: "DESIGNED BY ROSEPETAL",
    },
    {
      name: "Tussar",
      tag: "Wild Handloom Silk",
      image: "/images/weave-5.png",
      filter: "FABRICS",
    },
    {
      name: "Soft Silks",
      tag: "Lustrous Featherweight",
      image: "/images/weave-6.png",
      filter: "NEW ARRIVALS",
    },
    {
      name: "Kanchi Half Fine",
      tag: "Ancestral Zari Weave",
      image: "/images/weave-7.png",
      filter: "KANCHIPURAM",
    },
    {
      name: "Organza",
      tag: "Embroidered Sheer",
      image: "/images/weave-8.png",
      filter: "FABRICS",
    },
    {
      name: "Paithani",
      tag: "Peacock Tapestry",
      image: "/images/weave-9.png",
      filter: "OCCASIONS",
    },
    {
      name: "Silk Cotton",
      tag: "Handloom Blend",
      image: "/images/weave-10.png",
      filter: "READYMADES",
    },
    {
      name: "Chiffon",
      tag: "Printed Luxury",
      image: "/images/weave-11.png",
      filter: "DESIGNED BY ROSEPETAL",
    },
    {
      name: "Georgette",
      tag: "Textured Drape",
      image: "/images/weave-12.png",
      filter: "FABRICS",
    },
    {
      name: "Cotton",
      tag: "Authentic Handloom",
      image: "/images/weave-13.png",
      filter: "SHOP ALL",
    },
    {
      name: "Bangalore Silk",
      tag: "Pure Silk Weave",
      image: "/images/weave-14.png",
      filter: "FABRICS",
    },
    {
      name: "Banarasi Katan Silk",
      tag: "Royal Katan Brocade",
      image: "/images/weave-15.png",
      filter: "BANARASI",
    },
    {
      name: "Kanchipuram Tissue Silk",
      tag: "24K Gold Tissue",
      image: "/images/weave-16.png",
      filter: "KANCHIPURAM",
    },
    {
      name: "Chanderi",
      tag: "Metallic Sheer",
      image: "/images/weave-17.png",
      filter: "FABRICS",
    },
    {
      name: "Brocade Kanchipuram",
      tag: "Heavy Bridal Zari",
      image: "/images/weave-18.png",
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
      className="relative w-screen overflow-hidden flex flex-col items-center justify-center bg-[#2b0814]"
      style={{
        height: "100vh",
        minHeight: "700px",
      }}
    >
      {/* ── Royal Rose Burgundy Velvet Backdrop (Visible when doors are opened) ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundColor: "#2b0814",
          backgroundImage:
            "radial-gradient(circle at 50% 55%, #580e22 0%, #2b0814 60%, #150308 100%)",
        }}
      />
      {/* Subtle Antique Gold Mandala Texture Overlay inside the revealed room */}
      <div
        className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/rose-burgundy-velvet-mandala-bg.jpg')",
        }}
      />

      {/* ── CLOSED DOOR FRONT STATE (100% Exact Matching User Reference Image) ── */}
      <div
        className={`absolute inset-0 w-full h-full z-20 transition-all duration-700 ease-in-out select-none ${
          isOpen
            ? "opacity-0 pointer-events-none scale-105"
            : "opacity-100 pointer-events-auto scale-100"
        }`}
      >
        {/* Exact Reference Artwork (Rose Burgundy Velvet Walls, Gold Mandalas, Weathered Arch, Velvet Doors, Saree Mannequins) */}
        <img
          src="/images/arch-experience-rose-burgundy.jpg"
          alt="Rosepetal Saree Collection Architectural Arch"
          className="w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Interactive Click Area & Explore Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <button
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto mt-[115px] sm:mt-[130px] md:mt-[145px] px-8 sm:px-11 py-3 sm:py-3.5 border border-white/70 hover:border-[#ffd700] hover:bg-[#ffd700] text-transparent hover:text-[#2b0814] text-[11px] sm:text-[12px] tracking-[0.26em] uppercase font-medium transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer"
            aria-label="Explore the collection"
          >
            <span className="opacity-0 hover:opacity-100 transition-opacity font-semibold">EXPLORE THE COLLECTION</span>
          </button>
        </div>
      </div>

        {/* ── REVEALED STATE INSIDE OPENED DOORS: SHOP BY CATEGORY (Matching 2nd Screenshot) ── */}
        <div
          className={`absolute inset-0 z-30 flex flex-col items-center justify-start pt-20 md:pt-24 pb-12 px-4 md:px-12 overflow-y-auto transition-all duration-700 ${
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

          {/* Spacer on right matching BACK button width to keep center title balanced */}
          <div className="w-[72px] hidden sm:block pointer-events-none" />
        </div>

        {/* 18-Category Swatch Grid (Clean authentic fabric swatches) */}
        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 my-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.filter)}
              className="group cursor-pointer flex flex-col items-start transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-white/5 border border-white/20 shadow-md group-hover:border-[#ffd700] transition-all">
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
