"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Look {
  id: string;
  name: string;
  silhouette: string;
  fabric: string;
  image: string;
  season: string;
}

const COLLECTION_LOOKS: Look[] = [
  {
    id: "look-01",
    name: "KANJIVARAM KORVAI",
    silhouette: "Architectural 3-Shuttle Temple Border Drape",
    fabric: "100% Pure Mulberry Silk & 24K Gold Real Zari",
    image: "/images/royal-kanjivaram-bridal-saree.jpg",
    season: "Heritage 2026",
  },
  {
    id: "look-02",
    name: "BANARASI SHIKARGAH",
    silhouette: "Kadhwa Hand-Locked Royal Jaal Brocade",
    fabric: "Pure Katan Silk & Antique Silver-Gold Zari",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    season: "Heritage 2026",
  },
  {
    id: "look-03",
    name: "PAITHANI PEACOCK PALLU",
    silhouette: "Tapestry Weave with Kaleidoscopic Resham Inlay",
    fabric: "Handwoven Maharashtra Silk & Gold Tissue",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop",
    season: "Heritage 2026",
  },
  {
    id: "look-04",
    name: "CHANDERI TISSUE METALLIC",
    silhouette: "Gossamer Sheer Drape with Hand-Beaten Buttas",
    fabric: "Featherweight Silk Zari Warp & Tissue Weft",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    season: "Heritage 2026",
  },
];

interface CollectionShowcaseProps {
  onSelectLook?: (look: Look) => void;
}

export default function CollectionShowcase({ onSelectLook }: CollectionShowcaseProps) {
  const [activeLook, setActiveLook] = useState<Look>(COLLECTION_LOOKS[0]);

  return (
    <section id="collection" className="py-20 md:py-32 bg-[#f4f3f0] px-6 md:px-12 border-y border-[#e8e6e1]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-[#201f1f]/20">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#767573] uppercase block mb-2 font-semibold">
              Heritage Bridal Collection 2026
            </span>
            <h2 className="title text-[#201f1f]">THE SAREE SILHOUETTES</h2>
          </div>
          <p className="mt-4 md:mt-0 text-[11px] tracking-widest text-[#595955] max-w-sm uppercase leading-relaxed">
            Designed for timeless bridal majesty. Each handloom saree silhouette is sculpted by centuries of Indian weaving traditions and architectural pallu draping.
          </p>
        </div>

        {/* 4 Column Saree Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTION_LOOKS.map((look) => (
            <div
              key={look.id}
              className="group cursor-pointer flex flex-col bg-[#fbfaf8] border border-[#e8e6e1] transition-all duration-500 hover:shadow-xl"
              onClick={() => {
                setActiveLook(look);
                onSelectLook?.(look);
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe9e5]">
                <img
                  src={look.image}
                  alt={look.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 p-2 bg-[#201f1f]/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-[13px] tracking-[0.18em] font-medium text-[#201f1f] uppercase">
                      {look.name}
                    </h3>
                    <span className="text-[9px] tracking-widest text-[#767573]">
                      {look.season}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-wider text-[#767573] uppercase mb-1">
                    {look.silhouette}
                  </p>
                  <p className="text-[9px] tracking-widest text-[#99968f] uppercase">
                    {look.fabric}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#e8e6e1]/80 flex justify-between items-center">
                  <span className="text-[9px] tracking-widest text-[#201f1f] font-semibold group-hover:underline">
                    INQUIRE DRAPING
                  </span>
                  <span className="text-[9px] tracking-widest text-[#767573]">
                    HANDLOOM CERTIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
