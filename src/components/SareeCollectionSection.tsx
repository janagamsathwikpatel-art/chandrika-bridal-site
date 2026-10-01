"use client";

import { useState } from "react";
import { ArrowRight, ShoppingBag, Eye, Heart, MapPin, Clock, Sparkles } from "lucide-react";

export interface Saree {
  id: string;
  name: string;
  category: "Kanchipuram" | "Banarasi" | "Paithani" | "Chanderi" | "Patola" | "Tussar";
  origin: string;
  weaveTime: string;
  price: string;
  zari: string;
  description: string;
  image: string;
  hoverImage: string;
  tag?: string;
  isNew?: boolean;
}

const SAREE_CATALOG: Saree[] = [
  {
    id: "saree-01",
    name: "AARUSHI KORVAI KANJIVARAM",
    category: "Kanchipuram",
    origin: "Kanchipuram, Tamil Nadu",
    weaveTime: "75 Days Hand-Woven",
    price: "₹ 48,000",
    zari: "Pure 24K Gold Dipped Zari",
    description:
      "Handcrafted using the ancient Korvai interlocking technique on a three-shuttle pit loom. Features architectural gopuram temple borders and a weighty pure mulberry silk body.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    tag: "BRIDAL HEIRLOOM",
    isNew: true,
  },
  {
    id: "saree-02",
    name: "MEERA SHIKARGAH BANARASI",
    category: "Banarasi",
    origin: "Varanasi, Uttar Pradesh",
    weaveTime: "90 Days Master Loom",
    price: "₹ 56,000",
    zari: "Authentic Kadhwa Real Zari",
    description:
      "Woven in pure katan silk with intricate flora and fauna motifs inspired by royal Mughal hunts. Each floral motif is individually locked by hand with pure metallic thread.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1610030469668-93530c17b58f?q=80&w=1200&auto=format&fit=crop",
    tag: "SIGNATURE BROCADE",
  },
  {
    id: "saree-03",
    name: "SITA TAPESTRY PAITHANI",
    category: "Paithani",
    origin: "Paithan, Maharashtra",
    weaveTime: "60 Days Handloom",
    price: "₹ 42,000",
    zari: "Solid Gold Tissue Peacock Pallu",
    description:
      "Recognized by its oblique square borders and breathtaking tapestry-woven peacock motifs on a radiant crimson silk body. An enduring legacy piece passed down generations.",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    tag: "ROYAL HERITAGE",
  },
  {
    id: "saree-04",
    name: "TARA METALLIC CHANDERI",
    category: "Chanderi",
    origin: "Chanderi, Madhya Pradesh",
    weaveTime: "45 Days Hand-Woven",
    price: "₹ 24,500",
    zari: "Micro Gold Zari Warp",
    description:
      "Gossamer transparency meets opulent luster. Woven with pure mulberry silk warp and fine gold zari weft, adorned with subtle ashrafi coin butis.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1583391733975-dd83d95c5567?q=80&w=1200&auto=format&fit=crop",
    tag: "SHEER OPULENCE",
    isNew: true,
  },
  {
    id: "saree-05",
    name: "LAKSHMI DOUBLE IKAT PATOLA",
    category: "Patola",
    origin: "Patan, Gujarat",
    weaveTime: "120 Days Master Loom",
    price: "₹ 1,35,000",
    zari: "Pure Gold Border Accents",
    description:
      "Mathematical precision meets pure silk dye resistance. Both warp and weft are dyed individually prior to hand weaving on an authentic salvi loom.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    tag: "MUSEUM HEIRLOOM",
  },
  {
    id: "saree-06",
    name: "RADHA WILD TUSSAR BOTANICAL",
    category: "Tussar",
    origin: "Bhagalpur, Bihar",
    weaveTime: "50 Days Handloom",
    price: "₹ 28,000",
    zari: "Beaten Copper & Muted Gold",
    description:
      "Richly textured wild tussar silk naturally dyed with botanical extracts, finished with broad beaten-gold zari borders for modern bridal poise.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
    tag: "BOTANICAL SILK",
  },
];

interface SareeCollectionSectionProps {
  onOpenInquiry?: () => void;
}

