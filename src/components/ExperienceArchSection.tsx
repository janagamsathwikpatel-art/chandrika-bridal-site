"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface CategoryCard {
  id: string;
  name: string;
  subtitle: string;
  priceRange: string;
  image: string;
  categoryTag: string;
}

const SHOP_BY_CATEGORIES: CategoryCard[] = [
  {
    id: "cat-01",
    name: "Kanchipuram Silk Sarees",
    subtitle: "Pure Mulberry Silk · 24K Gold Zari Korvai",
    priceRange: "₹24,500 – ₹85,000",
    image: "/images/kanjivaram-pink-pure-silk.png",
    categoryTag: "KANCHIPURAM",
  },
  {
    id: "cat-02",
    name: "Banarasi Brocade Sarees",
    subtitle: "Kadhwa Weave · Real Gold & Silver Zari",
    priceRange: "₹28,000 – ₹95,000",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    categoryTag: "BANARASI",
  },
  {
    id: "cat-03",
    name: "Paithani Peacock Sarees",
    subtitle: "Oblique Tapestry Pallu · Pure Silk",
    priceRange: "₹34,500 – ₹72,000",
    image: "/images/paithani-peacock-teal-saree.jpg",
    categoryTag: "OCCASIONS",
  },
  {
    id: "cat-04",
    name: "Chanderi Tissue Sarees",
    subtitle: "Gossamer Light Metallic Zari Weave",
    priceRange: "₹18,900 – ₹45,000",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    categoryTag: "FABRICS",
  },
  {
    id: "cat-05",
    name: "Patan Patola Double Ikat",
    subtitle: "Hereditary Award-Winning Master Weaves",
    priceRange: "₹52,000 – ₹1,20,000",
    image: "/images/patan-patola-double-ikat-saree.jpg",
    categoryTag: "DESIGNED BY CHANDRIKA",
  },
  {
    id: "cat-06",
    name: "Royal Bridal Collections",
    subtitle: "Heirloom Masterpieces for the Bride",
    priceRange: "₹48,900 – ₹1,50,000",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
    categoryTag: "NEW ARRIVALS",
  },
];

interface FabricWeaveTile {
  id: string;
  title: string;
  image: string;
  categoryTag: string;
}

