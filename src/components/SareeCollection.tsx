"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface ArchCollectionCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  categoryTag: string;
  linkHref?: string;
}

const OTHER_COLLECTIONS: ArchCollectionCard[] = [
  {
    id: "col-01",
    title: "Semi Banaras Organza Sarees",
    subtitle: "Sheer metallic luster & weightless elegance",
    image: "/images/chanderi-tissue-gold-saree.jpg",
    categoryTag: "FABRICS",
  },
  {
    id: "col-02",
    title: "Budget Silk Sarees",
    subtitle: "Affordable luxury handloom for everyday elegance",
    image: "/images/fav-blue-woven.png",
    categoryTag: "READYMADES",
  },
  {
    id: "col-03",
    title: "Semi Banaras Crepe Sarees",
    subtitle: "Fluent drape & rich gold zari brocades",
    image: "/images/banarasi-gold-brocade-saree.jpg",
    categoryTag: "BANARASI",
  },
  {
    id: "col-04",
    title: "Uppada Silk Sarees",
    subtitle: "Lightweight Jamdani weaves from Andhra Pradesh",
    image: "/images/kanjivaram-pink-pure-silk.png",
    categoryTag: "KANCHIPURAM",
  },
];

interface SareeCollectionProps {
  onOpenInquiry?: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function SareeCollection({
  onOpenInquiry,
  onSelectCategory,
}: SareeCollectionProps) {
  const handleCollectionClick = (categoryTag: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryTag);
    }
    if (onOpenInquiry) {
      onOpenInquiry();
    }
  };

  return (
    <section id="sarees" className="w-full bg-[#fbfaf8] py-14 md:py-20 px-4 md:px-10 relative scroll-mt-20 border-b border-[#ece9e2]">
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* ── Section Header matching User Request ── */}
        <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#111111] tracking-tight leading-tight mb-3">
            Explore Other Collections
          </h2>
          <p className="text-sm md:text-base font-serif text-[#555555] font-light leading-relaxed">
            Celebrate tradition with our exquisite range of Sarees.
          </p>
        </div>

        {/* ── 4 Arch-Window Cards Grid matching Pothys Style ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {OTHER_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => handleCollectionClick(col.categoryTag)}
              className="cursor-pointer group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Arched Top Image Portal (rounded-t-[120px] Pothys Arch Frame) */}
              <div className="relative aspect-[3/4] w-full rounded-t-[120px] overflow-hidden bg-[#f4f2ec] border border-[#eee8de] shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Caption Details */}
              <div className="mt-5 flex flex-col items-center px-2">
                <h3 className="text-base md:text-lg font-serif font-semibold text-[#111111] tracking-wide leading-snug line-clamp-1 group-hover:text-[#8B0000] transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-[#666666] font-light leading-relaxed mt-1 mb-4 line-clamp-2">
                  {col.subtitle}
                </p>

                {/* Shop Now Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCollectionClick(col.categoryTag);
                  }}
                  className="px-6 py-2.5 bg-[#201f1f] group-hover:bg-[#8B0000] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
