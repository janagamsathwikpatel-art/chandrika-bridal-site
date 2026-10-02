"use client";

import { ArrowRight, Sparkles } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="why-chandrika" className="py-20 md:py-28 bg-[#fbfaf8] px-6 md:px-12 border-t border-[#e8e6e1]">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header: Discover Chandrika */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#767573] font-medium mb-3">
            The Chandrika Distinction
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#201f1f] uppercase leading-tight">
            Discover Chandrika
          </h2>
          <div className="w-16 h-px bg-[#201f1f] mx-auto my-6" />
        </div>

        {/* Full-Width Heritage Brand CTA Banner (Nalli Style: First & The Finest Since 1928) */}
        <div
          className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden py-16 md:py-24 px-8 md:px-16 text-center shadow-2xl flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#05084a",
            backgroundImage:
              "radial-gradient(circle at 50% 45%, #0c1282 0%, #05084a 60%, #020324 100%)",
          }}
        >
          {/* Top Gold Ornament Sparkle Icon */}
          <div className="w-12 h-12 rounded-full bg-white/10 border border-[#ffd700]/30 flex items-center justify-center mb-6">
            <Sparkles size={22} className="text-[#ffd700]" />
          </div>

          {/* Main Tagline: First & The Finest Since 1928 */}
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#ffd700] tracking-wide mb-4 drop-shadow-md">
            First &amp; The Finest Since 1928
          </h3>

          {/* Subtitle Description */}
          <p className="text-sm md:text-base lg:text-lg text-white/85 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-10">
            A century of handloom heritage, master weaver devotion, and pure silk elegance created to be cherished across generations. 
            Bringing you 100% certified pure mulberry silk with lab-tested 24K real gold zari.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-9 py-4 bg-[#ffd700] hover:bg-white text-[#05084a] font-semibold text-xs tracking-[0.25em] uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>BOOK BESPOKE CONSULTATION</span>
              <ArrowRight size={14} />
            </button>
            <a
              href="#sarees"
              className="w-full sm:w-auto px-9 py-4 border border-white/40 hover:border-white text-white hover:bg-white hover:text-[#05084a] font-semibold text-xs tracking-[0.25em] uppercase rounded-full transition-all duration-300 text-center"
            >
              EXPLORE ALL SAREES
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
