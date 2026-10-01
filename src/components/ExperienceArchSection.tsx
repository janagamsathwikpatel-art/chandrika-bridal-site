"use client";

import { useState, useEffect, useRef } from "react";
import { X, Sparkles, ShoppingBag, Eye, ArrowRight } from "lucide-react";

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
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedSaree, setSelectedSaree] = useState<SareeItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ["ALL", "Kanchipuram", "Banarasi", "Paithani", "Chanderi", "Patola", "Tussar"];

  // Open doors on scroll when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDoorsOpen(true);
        } else {
          setDoorsOpen(false);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems = SAREE_EXPERIENCE_ITEMS.filter(
    (item) => selectedFilter === "ALL" || item.category === selectedFilter
  );

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          AUTHENTIC STITCHING STORIES ARCH PORTAL SECTION (EXACT TO SCREENSHOT)
      ───────────────────────────────────────────────────────────────── */}
      <section
        id="experience"
        ref={sectionRef}
        className="relative w-screen overflow-hidden flex flex-col items-center justify-end"
        style={{
          height: "100vh",
          minHeight: "720px",
          backgroundColor: "#b4b4b2",
        }}
      >
        {/* Background Wall Image (Desktop wall with arch cutout) */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <img
            src="/images/arch-background.webp"
            alt="Experience Wall Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Interior Deep Blue Background & Saree World Behind Doors */}
        <div
          className="absolute inset-0 w-full h-full z-0 flex items-center justify-center"
          style={{
            backgroundColor: "#05084a",
            backgroundImage: "radial-gradient(circle at 50% 50%, #0a116b 0%, #05084a 60%, #02042b 100%)",
          }}
        >
          {/* Subtle ambient preview of sarees behind the arch */}
          <div
            className={`w-full max-w-4xl px-8 flex justify-center items-center gap-6 transition-opacity duration-1000 ${
              doorsOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center text-white select-none">
              <span className="text-[11px] tracking-[0.35em] text-white/80 uppercase block mb-2 font-medium">
                DISCOVER OUR WORLD
              </span>
              <h3
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  letterSpacing: "0.02em",
                  lineHeight: "1",
                }}
                className="text-white uppercase mb-4"
              >
                HANDLOOM SAREE COUTURE
              </h3>
              <p className="text-[11px] tracking-[0.2em] text-white/80 uppercase max-w-md mx-auto mb-6">
                Explore our private curation of ancestral handloom drapes.
              </p>
              <button
                onClick={() => setExperienceModalOpen(true)}
                className="px-8 py-3 bg-white text-[#05084a] text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#ebe9e5] transition-colors shadow-2xl"
              >
                OPEN FULL COLLECTION
              </button>
            </div>
          </div>
        </div>

        {/* ── Sliding Blue Arch Doors ── */}
        <div
          className="absolute inset-0 w-full h-full z-20 flex justify-center items-end pointer-events-none overflow-hidden"
        >
          {/* Left Door */}
          <div
            className="h-full flex items-end justify-end transition-transform duration-[1800ms] ease-in-out"
            style={{
              width: "50%",
              transform: doorsOpen ? "translateX(-100%)" : "translateX(0%)",
            }}
          >
            <img
              src="/images/door-left.png"
              alt="Left Blue Door"
              className="h-full object-contain object-bottom"
              style={{ maxHeight: "92vh" }}
            />
          </div>

          {/* Right Door */}
          <div
            className="h-full flex items-end justify-start transition-transform duration-[1800ms] ease-in-out"
            style={{
              width: "50%",
              transform: doorsOpen ? "translateX(100%)" : "translateX(0%)",
            }}
          >
            <img
              src="/images/door-right.png"
              alt="Right Blue Door"
              className="h-full object-contain object-bottom"
              style={{ maxHeight: "92vh", marginLeft: "-2px" }}
            />
          </div>
        </div>

        {/* ── Overlay Text Centerpiece (Exact to Reference Screenshot) ── */}
        <div
          className={`absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 select-none transition-all duration-700 pointer-events-auto ${
            doorsOpen ? "opacity-30 hover:opacity-100" : "opacity-100"
          }`}
        >
          {/* Small Top Label: EXPERIENCE */}
          <span
            style={{
              fontSize: "clamp(12px, 1.4vw, 16px)",
              letterSpacing: "0.35em",
              fontWeight: 500,
              color: "#ffffff",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            EXPERIENCE
          </span>

          {/* Bold Condensed Title: STITCHING STORIES */}
          <h2
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(42px, 6.8vw, 88px)",
              letterSpacing: "0.02em",
              lineHeight: "0.95",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: 0,
              padding: 0,
              marginBottom: "36px",
              textShadow: "0 4px 24px rgba(0,0,0,0.8)",
            }}
          >
            STITCHING STORIES
          </h2>

          {/* Clean Outlined Button: EXPERIENCE OUR WORLD */}
          <button
            onClick={() => {
              setDoorsOpen(true);
              setExperienceModalOpen(true);
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 40px",
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
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.textShadow = "0 1px 6px rgba(0,0,0,0.7)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            EXPERIENCE OUR WORLD
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          IMMERSIVE SAREE IMAGE COLLECTION MODAL
          (OPENS WHEN 'EXPERIENCE OUR WORLD' IS CLICKED)
      ───────────────────────────────────────────────────────────────── */}
      {experienceModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex flex-col justify-start items-center p-4 md:p-8 animate-fadeIn"
          style={{ animationDuration: "0.3s" }}
        >
          <div className="w-full max-w-[1400px] bg-[#fbfaf8] text-[#201f1f] rounded-sm shadow-2xl relative my-auto p-6 md:p-12 border border-[#e8e6e1]">
            {/* Close Button */}
            <button
              onClick={() => setExperienceModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 transition-colors text-[#201f1f] z-20 cursor-pointer"
              aria-label="Close"
            >
              <X size={26} />
            </button>

            {/* Header */}
            <div className="mb-10 pb-6 border-b border-[#201f1f]/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-[#8B0000]" />
                <span className="text-[10px] tracking-[0.35em] text-[#767573] uppercase font-semibold">
                  Experience Our World • Saree Collection
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
                    Ancestral Indian Handlooms • Kanchipuram, Banarasi, Paithani, Chanderi & Patola
                  </p>
                </div>

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
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe9e5]">
                    <img
                      src={saree.image}
                      alt={saree.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#05084a] text-white text-[9px] tracking-widest px-3 py-1 uppercase">
                      {saree.category}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="px-5 py-2.5 bg-white text-[#05084a] text-[10px] tracking-widest uppercase font-semibold flex items-center gap-2 shadow-lg">
                        <Eye size={13} /> EXAMINE WEAVE
                      </span>
                    </div>
                  </div>

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
                          setExperienceModalOpen(false);
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
                  setExperienceModalOpen(false);
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
        <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
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
                      setExperienceModalOpen(false);
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
