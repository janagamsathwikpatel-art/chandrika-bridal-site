"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

const CTA_GALLERY = [
  {
    id: "cta-01",
    title: "Timeless Tradition",
    subtitle: "Royal Navy & Aqua Korvai Silk",
    image: "/images/cta-saree-1.jpg",
  },
  {
    id: "cta-02",
    title: "Ancestral Heritage",
    subtitle: "Aqua Sea-Green & Magenta Silk",
    image: "/images/cta-saree-2.jpg",
  },
  {
    id: "cta-03",
    title: "Royal Craftsmanship",
    subtitle: "Light Blue & Purple Woven Silk",
    image: "/images/cta-saree-3.png",
  },
];

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

        {/* Full-Width Heritage Brand CTA Banner with 3-Image Visual Showcase */}
        <div
          className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden py-14 md:py-20 px-6 md:px-12 text-center shadow-2xl flex flex-col items-center justify-center"
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
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-[#ffd700] tracking-wide mb-3 drop-shadow-md">
            First &amp; The Finest Since 1928
          </h3>

          {/* Subtitle Description */}
          <p className="text-sm md:text-base lg:text-lg text-white/85 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-10">
            A century of handloom heritage, master weaver devotion, and pure silk elegance created to be cherished across generations. 
            Bringing you 100% certified pure mulberry silk with lab-tested 24K real gold zari.
          </p>

          {/* 3-Image Visual Showcase Grid (User Uploaded Authentic Images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px] mb-12">
            {CTA_GALLERY.map((item) => (
              <div
                key={item.id}
                onClick={onOpenInquiry}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-xl cursor-pointer transition-all duration-500 hover:border-[#ffd700] hover:shadow-2xl hover:-translate-y-1.5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#ffd700] font-semibold block mb-0.5">
                    {item.subtitle}
                  </span>
                  <h4 className="text-base font-serif italic tracking-wide text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

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
