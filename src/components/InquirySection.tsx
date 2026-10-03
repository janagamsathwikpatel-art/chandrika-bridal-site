"use client";

import FlipImage from "@/components/FlipImage";
import { Sparkles, ShieldCheck, HeartHandshake, Compass, Award, ArrowRight } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

const REASONS = [
  {
    icon: ShieldCheck,
    title: "100% Certified Pure Mulberry Silk",
    description:
      "Every single yard is certified by Silk Mark India, woven with lab-tested pure zari threads crafted from precious metals that never tarnish.",
  },
  {
    icon: Sparkles,
    title: "Ancestral Pit-Loom Weaving",
    description:
      "Handcrafted by generational master weavers taking 45 to 180 days per drape. Pure artisanal handcraft with zero power-loom shortcuts.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Weaver Patronage",
    description:
      "By purchasing directly from Chandrika, you support generational weaving clusters across Kanchipuram, Varanasi, and Paithan with fair-trade living wages.",
  },
  {
    icon: Compass,
    title: "Bespoke Draping & Custom Ateliers",
    description:
      "Enjoy private one-on-one draping sessions at our heritage salons with tailored blouse embroidery, pallu customisation, and bespoke color-matching.",
  },
  {
    icon: Award,
    title: "Lifetime Heirloom Certificate",
    description:
      "Each creation comes with an Atelier Archival Certificate documenting its weaver provenance, silk density, and guidance for generational preservation.",
  },
];

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="why-chandrika" className="py-20 md:py-32 bg-[#fbfaf8] px-6 md:px-12 border-t border-[#e8e6e1]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header matching User Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#8B0000] mb-2 font-semibold">
            THE CHANDRIKA DISTINCTION
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#201f1f] uppercase leading-tight font-sans">
            DISCOVER CHANDRIKA
          </h2>
          <div className="w-16 h-px bg-[#8B0000] mx-auto my-5" />
          <p className="text-sm md:text-base text-[#5f5d59] leading-relaxed font-light">
            A Chandrika handloom saree is not merely attire—it is an enduring legacy of royal Indian heritage, 
            master weaver devotion, and uncompromising craftsmanship created to be cherished across generations.
          </p>
        </div>

        {/* Content Grid: Left Canvas Image Flipper, Right Reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Canvas Image Flipper (Originkit Saree Flipper with Non-Repeating Saree Images) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative group">
            <div className="w-full relative overflow-hidden rounded-xl shadow-2xl border border-[#e2dfd7] bg-[#111111]">
              <FlipImage cardWidth={713} cardHeight={554} />
              
              <div className="p-4 bg-[#201f1f] text-white flex justify-between items-center text-[10px] tracking-widest uppercase">
                <span className="text-[#ffd700] font-semibold">HERITAGE SILK ARCHIVE</span>
                <span className="text-white/70">100% PURE HANDLOOM</span>
              </div>
            </div>

            {/* Floating Silk Mark Badge */}
            <div className="absolute -top-4 -right-4 hidden md:flex bg-[#201f1f] text-white p-4 shadow-xl flex-col items-center justify-center text-center w-28 h-28 rounded-full border-2 border-[#fbfaf8] z-20">
              <span className="text-[9px] tracking-widest uppercase text-[#d4af37]">Silk Mark</span>
              <span className="text-xs font-serif italic mt-0.5">100% Pure</span>
              <span className="text-[8px] tracking-widest uppercase text-white/70">Certified</span>
            </div>
          </div>

          {/* Right Reasons List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-6">
              {REASONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#f0eee9] border border-[#e2dfd7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#201f1f] group-hover:text-white transition-colors duration-300">
                      <Icon size={18} className="text-[#201f1f] group-hover:text-[#d4af37] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 pb-4 border-b border-[#e8e6e1] last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[#a8a59e]">0{idx + 1}</span>
                        <h3 className="text-sm md:text-base font-medium tracking-wide uppercase text-[#201f1f]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#5f5d59] leading-relaxed mt-1 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Atelier CTA Actions */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-7 py-3.5 bg-[#201f1f] text-white hover:bg-black transition-all duration-300 text-[11px] tracking-[0.25em] uppercase font-medium shadow-sm hover:shadow text-center flex items-center justify-center gap-3"
              >
                <span>REQUEST BESPOKE ATELIER CONSULTATION</span>
                <ArrowRight size={14} />
              </button>
              <a
                href="#sarees"
                className="px-7 py-3.5 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white transition-all duration-300 text-[11px] tracking-[0.25em] uppercase font-medium text-center"
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
