import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface CategoryCard {
  id: string;
  name: string;
  subtitle: string;
  priceRange: string;
  image: string;
  categoryTag: string;
}

interface SareeDetail {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

const WEAVE_SAREES: Record<string, SareeDetail[]> = {
  "fw-01": [
    { id: "pz-1", name: "Aarushi Kanchipuram Korvai Silk Saree", price: "₹48,000 – ₹85,000", image: "/images/royal-kanjivaram-bridal-saree.jpg", description: "Handcrafted pure mulberry silk woven with 24K gold zari korvai border." },
    { id: "pz-2", name: "Mint Zari Kanchipuram Pure Silk Saree", price: "₹52,000 – ₹95,000", image: "/images/kanjivaram-pink-pure-silk.png", description: "Traditional three-shuttle Muppagam weave with solid pure gold zari pallu." },
  ],
  "fw-02": [
    { id: "bs-1", name: "Gold Brocade Banarasi Silk Saree", price: "₹39,500 – ₹75,000", image: "/images/banarasi-gold-brocade-saree.jpg", description: "Classic Katan silk brocade featuring intricate gold zari floral jaal." },
    { id: "bs-2", name: "Heritage Magenta Banarasi Brocade", price: "₹53,010 – ₹88,000", image: "/images/our-col-4.jpg", description: "Rich magenta & gold brocade pallu with hand-twisted tassel details." },
  ],
  "fw-03": [
    { id: "mc-1", name: "Pink Mysore Crepe Silk Saree", price: "₹12,165 – ₹22,000", image: "/images/fav-pink-viscose.png", description: "Butter-soft Mysore crepe silk with fine gold zari border." },
    { id: "mc-2", name: "Royal Crimson Mysore Crepe Saree", price: "₹15,500 – ₹28,000", image: "/images/handloom-card-1.jpg", description: "Rich lightweight fluid drape with traditional zari piping." },
  ],
  "fw-04": [
    { id: "ik-1", name: "Patan Patola Double Ikat Saree", price: "₹52,000 – ₹1,20,000", image: "/images/patan-patola-double-ikat-saree.jpg", description: "Hereditary award-winning master weave with sacred geometric double ikat." },
    { id: "ik-2", name: "Rust Maheshwari Ikat Silk Saree", price: "₹18,500 – ₹32,000", image: "/images/fav-rust-maheshwari.png", description: "Authentic Maheshwari ikat border with lightweight drape." },
  ],
  "fw-05": [
    { id: "tu-1", name: "Raw Tussar Botanical Silk Saree", price: "₹26,000 – ₹45,000", image: "/images/tussar-silk-handloom-saree.jpg", description: "Wild tussar textured silk finished with antique bronze-gold zari border." },
    { id: "tu-2", name: "Natural Handloom Tussar Silk Saree", price: "₹22,000 – ₹38,000", image: "/images/handloom-card-2.jpg", description: "Pure natural tussar texture with hand-loomed gold weave." },
  ],
  "fw-06": [
    { id: "ss-1", name: "Emerald Green & Purple Soft Silk", price: "₹43,650 – ₹68,000", image: "/images/our-col-1.png", description: "Ultra-soft silk saree with royal purple pallu and gold belt accent." },
    { id: "ss-2", name: "Magenta Pink Soft Woven Silk Saree", price: "₹34,000 – ₹55,000", image: "/images/magenta-pink-woven-silk-saree.jpg", description: "Lightweight soft silk drape with delicate floral zari motifs." },
  ],
  "fw-07": [
    { id: "kh-1", name: "Kanchi Half Fine Zari Saree", price: "₹28,500 – ₹48,000", image: "/images/kanjivaram-arunima-muppagam.png", description: "Traditional Half-Fine zari border with rich Mulberry silk texture." },
    { id: "kh-2", name: "Navy Blue Kanchi Half Fine Saree", price: "₹32,000 – ₹54,000", image: "/images/kanjivaram-navy-blue.png", description: "Navy blue luster with soft Korvai pallu finish." },
  ],
  "fw-08": [
    { id: "og-1", name: "Chanderi Tissue Organza Silk Saree", price: "₹24,500 – ₹45,000", image: "/images/chanderi-tissue-gold-saree.jpg", description: "Sheer metallic luster with weightless champagne gold elegance." },
    { id: "og-2", name: "Gossamer Light Mint Organza Saree", price: "₹18,900 – ₹36,000", image: "/images/handloom-card-3.jpg", description: "Ultra-light translucent organza with embroidered silver highlights." },
  ],
  "fw-09": [
    { id: "pa-1", name: "Paithani Peacock Teal Silk Saree", price: "₹34,500 – ₹72,000", image: "/images/paithani-peacock-teal-saree.jpg", description: "Oblique tapestry pallu featuring resham hand-inlay peacocks." },
    { id: "pa-2", name: "Royal Woven Paithani Brocade", price: "₹42,000 – ₹85,000", image: "/images/fav-teal-woven.png", description: "Heavy tissue gold pallu with traditional Asavali motifs." },
  ],
  "fw-10": [
    { id: "sc-1", name: "Handloom Blue Silk Cotton Saree", price: "₹14,500 – ₹25,000", image: "/images/fav-blue-woven.png", description: "Breathable silk-cotton blend with subtle gold zari stripes." },
    { id: "sc-2", name: "Pastel Weave Silk Cotton Saree", price: "₹16,800 – ₹29,000", image: "/images/handloom-card-4.jpg", description: "Everyday luxury comfort with rich temple border finish." },
  ],
  "fw-11": [
    { id: "ch-1", name: "Handcrafted Floral Chiffon Saree", price: "₹19,500 – ₹34,000", image: "/images/handloom-card-5.jpg", description: "Fluid pure chiffon featuring delicate botanical hand-prints." },
    { id: "ch-2", name: "Embellished Peach Chiffon Saree", price: "₹21,000 – ₹38,000", image: "/images/handloom-card-6.jpg", description: "Lightweight graceful drape with shimmering zari border." },
  ],
  "fw-12": [
    { id: "go-1", name: "Blue Woven Pure Silk Georgette Saree", price: "₹28,000 – ₹49,000", image: "/images/blue-woven-pure-silk-saree.jpg", description: "Pure silk georgette with crinkled texture and silver zari work." },
    { id: "go-2", name: "Embroidered Royal Georgette Saree", price: "₹31,500 – ₹54,000", image: "/images/cta-saree-1.jpg", description: "Heavy borders with elegant drape for evening celebrations." },
  ],
  "fw-13": [
    { id: "co-1", name: "Handloom Pure Artisanal Cotton Saree", price: "₹8,500 – ₹16,000", image: "/images/artisan-weaver-handloom.jpg", description: "100% natural breathable cotton hand-woven by master artisans." },
    { id: "co-2", name: "Heritage Block Print Cotton Saree", price: "₹9,800 – ₹18,500", image: "/images/cta-saree-2.jpg", description: "Vegetable dyed traditional prints with gold border piping." },
  ],
  "fw-14": [
    { id: "bg-1", name: "Bangalore Soft Pure Silk Saree", price: "₹22,500 – ₹39,000", image: "/images/cta-saree-3.png", description: "Smooth Bangalore Mulberry silk with lustrous finish." },
    { id: "bg-2", name: "Bangalore Crimson Silk Saree", price: "₹24,900 – ₹42,000", image: "/images/cta-saree-4.jpg", description: "Vibrant rich colors woven with solid gold zari pallu." },
  ],
  "fw-15": [
    { id: "bk-1", name: "Banarasi Katan Silk Real Zari Saree", price: "₹58,000 – ₹98,000", image: "/images/our-col-2.jpg", description: "Pure Katan silk woven with silver & real gold zari thread." },
    { id: "bk-2", name: "Bridal Katan Silk Masterpiece Saree", price: "₹62,500 – ₹1,10,000", image: "/images/handloom-hero-authentic.jpg", description: "Heirloom bridal collection with dense all-over weaving." },
  ],
  "fw-16": [
    { id: "kt-1", name: "Gold Kanchipuram Tissue Silk Saree", price: "₹75,000 – ₹1,35,000", image: "/images/kanjivaram-gold-dual-tone.png", description: "Full gold tissue warp & weft creating an opulent regal shine." },
    { id: "kt-2", name: "Tissue Zari Kanchipuram Bridal Saree", price: "₹82,000 – ₹1,50,000", image: "/images/our-col-3.jpg", description: "Heavy gold tissue pallu with Korvai temple border design." },
  ],
  "fw-17": [
    { id: "cd-1", name: "Gold Chanderi Metallic Saree", price: "₹24,500 – ₹45,000", image: "/images/chanderi-tissue-gold-saree.jpg", description: "Featherweight sheer weave with hand-stamped gold butis." },
    { id: "cd-2", name: "Chanderi Silk Motif Saree", price: "₹21,000 – ₹38,000", image: "/images/handloom-card-3.jpg", description: "Traditional Zari border with translucent silk body." },
  ],
  "fw-18": [
    { id: "bk2-1", name: "Heavy Brocade Kanchipuram Bridal Saree", price: "₹88,000 – ₹1,45,000", image: "/images/our-col-3.jpg", description: "Antique gold & lilac Kanjivaram brocade for grand weddings." },
    { id: "bk2-2", name: "Royal Crimson Kanjivaram Brocade Saree", price: "₹95,000 – ₹1,60,000", image: "/images/royal-kanjivaram-bridal-saree.jpg", description: "Intricate temple brocade with pure gold Zari Korvai." },
  ],
};

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
  const [selectedWeave, setSelectedWeave] = useState<FabricWeaveTile | null>(null);

