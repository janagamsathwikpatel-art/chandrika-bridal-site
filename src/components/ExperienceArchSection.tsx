"use client";

import { useState } from "react";
import { X, ArrowRight, Sparkles, ShoppingBag, Eye, Heart } from "lucide-react";

interface SareeItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  weave: string;
  price: string;
  image: string;
  hoverImage: string;
  description: string;
}

const SAREE_EXPERIENCE_ITEMS: SareeItem[] = [
  {
    id: "saree-01",
    name: "AARUSHI KANJIVARAM KORVAI",
    category: "Kanchipuram",
    origin: "Kanchipuram, Tamil Nadu",
    weave: "Interlocked Pit Loom · 24K Gold Real Zari",
    price: "₹ 48,000",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    description: "Handcrafted pure mulberry silk with traditional temple border and three-shuttle korvai technique.",
  },
  {
    id: "saree-02",
    name: "MEERA BANARASI SHIKARGAH",
    category: "Banarasi",
    origin: "Varanasi, Uttar Pradesh",
    weave: "Kadhwa Hand-Locked Floral Jaal",
    price: "₹ 54,000",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1610030469668-93530c17b58f?q=80&w=1200&auto=format&fit=crop",
    description: "Katan silk brocade with master weaver zari jaal depicting heritage royal hunting scenes.",
  },
  {
    id: "saree-03",
    name: "SITA PAITHANI PEACOCK PALLU",
    category: "Paithani",
    origin: "Paithan, Maharashtra",
    weave: "Oblique Square · Tapestry Weave",
    price: "₹ 42,000",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description: "Pure crimson silk woven with golden tissue pallu and kaleidoscopic resham inlay peacocks.",
  },
  {
    id: "saree-04",
    name: "TARA METALLIC CHANDERI",
    category: "Chanderi",
    origin: "Chanderi, Madhya Pradesh",
    weave: "Featherweight Silk Zari Warp",
    price: "₹ 24,500",
    image: "https://images.unsplash.com/photo-1583391733975-dd83d95c5567?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop",
    description: "Gossamer sheer handloom silk with metallic micro-zari and hand-beaten gold butis.",
  },
  {
    id: "saree-05",
    name: "LAKSHMI PATAN PATOLA",
    category: "Patola",
    origin: "Patan, Gujarat",
    weave: "Double Ikat Silk · 8 Months Weaving",
    price: "₹ 1,15,000",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    description: "Sacred geometric resist-dye double ikat woven by national award-winning hereditary master weavers.",
  },
  {
    id: "saree-06",
    name: "RAW TUSSAR BOTANICAL SILK",
    category: "Tussar",
    origin: "Bhagalpur, Bihar",
    weave: "Wild Tussar · Vegetable Dyed",
    price: "₹ 26,000",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    description: "Rich organic textured tussar silk finished with antique bronze-gold zari border.",
  },
];

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
}

