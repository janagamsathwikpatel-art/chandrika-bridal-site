"use client";

import { useState } from "react";
import { ArrowRight, ShoppingBag, Heart, Eye } from "lucide-react";

interface SareeProduct {
  id: string;
  name: string;
  subtitle: string;
  weave: string;
  price: string;
  image: string;
  hoverImage: string;
  tag?: string;
  isNew?: boolean;
}

const SAREE_COLLECTION: SareeProduct[] = [
  {
    id: "sc-01",
    name: "AARUSHI KANJIVARAM",
    subtitle: "Pure Mulberry Silk · Temple Border · Bridal Crimson",
    weave: "Kanchipuram Handloom · 24K Real Zari",
    price: "₹ 48,000",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop",
    tag: "BRIDAL HEIRLOOM",
    isNew: true,
  },
  {
    id: "sc-02",
    name: "MEERA BANARASI",
    subtitle: "Katan Silk · Gold Jaal Brocade · Royal Ivory",
    weave: "Varanasi Kadhwa Handloom",
    price: "₹ 54,000",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1610030469668-93530c17b58f?q=80&w=900&auto=format&fit=crop",
    tag: "BESTSELLER",
  },
  {
    id: "sc-03",
    name: "SITA PAITHANI",
    subtitle: "Pure Silk · Peacock Pallu · Peacock Teal",
    weave: "Paithan Tapestry Weave",
    price: "₹ 42,000",
    image:
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=900&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
    tag: "HERITAGE WEAVE",
  },
  {
    id: "sc-04",
    name: "TARA CHANDERI",
    subtitle: "Featherweight Silk Zari · Champagne Gold",
    weave: "Chanderi Traditional Pit Loom",
    price: "₹ 24,500",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=900&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1583391733975-dd83d95c5567?q=80&w=900&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "sc-05",
    name: "LAKSHMI PATOLA",
    subtitle: "Double Ikat Silk · Sacred Geometrics · Vermilion",
    weave: "Patan Double Ikat Heritage",
    price: "₹ 1,15,000",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=900&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    tag: "RARE WEAVE",
  },
  {
    id: "sc-06",
    name: "RADHA TUSSAR",
    subtitle: "Raw Wild Silk · Antique Bronze Zari · Desert Ochre",
    weave: "Bhagalpur Handloom",
    price: "₹ 26,000",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=900&auto=format&fit=crop",
  },
];

interface SareeCollectionProps {
  onOpenInquiry?: () => void;
}

export default function SareeCollection({ onOpenInquiry }: SareeCollectionProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set());

  const toggleWishlist = (id: string) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section
      id="sarees"
      className="w-full bg-[#fbfaf8] py-24 md:py-36 px-6 md:px-14 border-t border-[#e8e6e1]"
    >
      <div className="max-w-[1440px] mx-auto">

        {/* ── Section Header (Poeza Editorial Style) ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#201f1f]/15">
          <div>
            <span className="text-[10px] tracking-[0.35em] text-[#767573] uppercase block mb-3 font-semibold">
              Authenticated Handloom • Silk Mark Certified
            </span>
            <h2 className="title text-[#201f1f]">
              THE SAREE<br />COLLECTION
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-3">
            <p className="text-[11px] tracking-widest text-[#595955] max-w-xs uppercase leading-relaxed text-left md:text-right">
              Every drape is individually hand-woven by hereditary master artisans on traditional pit looms using pure silk and real gold zari.
            </p>
            <button
              onClick={onOpenInquiry}
              className="text-[11px] tracking-widest text-[#201f1f] uppercase font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300"
            >
              SCHEDULE PRIVATE DRAPING <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* ── Saree Products Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {SAREE_COLLECTION.map((saree) => (
            <div
              key={saree.id}
              className="group flex flex-col"
              onMouseEnter={() => setHovered(saree.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* ─ Image Card ─ */}
              <div className="relative overflow-hidden bg-[#ebe9e5] aspect-[3/4]">
                {/* Main image */}
                <img
                  src={saree.image}
                  alt={saree.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    hovered === saree.id ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  }`}
                />
                {/* Hover image swap */}
                <img
                  src={saree.hoverImage}
                  alt={`${saree.name} alternate view`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    hovered === saree.id ? "opacity-100 scale-105" : "opacity-0 scale-100"
                  }`}
                />

                {/* Badges */}
                {(saree.tag || saree.isNew) && (
                  <div className="absolute top-4 left-4 z-10">
                    {saree.isNew && (
                      <span className="block text-[9px] tracking-[0.25em] bg-[#201f1f] text-white px-3 py-1 uppercase mb-1">
                        NEW ARRIVAL
                      </span>
                    )}
                    {saree.tag && (
                      <span className="block text-[9px] tracking-[0.25em] bg-[#8B0000] text-white px-3 py-1 uppercase font-semibold">
                        {saree.tag}
                      </span>
                    )}
                  </div>
                )}

                {/* Hover action overlay */}
                <div
                  className={`absolute inset-0 z-10 flex flex-col justify-end p-5 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 ${
                    hovered === saree.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                    onClick={onOpenInquiry}
                    className="w-full py-3 bg-white text-[#201f1f] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#201f1f] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={13} /> INQUIRE & DRAPE
                  </button>
                </div>

                {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(saree.id)}
                  className={`absolute top-4 right-4 z-20 p-2.5 rounded-full transition-all duration-300 ${
                    wishlisted.has(saree.id)
                      ? "bg-[#8B0000] text-white"
                      : "bg-white/80 backdrop-blur-sm text-[#201f1f] opacity-0 group-hover:opacity-100"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart
                    size={14}
                    fill={wishlisted.has(saree.id) ? "white" : "none"}
                  />
                </button>
              </div>

              {/* ─ Product Info ─ */}
              <div className="mt-5 flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[13px] md:text-[14px] tracking-[0.16em] font-medium text-[#201f1f] uppercase">
                    {saree.name}
                  </h3>
                  <span className="text-[12px] tracking-widest text-[#201f1f] font-semibold">
                    {saree.price}
                  </span>
                </div>
                <p className="text-[10px] tracking-wider text-[#767573] uppercase">
                  {saree.subtitle}
                </p>
                <p className="text-[9px] tracking-widest text-[#a9a69f] uppercase mt-0.5">
                  {saree.weave}
                </p>

                {/* Quick actions */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#e8e6e1]">
                  <button
                    onClick={onOpenInquiry}
                    className="text-[10px] tracking-widest text-[#201f1f] uppercase font-semibold flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
                  >
                    SHOP THIS DRAPE <ArrowRight size={11} />
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="text-[10px] tracking-widest text-[#767573] uppercase flex items-center gap-1.5 hover:text-[#201f1f] transition-colors"
                  >
                    <Eye size={11} /> QUICK VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View Full Collection CTA ── */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={onOpenInquiry}
            className="px-12 py-4 border border-[#201f1f] text-[#201f1f] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#201f1f] hover:text-white transition-all duration-300 flex items-center gap-3"
          >
            REQUEST PRIVATE ATELIER VIEWING <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