export default function SareeCollectionSection({ onOpenInquiry }: SareeCollectionSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedSaree, setSelectedSaree] = useState<Saree | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const categories = ["ALL", "Kanchipuram", "Banarasi", "Paithani", "Chanderi", "Patola", "Tussar"];

  const filteredSarees = SAREE_CATALOG.filter(
    (s) => selectedCategory === "ALL" || s.category === selectedCategory
  );

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="collection" className="w-full bg-[#fbfaf8] py-24 md:py-36 px-6 md:px-14 border-b border-[#e8e6e1]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#201f1f]/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-[#8B0000]" />
              <span className="text-[10px] tracking-[0.35em] text-[#767573] uppercase font-semibold">
                Authentic Indian Handlooms • Certified Provenance
              </span>
            </div>
            <h2 className="title text-[#201f1f]">
              THE SAREE <br />
              COLLECTION
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-3">
            <p className="text-[11px] md:text-[12px] tracking-widest text-[#595955] max-w-md uppercase leading-relaxed text-left md:text-right">
              Every saree is a living heirloom — hand-spun by generational master weavers on traditional pit and shuttle looms using pure mulberry silk and real gold zari.
            </p>
            <button
              onClick={onOpenInquiry}
              className="text-[11px] tracking-widest text-[#201f1f] uppercase font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              BOOK PRIVATE DRAPE FITTING <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-14 border-b border-[#e8e6e1] pb-4 text-[11px] tracking-widest font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`transition-all uppercase pb-2 relative cursor-pointer ${
                selectedCategory === cat
                  ? "text-[#201f1f] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#201f1f]"
                  : "text-[#767573] hover:text-[#201f1f]"
              }`}
            >
              {cat} {cat === "ALL" ? `(${SAREE_CATALOG.length})` : ""}
            </button>
          ))}
        </div>

        {/* Saree Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredSarees.map((saree) => (
            <div
              key={saree.id}
              className="group flex flex-col cursor-pointer"
              onMouseEnter={() => setHoveredId(saree.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedSaree(saree)}
            >
              {/* Image Frame with Dual Hover Swap */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe9e5] border border-[#e8e6e1] shadow-sm group-hover:shadow-lg transition-all duration-500">
                {/* Main drape image */}
                <img
                  src={saree.image}
                  alt={saree.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    hoveredId === saree.id ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                />
                {/* Alternate / Macro Weave Detail Image */}
                <img
                  src={saree.hoverImage}
                  alt={`${saree.name} close up`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    hoveredId === saree.id ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                  {saree.isNew && (
                    <span className="text-[9px] tracking-[0.25em] bg-[#201f1f] text-white px-3 py-1 uppercase shadow-sm">
                      NEW ARRIVAL
                    </span>
                  )}
                  {saree.tag && (
                    <span className="text-[9px] tracking-[0.25em] bg-[#8B0000] text-white px-3 py-1 uppercase shadow-sm">
                      {saree.tag}
                    </span>
                  )}
                </div>

                {/* Wishlist Heart */}
                <button
                  onClick={(e) => toggleWishlist(saree.id, e)}
                  aria-label="Wishlist"
                  className={`absolute top-4 right-4 z-20 p-2.5 rounded-full transition-all duration-300 ${
                    wishlist.has(saree.id)
                      ? "bg-[#8B0000] text-white"
                      : "bg-white/80 backdrop-blur-sm text-[#201f1f] opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <Heart size={14} fill={wishlist.has(saree.id) ? "white" : "none"} />
                </button>

                {/* Hover Quick Action Drawer */}
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
                    className="w-full py-3 bg-white text-[#201f1f] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#201f1f] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow"
                  >
                    <ShoppingBag size={13} /> INQUIRE & SHOP THIS DRAPE
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-5 flex flex-col gap-1.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[14px] md:text-[15px] font-medium tracking-[0.14em] text-[#201f1f] uppercase leading-snug group-hover:text-[#8B0000] transition-colors">
                    {saree.name}
                  </h3>
                  <span className="text-[13px] tracking-widest text-[#201f1f] font-semibold">
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

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#e8e6e1] text-[9px] tracking-widest">
                  <span className="text-[#8B0000] font-semibold uppercase">
                    {saree.zari}
                  </span>
                  <span className="text-[#201f1f] uppercase underline font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    EXAMINE WEAVE <Eye size={11} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bespoke Loom Commission Banner */}
        <div className="mt-24 p-8 md:p-14 bg-[#ebe9e5] border border-[#dfdcd6] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-[9px] tracking-[0.3em] text-[#767573] uppercase block mb-1">
              Bespoke Artisan Loom Commissions
            </span>
            <h3 className="text-xl md:text-2xl font-light tracking-[0.15em] text-[#201f1f] uppercase mb-2">
              CREATE YOUR CUSTOM BRIDAL WEAVE
            </h3>
            <p className="text-[11px] tracking-wider text-[#595955] uppercase leading-relaxed">
              We collaborate directly with master weaver families in Kanchipuram, Varanasi, and Paithan to weave custom bridal sarees with your family emblems, auspicious motifs, and bespoke zari weights.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="whitespace-nowrap px-8 py-3.5 bg-[#201f1f] text-white hover:bg-black transition-all duration-300 text-[10px] tracking-[0.25em] uppercase font-semibold shadow-md active:scale-95"
          >
            COMMISSION A WEAVE
          </button>
        </div>
      </div>

      {/* Saree Detail Modal */}
      {selectedSaree && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#fbfaf8] w-full max-w-3xl p-6 md:p-10 relative shadow-2xl border border-[#e8e6e1] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSaree(null)}
              className="absolute top-6 right-6 text-[#201f1f] hover:opacity-60 text-lg font-bold p-2 cursor-pointer"
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
                  <span className="text-[9px] tracking-[0.3em] text-[#8B0000] uppercase font-semibold block mb-1">
                    {selectedSaree.category} Heirloom Handloom
                  </span>
                  <h3 className="text-xl font-light tracking-[0.15em] text-[#201f1f] uppercase mb-2">
                    {selectedSaree.name}
                  </h3>
                  <div className="text-lg font-semibold text-[#201f1f] mb-4">
                    {selectedSaree.price}
                  </div>

                  <div className="space-y-2 text-[10px] tracking-wider text-[#595955] uppercase mb-6 bg-[#f4f3f0] p-4 border border-[#e8e6e1]">
                    <p><strong className="text-[#201f1f]">Origin:</strong> {selectedSaree.origin}</p>
                    <p><strong className="text-[#201f1f]">Weaving Time:</strong> {selectedSaree.weaveTime}</p>
                    <p><strong className="text-[#201f1f]">Zari Quality:</strong> {selectedSaree.zari}</p>
                    <p><strong className="text-[#201f1f]">Fiber:</strong> 100% Pure Mulberry Silk (Silk Mark Certified)</p>
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
                    className="w-full py-3.5 bg-[#201f1f] text-white hover:bg-black transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                  >
                    SCHEDULE ATELIER DRAPE FITTING
                  </button>
                  <button
                    onClick={() => setSelectedSaree(null)}
                    className="w-full py-2.5 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
                  >
                    CONTINUE BROWSING
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