const FABRIC_WEAVES: FabricWeaveTile[] = [
  { id: "fw-01", title: "Pure Zari Kanchipuram", image: "/images/weave-1.png", categoryTag: "KANCHIPURAM" },
  { id: "fw-02", title: "Banarasi Silk", image: "/images/weave-2.png", categoryTag: "BANARASI" },
  { id: "fw-03", title: "Mysore Crepe", image: "/images/weave-3.png", categoryTag: "MYSORE" },
  { id: "fw-04", title: "Ikats", image: "/images/weave-4.png", categoryTag: "IKAT" },
  { id: "fw-05", title: "Tussar", image: "/images/weave-5.png", categoryTag: "TUSSAR" },
  { id: "fw-06", title: "Soft Silks", image: "/images/weave-6.png", categoryTag: "SOFT SILK" },
  { id: "fw-07", title: "Kanchi Half Fine", image: "/images/weave-7.png", categoryTag: "KANCHIPURAM" },
  { id: "fw-08", title: "Organza", image: "/images/weave-8.png", categoryTag: "ORGANZA" },
  { id: "fw-09", title: "Paithani", image: "/images/weave-9.png", categoryTag: "PAITHANI" },
  { id: "fw-10", title: "Silk Cotton", image: "/images/weave-10.png", categoryTag: "COTTON SILK" },
  { id: "fw-11", title: "Chiffon", image: "/images/weave-11.png", categoryTag: "CHIFFON" },
  { id: "fw-12", title: "Georgette", image: "/images/weave-12.png", categoryTag: "GEORGETTE" },
  { id: "fw-13", title: "Cotton", image: "/images/weave-13.png", categoryTag: "COTTON" },
  { id: "fw-14", title: "Bangalore Silk", image: "/images/weave-14.png", categoryTag: "BANGALORE" },
  { id: "fw-15", title: "Banarasi Katan Silk", image: "/images/weave-15.png", categoryTag: "BANARASI" },
  { id: "fw-16", title: "Kanchipuram Tissue Silk", image: "/images/weave-16.png", categoryTag: "KANCHIPURAM" },
  { id: "fw-17", title: "Chanderi", image: "/images/weave-17.png", categoryTag: "CHANDERI" },
  { id: "fw-18", title: "Brocade Kanchipuram", image: "/images/weave-18.png", categoryTag: "KANCHIPURAM" },
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
  const [activeTab, setActiveTab] = useState<"featured" | "fabrics">("featured");

  const handleCategoryClick = (categoryTag: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryTag);
    }
    const sareesSection = document.getElementById("sarees");
    if (sareesSection) {
      const headerOffset = 70;
      const elementPosition = sareesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center select-none"
      style={{
        height: "100vh",
        minHeight: "750px",
        backgroundColor: "#05084a",
      }}
    >
      {/* ── Deep Royal Blue Interior Backdrop (Visible when doors slide open) ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundColor: "#05084a",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #0a0f75 0%, #05084a 60%, #020324 100%)",
        }}
      />

      {/* ── SLIDING BLUE DOORS (Inside the Stone Arch Opening) ── */}
      <div className="absolute inset-0 w-full h-full z-15 pointer-events-none flex overflow-hidden">
        {/* Left Door Panel */}
        <div
          className="w-1/2 h-full relative transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            transform: isOpen ? "translateX(-100%)" : "translateX(0%)",
          }}
        >
          <img
            src="/images/door-left.png"
            alt="Left Arch Door"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Right Door Panel */}
        <div
          className="w-1/2 h-full relative transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{
            transform: isOpen ? "translateX(100%)" : "translateX(0%)",
          }}
        >
          <img
            src="/images/door-right.png"
            alt="Right Arch Door"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>

      {/* ── Stone Wall Facade Background (With Transparent Arch Cutout) ── */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        <img
          src="/images/arch-background.webp"
          alt="Experience Wall Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* ════════════════ VIEW 1: CLOSED DOORS PORTAL ════════════════ */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ${
          isOpen
            ? "opacity-0 pointer-events-none scale-95"
            : "opacity-100 pointer-events-auto scale-100"
        }`}
        style={{
          marginTop: "clamp(20px, 4vh, 60px)",
        }}
      >
        {/* Small Top Label: EXPERIENCE */}
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

        {/* Large Headline: SAREE COLLECTION */}
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

        {/* Door Opener Trigger Button */}
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

      {/* ════════════════ VIEW 2: REVEALED SHOP BY CATEGORY (Doors Open) ════════════════ */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-start px-4 md:px-12 pt-20 pb-10 transition-all duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-105"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto flex flex-col h-full">
          {/* Top Header Bar with BACK Button on the Left */}
          <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
            {/* Left Side: BACK Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 hover:bg-white text-white hover:text-[#05084a] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 rounded-full border border-white/30 shadow-lg shrink-0"
            >
              <ArrowLeft size={16} />
              <span>BACK</span>
            </button>

            {/* Center Section Title */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-white uppercase">
                Shop By Category
              </h3>
              <p className="text-[10px] md:text-xs text-white/70 tracking-widest uppercase mt-0.5">
                Handcrafted Heirloom Weaves — Select to explore
              </p>
            </div>

            {/* Right Side Spacer */}
            <div className="w-24 hidden sm:block" />
          </div>

          {/* 18-Tile Fabric Weaves Grid (Shop by Category) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 md:gap-4 overflow-y-auto pr-1 no-scrollbar my-auto max-h-[70vh] p-2">
            {FABRIC_WEAVES.map((weave) => (
              <div
                key={weave.id}
                onClick={() => handleCategoryClick(weave.categoryTag)}
                className="group flex flex-col items-center text-center cursor-pointer bg-[#ffffff] p-2.5 rounded-xl border border-white/20 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-2 bg-gray-100 shadow-inner">
                  <Image
                    src={weave.image}
                    alt={weave.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <p className="text-[11px] sm:text-xs font-serif font-medium text-[#111111] group-hover:text-[#8B0000] tracking-wide leading-tight line-clamp-2 mt-1">
                  {weave.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
