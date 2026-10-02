"use client";

import Image from "next/image";
import { ShieldCheck, HeartHandshake, Compass, Award, ArrowRight } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

const HERITAGE_PILLARS = [
  {
    icon: Award,
    title: "100+ Years of Pure Handloom Legacy",
    description:
      "A century-old legacy of crafting fine silk sarees trusted by generations of royal patrons & brides across India.",
  },
  {
    icon: ShieldCheck,
    title: "Silk Mark Certified 100% Pure Mulberry Silk",
    description:
      "Every single yard is lab-tested and certified by Silk Mark India with 24K real gold zari threads that never tarnish.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Master Weaver Patronage & Fair Trade",
    description:
      "By purchasing directly from Chandrika, you empower generational weaving clusters across Kanchipuram, Varanasi, & Paithan with fair-trade living wages.",
  },
  {
    icon: Compass,
    title: "Bespoke Concierge & Global Fitting Ateliers",
    description:
      "Enjoy private 1-on-1 draping sessions at our heritage salons with tailored blouse embroidery, custom color-matching, and insured global delivery.",
  },
];

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="why-chandrika" className="py-24 md:py-36 bg-[#fbfaf8] px-6 md:px-12 border-t border-[#e8e6e1]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header: Discover Chandrika (Nalli Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#767573] font-medium mb-3">
            The Chandrika Distinction
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#201f1f] uppercase leading-tight">
            Discover Chandrika
          </h2>
          <div className="w-16 h-px bg-[#201f1f] mx-auto my-6" />
          <p className="text-sm md:text-base text-[#4a4947] leading-relaxed font-light">
            A century of handloom heritage, master weaver devotion, and pure silk elegance created to be cherished across generations.
          </p>
        </div>

        {/* Content Grid: Left Featured Saree Visual, Right Nalli-Inspired Heritage Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Featured Saree Visual with Silk Mark Badge */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ebe8e2] shadow-xl rounded-lg">
              <Image
                src="/images/royal-kanjivaram-bridal-saree.jpg"
                alt="Authentic Chandrika Royal Kanjivaram Bridal Saree"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase bg-white/20 backdrop-blur-sm px-3 py-1 mb-2">
                  Handcrafted Pure Silk
                </span>
                <p className="text-lg md:text-xl font-light tracking-wide uppercase">
                  Pure Kanchipuram Korvai Crimson & Gold
                </p>
                <p className="text-xs text-white/80 tracking-widest uppercase mt-1">
                  180 Days on Wooden Pit Loom · 24K Tested Zari
                </p>
              </div>
            </div>

            {/* Floating Silk Mark Badge */}
            <div className="absolute -top-4 -right-4 hidden md:flex bg-[#201f1f] text-white p-4 shadow-xl flex-col items-center justify-center text-center w-28 h-28 rounded-full border-2 border-[#fbfaf8]">
              <span className="text-[9px] tracking-widest uppercase text-[#d4af37]">Silk Mark</span>
              <span className="text-xs font-serif italic mt-0.5">100% Pure</span>
              <span className="text-[8px] tracking-widest uppercase text-white/70">Certified</span>
            </div>
          </div>

          {/* Discover Chandrika Heritage Pillars List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-7">
              {HERITAGE_PILLARS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-[#f0eee9] border border-[#e2dfd7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#201f1f] group-hover:text-white transition-colors duration-300">
                      <Icon size={20} className="text-[#201f1f] group-hover:text-[#d4af37] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 pb-5 border-b border-[#e8e6e1] last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[#a8a59e]">0{idx + 1}</span>
                        <h3 className="text-base md:text-lg font-medium tracking-wide uppercase text-[#201f1f]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#5f5d59] leading-relaxed mt-2 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Atelier CTA Actions */}
            <div className="mt-10 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-8 py-4 bg-[#201f1f] hover:bg-[#8B0000] text-white transition-all duration-300 text-[11px] tracking-[0.25em] uppercase font-medium shadow-sm hover:shadow text-center flex items-center justify-center gap-3 rounded-full"
              >
                <span>BOOK BESPOKE CONSULTATION</span>
                <ArrowRight size={14} />
              </button>
              <a
                href="#sarees"
                className="px-8 py-4 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white transition-all duration-300 text-[11px] tracking-[0.25em] uppercase font-medium text-center rounded-full"
              >
                EXPLORE ALL SAREES
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
