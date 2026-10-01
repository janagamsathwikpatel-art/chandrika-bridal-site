"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Sparkles, Eye, ShoppingBag, ArrowLeft } from "lucide-react";

interface SareeItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  weave: string;
  price: string;
  image: string;
  description: string;
}

const SAREES: SareeItem[] = [
  {
    id: "saree-01",
    name: "AARUSHI KANJIVARAM KORVAI",
    category: "Kanchipuram",
    origin: "Kanchipuram, Tamil Nadu",
    weave: "Interlocked Pit Loom · 24K Gold Real Zari",
    price: "₹ 48,000",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
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
    description: "Rich organic textured tussar silk finished with antique bronze-gold zari border.",
  },
];

export default function ExperiencePage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedSaree, setSelectedSaree] = useState<SareeItem | null>(null);

  const categories = ["ALL", "Kanchipuram", "Banarasi", "Paithani", "Chanderi", "Patola", "Tussar"];

  const filteredItems = SAREES.filter(
    (item) => selectedFilter === "ALL" || item.category === selectedFilter
  );

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#201f1f] flex flex-col justify-start">
      <Header onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Hero Banner with the Arch Motif */}
      <section
        className="w-full pt-36 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center"
        style={{
          backgroundColor: "#05084a",
          backgroundImage: "radial-gradient(circle at 50% 35%, #080d69 0%, #05084a 55%, #030536 100%)",
        }}
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/75 hover:text-white text-[10px] tracking-widest uppercase mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Main
        </a>

        <span className="text-[12px] md:text-[14px] tracking-[0.35em] text-white/80 uppercase block mb-3 font-medium">
          EXPERIENCE
        </span>
        <h1
          style={{
            fontFamily: "'Anton', 'Impact', sans-serif",
            fontSize: "clamp(46px, 8vw, 100px)",
            letterSpacing: "0.02em",
            lineHeight: "0.95",
          }}
          className="text-white uppercase mb-6"
        >
          STITCHING STORIES
        </h1>
        <p className="text-[11px] md:text-[13px] tracking-[0.25em] text-white/80 uppercase max-w-xl mx-auto leading-relaxed">
          Welcome to our world. An immersive curation of handcrafted bridal and heirloom handloom sarees.
        </p>
      </section>

      {/* Saree Collection Section */}
      <section className="max-w-[1440px] mx-auto w-full px-6 md:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-[#201f1f]/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-[#8B0000]" />
              <span className="text-[10px] tracking-[0.35em] text-[#767573] uppercase font-semibold">
                Authentic Handloom Archive
              </span>
            </div>
            <h2 className="title text-[#201f1f]">THE SAREE COLLECTION</h2>
          </div>
          <p className="mt-4 md:mt-0 text-[11px] tracking-widest text-[#767573] uppercase max-w-sm">
            Hand-woven by generational master weavers across Kanchipuram, Varanasi, Paithan & Chanderi.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-[#e8e6e1]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 text-[10px] tracking-widest uppercase transition-all rounded-full ${
                selectedFilter === cat
                  ? "bg-[#05084a] text-white font-semibold shadow-md"
                  : "bg-[#ebe9e5] text-[#595955] hover:bg-[#dfdcd6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Saree Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[14px] font-semibold tracking-wider text-[#201f1f] uppercase">
                      {saree.name}
                    </h3>
                    <span className="text-[13px] font-bold text-[#05084a]">
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
                      setInquiryModalOpen(true);
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
      </section>

      {/* Saree Modal */}
      {selectedSaree && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#fbfaf8] w-full max-w-2xl p-6 md:p-8 relative shadow-2xl border border-[#e8e6e1]">
            <button
              onClick={() => setSelectedSaree(null)}
              className="absolute top-4 right-4 p-2 text-[#201f1f] hover:opacity-60 cursor-pointer"
            >
              ✕
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
                <button
                  onClick={() => {
                    setSelectedSaree(null);
                    setInquiryModalOpen(true);
                  }}
                  className="w-full py-3 bg-[#05084a] text-white hover:bg-black transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                >
                  SCHEDULE BESPOKE FITTING
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />
    </main>
  );
}
