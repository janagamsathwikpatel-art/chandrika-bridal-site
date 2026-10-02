"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EditorialStory() {
  return (
    <section id="about" className="w-full bg-[#fdfbf7] pt-10 pb-4 md:pt-14 md:pb-6 border-t border-[#e8e6e1] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Image Column (Left on desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-[#e8e6e1] bg-[#ebe9e5] group">
              <Image
                src="/images/artisan-weaver-handloom.jpg"
                alt="Indian Master Artisan Weaver Handcrafting Silk Saree on Pit Loom"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto text-[10px] sm:text-xs tracking-widest text-white uppercase bg-black/75 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-md">
                Heritage Atelier • Master Weaver At Traditional Pit Loom
              </div>
            </div>
          </div>

          {/* Story Text Column (Right on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#800020] font-bold mb-2">
              Etymology &amp; Living Heritage
            </span>

            <h2 className="text-2xl md:text-4xl font-serif font-light text-gray-900 uppercase leading-tight mb-3 tracking-wide">
              Derived From Chandrika <br />
              <span className="text-xl md:text-3xl italic text-[#b8860b] font-normal lowercase tracking-normal font-serif">
                (Sanskrit for “Moonlight”)
              </span>
            </h2>

            <div className="w-16 h-px bg-[#b8860b]/60 mb-5" />

            <p className="text-sm md:text-base text-gray-700 font-light tracking-wide leading-relaxed font-sans mb-8">
              Chandrika is an ode to quiet luxury, offering refined bridal couture rooted in
              ancestral Indian handloom heritage. Honoring generational master weavers who dedicate
              months to crafting every individual saree on traditional wooden pit looms with pure
              mulberry silk and authentic 24K gold zari, each drape feels intentionally composed and
              softly evocative — like a whisper carried in fabric. Chandrika finds its power in restraint,
              choosing nuance over noise.
            </p>

            <div>
              <a
                href="#sarees"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#800020] hover:bg-[#600018] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Explore The Handlooms</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