  const handleTileClick = (weave: FabricWeaveTile) => {
    setSelectedWeave(weave);
    if (onSelectCategory) {
      onSelectCategory(weave.categoryTag);
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

      {/* ════════════════ VIEW 2: REVEALED SHOP BY CATEGORY FULL SCREEN ════════════════ */}
      <div
        className={`fixed inset-0 z-40 bg-[#05084a]/95 backdrop-blur-2xl flex flex-col items-center justify-start px-6 pb-6 pt-28 md:pt-32 md:px-10 overflow-y-auto transition-all duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col min-h-full">
          {/* Top Header Bar with BACK & CLOSE Buttons */}
          <div className="flex items-center justify-between border-b border-white/20 pb-5 mb-8 pt-2">
            {/* Left Side: BACK Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 px-6 py-2.5 bg-white/10 hover:bg-white text-white hover:text-[#05084a] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full border border-white/30 shadow-lg shrink-0"
            >
              <ArrowLeft size={16} />
              <span>BACK</span>
            </button>

            {/* Center Section Title */}
            <div className="text-center">
              <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#ffd700] uppercase block font-semibold mb-1">
                EXQUISITE WEAVES
              </span>
              <h3 className="text-2xl md:text-4xl font-bold font-serif tracking-wider text-white uppercase">
                Shop By Category
              </h3>
              <p className="text-[11px] md:text-xs text-white/70 tracking-widest uppercase mt-1">
                Handcrafted Heirloom Weaves — Select any category to explore
              </p>
            </div>

            {/* Right Side: CLOSE X Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/30 transition-colors shrink-0"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* 18-Tile Fabric Weaves Full-Screen Grid (Shop by Category) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 my-auto pb-10">
            {FABRIC_WEAVES.map((weave) => (
              <div
                key={weave.id}
                onClick={() => handleTileClick(weave)}
                className="group flex flex-col items-center text-center cursor-pointer bg-[#ffffff] p-3 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-gray-100 shadow-inner">
                  <Image
                    src={weave.image}
                    alt={weave.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <p className="text-xs sm:text-sm font-serif font-semibold text-[#111111] group-hover:text-[#8B0000] tracking-wide leading-tight line-clamp-2 mt-1">
                  {weave.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════ FULL-SCREEN CATEGORY SAREE GALLERY OVERLAY ════════════════ */}
      {selectedWeave && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex flex-col px-4 pb-4 pt-28 md:pt-32 md:px-8 overflow-y-auto animate-fadeIn select-none">
          {/* Top Bar with BACK TO CATEGORIES & Close X Button */}
          <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between border-b border-white/20 pb-4 mb-6 pt-2">
            <button
              onClick={() => setSelectedWeave(null)}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#ffd700] text-[#05084a] text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ArrowLeft size={16} />
              <span>BACK TO CATEGORIES</span>
            </button>

            <div className="text-center">
              <span className="text-[10px] tracking-[0.35em] text-[#ffd700] uppercase block font-semibold mb-0.5">
                EXQUISITE SAREE COLLECTION
              </span>
              <h2 className="text-xl md:text-3xl font-serif text-white uppercase tracking-wide">
                {selectedWeave.title} Sarees
              </h2>
            </div>

            <button
              onClick={() => setSelectedWeave(null)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/30 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Saree Products Small Dense Grid View */}
          <div className="max-w-[1440px] w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 md:gap-4 pb-12">
            {(WEAVE_SAREES[selectedWeave.id] || WEAVE_SAREES["fw-01"]).map((item) => (
              <div
                key={item.id}
                onClick={onOpenInquiry}
                className="group cursor-pointer bg-white/5 border border-white/15 hover:border-[#ffd700] rounded-xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
              >
                {/* Clean Small Grid Aspect 3/4 Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05084a] via-transparent to-black/20" />
                  
                  <span className="absolute top-2 left-2 bg-[#800020] text-white text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded shadow-sm">
                    {selectedWeave.title}
                  </span>
                </div>

                {/* Saree Details & Action */}
                <div className="p-3 flex flex-col justify-between flex-1 text-left bg-gradient-to-b from-[#05084a]/90 to-[#030536]">
                  <div>
                    <h3 className="text-xs md:text-sm font-serif text-white group-hover:text-[#ffd700] transition-colors leading-snug line-clamp-1 font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-white/70 font-light mt-1 leading-tight line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] text-white/50 block uppercase tracking-wider">PRICE RANGE</span>
                      <span className="text-xs font-semibold text-[#ffd700] tracking-wide">{item.price}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenInquiry) onOpenInquiry();
                      }}
                      className="px-2.5 py-1.5 bg-[#ffd700] hover:bg-white text-[#05084a] text-[9px] uppercase tracking-wider font-bold rounded shadow-sm transition-all flex items-center gap-1"
                    >
                      <span>INQUIRE</span>
                      <ArrowRight size={10} />
                    </button>
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
