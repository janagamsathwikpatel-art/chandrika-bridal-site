"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  return (
    <section id="why-chandrika" className="w-full relative min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden border-t border-[#e8e6e1] select-none">
      {/* ── 100% Full-Width Edge-to-Edge Image Background ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/cta-saree-1.jpg"
          alt="Discover Chandrika - The Chandrika Distinction"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Luxury Gradient Overlay for high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45 z-10" />
      </div>

      {/* ── Centered Content Overlay ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center text-white">
        
        {/* Sparkle Gold Emblem */}
        <div className="w-12 h-12 rounded-full bg-white/10 border border-[#ffd700]/40 flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
          <Sparkles size={22} className="text-[#ffd700]" />
        </div>

        {/* Eyebrow: THE CHANDRIKA DISTINCTION */}
        <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#ffd700] font-semibold mb-3">
          The Chandrika Distinction
        </p>

        {/* Main Title: DISCOVER CHANDRIKA */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase leading-tight mb-3 drop-shadow-md">
          Discover Chandrika
        </h2>

        {/* Gold Italic Tagline: First & The Finest Since 1928 */}
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-[#ffd700] tracking-wide mb-6 drop-shadow">
          First &amp; The Finest Since 1928
        </h3>

        <div className="w-20 h-px bg-[#ffd700]/60 mx-auto mb-6" />

        {/* Subtitle Description */}
        <p className="text-sm md:text-base lg:text-lg text-white/90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed font-sans">
          A century of handloom heritage, master weaver devotion, and pure silk elegance created to be cherished across generations. 
          Bringing you 100% certified pure mulberry silk with lab-tested 24K real gold zari.
        </p>
      </div>
    </section>
  );
}
