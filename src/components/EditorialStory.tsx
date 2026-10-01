"use client";

import Image from "next/image";

export default function EditorialStory() {
  return (
    <div id="about" className="w-full bg-[#fbfaf8] py-16 md:py-28 overflow-hidden">
      {/* Story Part 1: Handloom Saree Artisan Craftsmanship */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
        <div className="flex flex-col justify-center w-full max-w-[540px] gap-6">
          <div className="border-b border-[#e8e6e1] pb-4">
            <span className="text-[10px] tracking-[0.25em] text-[#767573] uppercase block mb-1 font-semibold">
              Etymology & Living Heritage
            </span>
            <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] text-[#201f1f] uppercase leading-tight">
              DERIVED FROM CHANDRIKA <br />
              (SANSKRIT FOR “MOONLIGHT”)
            </h2>
          </div>
          <p className="text-justify text-[#595955] uppercase text-[12px] md:text-[13px] leading-relaxed tracking-[0.08em] font-normal">
            Chandrika is an ode to quiet luxury, offering refined bridal couture rooted in
            ancestral Indian handloom heritage. Honoring generational master weavers who dedicate
            months to crafting every individual saree on traditional wooden pit looms with pure
            mulberry silk and authentic 24K gold zari, each drape feels intentionally composed and
            softly evocative — like a whisper carried in fabric. Chandrika finds its power in restraint,
            choosing nuance over noise.
          </p>
          <div className="pt-2">
            <a href="#sarees" className="luxury-link text-[#201f1f] text-[11px] tracking-widest font-semibold">
              EXPLORE THE HANDLOOMS →
            </a>
          </div>
        </div>

        <div className="w-full max-w-[540px]">
          <div className="relative aspect-[572/720] overflow-hidden rounded-sm bg-[#ebe9e5] group shadow-md border border-[#e8e6e1]">
            <img
              src="/images/artisan-weaver-handloom.jpg"
              alt="Indian Master Artisan Weaver Handcrafting Silk Saree on Pit Loom"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-[9px] tracking-widest text-white/95 uppercase bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
              HERITAGE ATELIER • MASTER WEAVER AT TRADITIONAL PIT LOOM
            </div>
          </div>
        </div>
      </section>

      {/* Story Part 2: Design Philosophy & Draping */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="flex flex-col justify-center w-full max-w-[540px] gap-6">
          <div className="border-b border-[#e8e6e1] pb-4">
            <span className="text-[10px] tracking-[0.25em] text-[#767573] uppercase block mb-1 font-semibold">
              Design Philosophy
            </span>
            <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] text-[#201f1f] uppercase leading-tight">
              AN EXPLORATION OF <br />
              FORM, TEXTURE AND MOVEMENT
            </h2>
          </div>
          <p className="text-justify text-[#595955] uppercase text-[12px] md:text-[13px] leading-relaxed tracking-[0.08em] font-normal">
            Lines meet with purpose guiding the silhouette with precision. Chandrika explores form,
            texture and movement — an invitation to choose simplicity with depth, restraint with
            meaning, beauty with clarity. Handcrafted using authentic Indian handloom silk, sculptural
            zari pallus, and architectural draping.
          </p>
          <div className="pt-2">
            <a href="#boutiques" className="luxury-link text-[#201f1f] text-[11px] tracking-widest font-semibold">
              SCHEDULE PRIVATE FITTING →
            </a>
          </div>
        </div>

        <div className="w-full max-w-[540px]">
          <div className="relative aspect-[572/720] overflow-hidden rounded-sm bg-[#ebe9e5] group shadow-sm border border-[#e8e6e1]">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
              alt="Chandrika Handloom Bridal Saree Draping"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-[9px] tracking-widest text-white/90 uppercase bg-black/50 backdrop-blur-sm px-3.5 py-1.5 border border-white/20">
              LOOK 02 • ARCHITECTURAL HANDLOOM DRAPING
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
