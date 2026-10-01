"use client";

import { useState, useRef } from "react";
import { ArrowRight, X, Sparkles, MapPin, Clock, Eye, ShoppingBag, Heart } from "lucide-react";

export interface SareeItem {
  id: string;
  name: string;
  category: string;
  weave: string;
  origin: string;
  weaveTime: string;
  price: string;
  zari: string;
  image: string;
  hoverImage: string;
  tag?: string;
  description: string;
}

const SAREE_CATALOG: SareeItem[] = [
  {
    id: "saree-01",
    name: "AARUSHI KORVAI KANJIVARAM",
    category: "Kanchipuram",
    weave: "Korvai Three-Shuttle Pit Loom",
    origin: "Kanchipuram, Tamil Nadu",
    weaveTime: "75 Days Hand-Woven",
    price: "₹ 48,000",
    zari: "Pure 24K Gold Dipped Real Zari",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    tag: "BRIDAL HEIRLOOM",
    description: "Handcrafted using the ancient Korvai interlocking technique. Gopuram temple motifs flow into a weighty mulberry silk body."
  },
  {
    id: "saree-02",
    name: "MEERA SHIKARGAH BANARASI",
    category: "Banarasi",
    weave: "Kadhwa Real Zari Floral Jaal",
    origin: "Varanasi, Uttar Pradesh",
    weaveTime: "90 Days Master Loom",
    price: "₹ 56,000",
    zari: "Authentic Silver & Gold Zari",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1610030469668-93530c17b58f?q=80&w=1200&auto=format&fit=crop",
    tag: "SIGNATURE BROCADE",
    description: "Pure Katan silk embellished with intricate royal hunting motifs (Shikargah), hand-locked with pure metallic threads."
  },
  {
    id: "saree-03",
    name: "SITA TAPESTRY PAITHANI",
    category: "Paithani",
    weave: "Oblique Square Tapestry Weave",
    origin: "Paithan, Maharashtra",
    weaveTime: "60 Days Handloom",
    price: "₹ 42,000",
    zari: "Solid Gold Tissue Peacock Pallu",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    tag: "ROYAL HERITAGE",
    description: "Distinguished by kaleidoscopic peacock motifs along the pallu and traditional oblique borders on rich jewel-toned silk."
  },
  {
    id: "saree-04",
    name: "TARA METALLIC CHANDERI",
    category: "Chanderi",
    weave: "Gossamer Silk Tissue Warp",
    origin: "Chanderi, Madhya Pradesh",
    weaveTime: "45 Days Hand-Woven",
    price: "₹ 24,500",
    zari: "Featherweight Micro-Gold Zari",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1583391733975-dd83d95c5567?q=80&w=1200&auto=format&fit=crop",
    tag: "SHEER OPULENCE",
    description: "Airy translucent drape infused with micro-zari threads and heritage ashrafi coin butis for subtle luminescence."
  },
  {
    id: "saree-05",
    name: "LAKSHMI DOUBLE IKAT PATOLA",
    category: "Patola",
    weave: "Resist-Dyed Silk Double Ikat",
    origin: "Patan, Gujarat",
    weaveTime: "120 Days Master Artisans",
    price: "₹ 1,35,000",
    zari: "Pure Gold Border Accents",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    tag: "MUSEUM HEIRLOOM",
    description: "Mathematical precision meets pure silk dye resistance. Both warp and weft are dyed individually prior to hand weaving."
  },
  {
    id: "saree-06",
    name: "RADHA WILD TUSSAR BOTANICAL",
    category: "Tussar",
    weave: "Handspun Wild Silk Weave",
    origin: "Bhagalpur, Bihar",
    weaveTime: "50 Days Handloom",
    price: "₹ 28,000",
    zari: "Beaten Copper & Muted Gold",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    tag: "NATURAL DYED",
    description: "Textured wild tussar silk imbued with botanical extracts, finished with broad antique metallic borders."
  }
];

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
}