export default function ExperienceArchSection({ onOpenInquiry }: ExperienceArchSectionProps) {
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedSaree, setSelectedSaree] = useState<SareeItem | null>(null);

  const categories = ["ALL", "Kanchipuram", "Banarasi", "Paithani", "Chanderi", "Patola", "Tussar"];

  const filteredItems = SAREE_EXPERIENCE_ITEMS.filter(
    (item) => selectedFilter === "ALL" || item.category === selectedFilter
  );

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          ARCHITECTURAL ARCH PORTAL SECTION (MATCHING SCREENSHOT)
      ───────────────────────────────────────────────────────────────── */}
      <section
        id="experience-arch"
        className="relative w-full overflow-hidden flex flex-col justify-end items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#d5d5d3",
          backgroundImage: `
            radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.45) 0%, transparent 70%),
            linear-gradient(to bottom, #d8d8d6 0%, #cacac7 50%, #b8b8b5 100%)
          `,
          paddingTop: "60px",
          paddingBottom: "0px",
        }}
      >
        {/* Subtle stone texture simulation overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #888 1px, transparent 1px), radial-gradient(circle at 75% 75%, #444 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Top Vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

        {/* Architectural Stone Arch Opening */}
        <div
          className="relative z-10 w-full max-w-[960px] mx-auto flex flex-col items-center justify-end px-4"
          style={{
            minHeight: "82vh",
          }}
        >
          {/* Outer molded stone arch frame */}
          <div
            className="w-full flex flex-col items-center justify-center relative"
            style={{
              height: "78vh",
              minHeight: "560px",
              maxHeight: "780px",
              borderRadius: "440px 440px 0 0",
              background: "linear-gradient(to bottom, #bcbbb8 0%, #a8a7a4 100%)",
              padding: "16px 16px 0 16px",
              boxShadow: `
                0 -10px 40px rgba(0,0,0,0.18),
                inset 0 4px 12px rgba(255,255,255,0.6),
                inset 0 -4px 12px rgba(0,0,0,0.3)
              `,
            }}
          >
            {/* Inner Stone Molding Rim */}
            <div
              className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
              style={{
                borderRadius: "420px 420px 0 0",
                background: "linear-gradient(to bottom, #9f9e9a 0%, #8e8d89 100%)",
                padding: "10px 10px 0 10px",
                boxShadow: "inset 0 6px 16px rgba(0,0,0,0.45)",
              }}
            >
              {/* ── THE DEEP NAVY / ROYAL BLUE ARCH PORTAL (EXACT LIKE SCREENSHOT) ── */}
              <div
                className="w-full h-full flex flex-col items-center justify-center text-center relative px-6 md:px-12"
                style={{
                  borderRadius: "410px 410px 0 0",
                  backgroundColor: "#05084a",
                  backgroundImage: `
                    radial-gradient(circle at 50% 35%, #080d69 0%, #05084a 55%, #030536 100%)
                  `,
                  boxShadow: `
                    inset 0 12px 35px rgba(0,0,0,0.7),
                    inset 0 -12px 35px rgba(0,0,0,0.5)
                  `,
                }}
              >
                {/* Subtle light shimmer within the blue portal */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background: "radial-gradient(ellipse at 50% 30%, rgba(120, 150, 255, 0.35) 0%, transparent 70%)",
                  }}
                />

                {/* Content Inside the Arch */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center select-none py-8">
                  {/* Small Header Tag: EXPERIENCE */}
                  <span
                    style={{
                      fontSize: "clamp(12px, 1.4vw, 15px)",
                      letterSpacing: "0.35em",
                      fontWeight: 500,
                      color: "#ffffff",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "16px",
                      opacity: 0.95,
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    EXPERIENCE
                  </span>

                  {/* Bold Hero Wordmark: STITCHING STORIES */}
                  <h2
                    style={{
                      fontFamily: "'Anton', 'Impact', sans-serif",
                      fontSize: "clamp(46px, 7vw, 92px)",
                      letterSpacing: "0.02em",
                      lineHeight: "0.95",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      margin: 0,
                      padding: 0,
                      marginBottom: "38px",
                      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                    }}
                  >
                    STITCHING STORIES
                  </h2>

                  {/* Clean Outlined Button: EXPERIENCE OUR WORLD */}
                  <button
                    onClick={() => setExperienceOpen(true)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "16px 36px",
                      border: "1.5px solid #ffffff",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      fontSize: "clamp(11px, 1.1vw, 13px)",
                      letterSpacing: "0.26em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.color = "#05084a";
                      e.currentTarget.style.textShadow = "none";
                      e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.textShadow = "0 1px 4px rgba(0,0,0,0.5)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    EXPERIENCE OUR WORLD
                  </button>

                  {/* Subtle Subtitle */}
                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "10px",
                      letterSpacing: "0.25em",
                      color: "rgba(255,255,255,0.65)",
                      textTransform: "uppercase",
                    }}
                  >
                    Click to explore the handcrafted saree collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          IMMERSIVE SAREE IMAGE COLLECTION MODAL / EXPERIENCE VIEW
          (OPENS WHEN USER CLICKS 'EXPERIENCE OUR WORLD')
      ───────────────────────────────────────────────────────────────── */}
      {experienceOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex flex-col justify-start items-center p-4 md:p-8 animate-fadeIn"
          style={{ animationDuration: "0.3s" }}
        >
          <div
            className="w-full max-w-[1400px] bg-[#fbfaf8] text-[#201f1f] rounded-sm shadow-2xl relative my-auto p-6 md:p-12 border border-[#e8e6e1]"
          >
            {/* Close Button */}
            <button
              onClick={() => setExperienceOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 transition-colors text-[#201f1f] z-20 cursor-pointer"
              aria-label="Close Experience"
            >
              <X size={26} />
            </button>

            {/* Header of Saree Experience */}
            <div className="mb-10 pb-6 border-b border-[#201f1f]/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-[#8B0000]" />
                <span className="text-[10px] tracking-[0.35em] text-[#767573] uppercase font-semibold">
                  Experience Our World • Handcrafted Sarees
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <h3
                    style={{
                      fontFamily: "'Anton', 'Impact', sans-serif",
                      fontSize: "clamp(36px, 5vw, 64px)",
                      letterSpacing: "0.02em",
                      lineHeight: "0.95",
                    }}
                    className="text-[#201f1f] uppercase"
                  >
                    STITCHING STORIES · SAREE COLLECTION
                  </h3>
                  <p className="text-[11px] tracking-widest text-[#767573] uppercase mt-2">
                    Every thread tells an ancestral narrative woven by master artisans.
                  </p>
                </div>

                {/* Direct Link to /experience */}
                <a
                  href="/experience"
                  className="px-6 py-2.5 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white transition-all duration-300 text-[10px] tracking-[0.22em] uppercase font-medium"
                >
                  FULL EXPERIENCE PAGE →
                </a>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[#e8e6e1]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-1.5 text-[10px] tracking-widest uppercase transition-all rounded-full ${
                    selectedFilter === cat
                      ? "bg-[#05084a] text-white font-semibold shadow-sm"
                      : "bg-[#ebe9e5] text-[#595955] hover:bg-[#dfdcd6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* High-Resolution Saree Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((saree) => (
                <div
                  key={saree.id}
                  className="group flex flex-col bg-[#f4f3f0] border border-[#e8e6e1] transition-all duration-500 hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedSaree(saree)}
                >
                  {/* Image Card with Zoom Hover */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe9e5]">
                    <img
                      src={saree.image}
                      alt={saree.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#05084a] text-white text-[9px] tracking-widest px-3 py-1 uppercase">
                      {saree.category}
                    </div>

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="px-5 py-2.5 bg-white text-[#05084a] text-[10px] tracking-widest uppercase font-semibold flex items-center gap-2 shadow-lg">
                        <Eye size={13} /> EXAMINE WEAVE
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-[13px] font-semibold tracking-wider text-[#201f1f] uppercase">
                          {saree.name}
                        </h4>
                        <span className="text-[12px] font-bold text-[#05084a]">
                          {saree.price}
                        </span>
                      </div>
                      <p className="text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                        {saree.origin}
                      </p>
                      <p className="text-[9px] tracking-wider text-[#a09e99] uppercase mb-3">
                        {saree.weave}
                      </p>
                      <p className="text-[10px] text-[#595955] uppercase leading-relaxed line-clamp-2">
                        {saree.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#dfdcd6] flex justify-between items-center text-[10px] tracking-widest">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExperienceOpen(false);
                          onOpenInquiry?.();
                        }}
                        className="text-[#05084a] font-semibold hover:underline uppercase flex items-center gap-1"
                      >
                        <ShoppingBag size={12} /> INQUIRE & DRAPE
                      </button>
                      <span className="text-[#767573]">DETAILS →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Modal CTA */}
            <div className="mt-12 pt-8 border-t border-[#e8e6e1] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[11px] tracking-widest text-[#767573] uppercase">
                Looking for a custom heirloom bridal weave or private appointment?
              </p>
              <button
                onClick={() => {
                  setExperienceOpen(false);
                  onOpenInquiry?.();
                }}
                className="px-8 py-3 bg-[#05084a] text-white hover:bg-black transition-colors text-[10px] tracking-[0.25em] uppercase font-semibold"
              >
                REQUEST BESPOKE FITTING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────
          SINGLE SAREE DETAIL LIGHTBOX
      ───────────────────────────────────────────────────────────────── */}
      {selectedSaree && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="bg-[#fbfaf8] w-full max-w-2xl p-6 md:p-8 relative shadow-2xl border border-[#e8e6e1]">
            <button
              onClick={() => setSelectedSaree(null)}
              className="absolute top-4 right-4 p-2 text-[#201f1f] hover:opacity-60 cursor-pointer"
            >
              <X size={22} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="aspect-[3/4] overflow-hidden bg-[#ebe9e5]">
                <img
                  src={selectedSaree.image}
                  alt={selectedSaree.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[9px] tracking-[0.3em] text-[#05084a] uppercase font-semibold block mb-1">
                    {selectedSaree.category} Heirloom Saree
                  </span>
                  <h4 className="text-xl font-light tracking-wide text-[#201f1f] uppercase mb-2">
                    {selectedSaree.name}
                  </h4>
                  <p className="text-base font-bold text-[#05084a] mb-4">
                    {selectedSaree.price}
                  </p>

                  <div className="space-y-1.5 text-[10px] tracking-wider text-[#595955] uppercase mb-4 bg-[#f4f3f0] p-3 border border-[#e8e6e1]">
                    <p><strong>Origin:</strong> {selectedSaree.origin}</p>
                    <p><strong>Weave Technique:</strong> {selectedSaree.weave}</p>
                    <p><strong>Purity:</strong> 100% Pure Mulberry Silk Mark Certified</p>
                  </div>

                  <p className="text-[11px] text-[#595955] uppercase leading-relaxed tracking-wider mb-4">
                    {selectedSaree.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedSaree(null);
                      setExperienceOpen(false);
                      onOpenInquiry?.();
                    }}
                    className="w-full py-3 bg-[#05084a] text-white hover:bg-black transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                  >
                    BOOK PRIVATE ATELIER VIEWING
                  </button>
                  <button
                    onClick={() => setSelectedSaree(null)}
                    className="w-full py-2 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                  >
                    BACK TO GALLERY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