export default function ExperienceArchSection({ onOpenInquiry }: ExperienceArchSectionProps) {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedSaree, setSelectedSaree] = useState<SareeItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const collectionRef = useRef<HTMLDivElement>(null);

  const categories = ["ALL", "Kanchipuram", "Banarasi", "Paithani", "Chanderi", "Patola", "Tussar"];

  const filteredSarees = SAREE_CATALOG.filter(
    (s) => selectedCategory === "ALL" || s.category === selectedCategory
  );

  const handleOpenExperience = () => {
    setIsExperienceOpen(true);
    setTimeout(() => {
      collectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="experience" className="relative w-full overflow-hidden bg-[#e9e7e2]">
      {/* ─────────────────── STITCHING STORIES ARCHWAY SECTION ─────────────────── */}
      <div className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-end items-center px-4 pt-16 md:pt-24 pb-0 bg-gradient-to-b from-[#dfdeda] via-[#e5e3de] to-[#d6d4ce]">
        
        {/* Stone Texture / Neoclassical Wall Accents */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(255,255,255,0.7) 0%, transparent 70%), linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: "100% 100%, 40px 40px, 40px 40px"
          }}
        />

        {/* Sculpted Stone Arch Molding Surround */}
        <div className="relative w-full max-w-[860px] flex flex-col items-center">
          
          {/* Outer Carved Stone Arch Frame (Replicating Screenshot Architecture) */}
          <div className="w-full pt-4 px-3 md:px-5 pb-0 bg-[#d9d7d1] rounded-t-[340px] md:rounded-t-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] border-t-[8px] border-x-[8px] md:border-t-[14px] md:border-x-[14px] border-[#c4c1b9]">
            
            {/* Inner Recessed Stone Ledge */}
            <div className="w-full pt-3 px-2 md:px-4 pb-0 bg-[#c8c5bd] rounded-t-[310px] md:rounded-t-[410px] border-t-[4px] border-x-[4px] border-[#b8b5ac]">
              
              {/* The Iconic Deep Cobalt Blue Arch Portal */}
              <div 
                className="w-full h-[540px] md:h-[660px] rounded-t-[280px] md:rounded-t-[380px] flex flex-col items-center justify-center text-center px-6 md:px-12 relative overflow-hidden transition-all duration-700 shadow-2xl"
                style={{
                  backgroundColor: "#080c52", // Deep royal blue matching the screenshot
                  backgroundImage: "radial-gradient(ellipse at 50% 40%, #0d1574 0%, #060945 100%)"
                }}
              >
                {/* Subtle Ambient Vignette Inside Arch */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />

                {/* Subtitle */}
                <span className="text-[12px] md:text-[14px] tracking-[0.4em] text-white/90 uppercase font-light mb-3 select-none">
                  EXPERIENCE
                </span>

                {/* Bold Heading: STITCHING STORIES */}
                <h2 className="text-[34px] sm:text-[46px] md:text-[62px] font-black tracking-[0.06em] text-white uppercase leading-[0.95] mb-8 select-none drop-shadow-md">
                  STITCHING STORIES
                </h2>

                {/* The Outlined Button: EXPERIENCE OUR WORLD */}
                <button
                  onClick={handleOpenExperience}
                  className="group relative inline-flex items-center justify-center px-8 md:px-12 py-3.5 md:py-4 border border-white text-white text-[11px] md:text-[12px] tracking-[0.28em] uppercase font-medium transition-all duration-400 hover:bg-white hover:text-[#080c52] shadow-sm hover:shadow-lg active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    EXPERIENCE OUR WORLD
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                {/* Preview Hint */}
                <p className="mt-8 text-[10px] tracking-[0.25em] text-white/60 uppercase max-w-sm">
                  Step inside the world of generational handloom silk sarees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────── SAREE COLLECTION WORLD (Revealed on Experience) ─────────────────── */}
      <div 
        ref={collectionRef}
        className={`w-full bg-[#fbfaf8] transition-all duration-700 ease-in-out ${
          isExperienceOpen ? "opacity-100 py-24 md:py-36" : "hidden opacity-0 py-0"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-14">
          
          {/* Header of the Experience World */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#201f1f]/15">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-[#8B0000]" />
                <span className="text-[10px] tracking-[0.35em] text-[#767573] uppercase font-semibold">
                  Experience Our World • Handcrafted Sarees
                </span>
              </div>
              <h3 className="title text-[#201f1f]">
                STITCHING STORIES <br />
                SAREE COLLECTION
              </h3>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-3">
              <p className="text-[11px] md:text-[12px] tracking-widest text-[#595955] max-w-md uppercase leading-relaxed text-left md:text-right">
                Every saree tells a story — handwoven with generational heritage, real gold zari, and pure silk from master craft clusters across India.
              </p>
              <button
                onClick={() => setIsExperienceOpen(false)}
                className="text-[10px] tracking-widest text-[#767573] hover:text-[#201f1f] uppercase underline flex items-center gap-1.5"
              >
                <X size={12} /> CLOSE EXPERIENCE VIEW
              </button>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-14 border-b border-[#e8e6e1] pb-4 text-[11px] tracking-widest font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`transition-all uppercase pb-2 relative ${
                  selectedCategory === cat
                    ? "text-[#080c52] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#080c52]"
                    : "text-[#767573] hover:text-[#201f1f]"
                }`}
              >
                {cat} {cat === "ALL" ? `(${SAREE_CATALOG.length})` : ""}
              </button>
            ))}
          </div>

          {/* Saree Collection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredSarees.map((saree) => (
              <div
                key={saree.id}
                className="group flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredId(saree.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedSaree(saree)}
              >
                {/* Image Frame with Double-Image Hover Swap */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe9e5] border border-[#e8e6e1] shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={saree.image}
                    alt={saree.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      hoveredId === saree.id ? "opacity-0 scale-105" : "opacity-100 scale-100"
                    }`}
                  />
                  <img
                    src={saree.hoverImage}
                    alt={`${saree.name} detail view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      hoveredId === saree.id ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />

                  {/* Badges */}
                  {saree.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="block text-[9px] tracking-[0.25em] bg-[#080c52] text-white px-3 py-1 uppercase shadow-sm">
                        {saree.tag}
                      </span>
                    </div>
                  )}

                  {/* Hover Quick Action Overlay */}
                  <div
                    className={`absolute inset-0 z-10 flex flex-col justify-end p-5 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 ${
                      hoveredId === saree.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenInquiry?.();
                      }}
                      className="w-full py-3 bg-white text-[#080c52] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#080c52] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow"
                    >
                      <ShoppingBag size={13} /> INQUIRE & SHOP
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[13px] md:text-[14px] tracking-[0.16em] font-medium text-[#201f1f] uppercase">
                      {saree.name}
                    </h4>
                    <span className="text-[12px] tracking-widest text-[#080c52] font-semibold">
                      {saree.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[9px] tracking-widest text-[#767573] uppercase">
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> {saree.origin}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {saree.weaveTime}
                    </span>
                  </div>

                  <p className="text-[10px] tracking-wider text-[#767573] uppercase mt-1 line-clamp-2">
                    {saree.description}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#e8e6e1]">
                    <span className="text-[9px] tracking-widest text-[#8B0000] uppercase font-semibold">
                      {saree.zari}
                    </span>
                    <span className="text-[10px] tracking-widest text-[#201f1f] uppercase font-semibold flex items-center gap-1 group-hover:underline">
                      VIEW DRAPE <Eye size={11} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commission CTA banner */}
          <div className="mt-20 p-8 md:p-12 bg-[#080c52] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <span className="text-[9px] tracking-[0.3em] text-white/70 uppercase block mb-1">
                Artisan Collaboration
              </span>
              <h4 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase mb-2">
                CREATE YOUR BESPOKE STORY
              </h4>
              <p className="text-[11px] tracking-wider text-white/80 uppercase leading-relaxed">
                Connect with our weavers to customize heirloom bridal sarees tailored with personal family emblems and woven zari weights.
              </p>
            </div>

            <button
              onClick={onOpenInquiry}
              className="whitespace-nowrap px-8 py-3.5 bg-white text-[#080c52] hover:bg-white/90 transition-all text-[10px] tracking-[0.25em] uppercase font-semibold shadow-md"
            >
              BOOK PRIVATE APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      {/* Saree Detail Modal */}
      {selectedSaree && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#fbfaf8] w-full max-w-3xl p-6 md:p-10 relative shadow-2xl border border-[#e8e6e1] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSaree(null)}
              className="absolute top-6 right-6 text-[#201f1f] hover:opacity-60 text-lg font-bold p-2"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
              <div className="aspect-[3/4] overflow-hidden bg-[#ebe9e5] rounded-sm">
                <img
                  src={selectedSaree.image}
                  alt={selectedSaree.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[9px] tracking-[0.3em] text-[#080c52] uppercase font-semibold block mb-1">
                    {selectedSaree.category} Heirloom Collection
                  </span>
                  <h3 className="text-xl font-light tracking-[0.15em] text-[#201f1f] uppercase mb-2">
                    {selectedSaree.name}
                  </h3>
                  <div className="text-lg font-semibold text-[#080c52] mb-4">
                    {selectedSaree.price}
                  </div>

                  <div className="space-y-2 text-[10px] tracking-wider text-[#595955] uppercase mb-6 bg-[#f4f3f0] p-4 border border-[#e8e6e1]">
                    <p><strong className="text-[#201f1f]">Origin:</strong> {selectedSaree.origin}</p>
                    <p><strong className="text-[#201f1f]">Weave Technique:</strong> {selectedSaree.weave}</p>
                    <p><strong className="text-[#201f1f]">Weaving Time:</strong> {selectedSaree.weaveTime}</p>
                    <p><strong className="text-[#201f1f]">Zari Quality:</strong> {selectedSaree.zari}</p>
                    <p><strong className="text-[#201f1f]">Fabric:</strong> 100% Pure Certified Mulberry Silk</p>
                  </div>

                  <p className="text-[11px] leading-relaxed text-[#595955] uppercase tracking-wider mb-6">
                    {selectedSaree.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setSelectedSaree(null);
                      onOpenInquiry?.();
                    }}
                    className="w-full py-3.5 bg-[#080c52] text-white hover:bg-black transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                  >
                    INQUIRE & SCHEDULE PRIVATE FITTING
                  </button>
                  <button
                    onClick={() => setSelectedSaree(null)}
                    className="w-full py-2.5 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                  >
                    RETURN TO COLLECTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
