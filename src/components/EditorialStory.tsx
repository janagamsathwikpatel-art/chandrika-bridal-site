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

      {/* Story Part 2: Handloom Stories - The Artisans, Effort & Fair Profit */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="flex flex-col justify-center w-full max-w-[540px] gap-6">
          <div className="border-b border-[#e8e6e1] pb-4">
            <span className="text-[10px] tracking-[0.25em] text-[#767573] uppercase block mb-1 font-semibold">
              Handloom Stories • Living Artisanship
            </span>
            <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] text-[#201f1f] uppercase leading-tight">
              THE SACRED EFFORT <br />
              BEHIND EVERY THREAD
            </h2>
          </div>
          <p className="text-justify text-[#595955] uppercase text-[12px] md:text-[13px] leading-relaxed tracking-[0.08em] font-normal">
            Behind every Chandrika saree lies an untold story of immense human effort,
            patience, and multi-generational devotion. Entire weaver families work together—hand-spinning
            pure gold zari onto traditional charkha spindles, threading hundreds of warp filaments,
            and guiding the shuttle across wooden pit looms for 45 to 180 days. Every motif is an act
            of love that no machine can duplicate. We believe those who pour their souls into these
            masterpieces deserve genuine economic prosperity; Chandrika works directly with weaving
            households, ensuring fair-trade living profits, healthcare support, and dignity for every artisan.
          </p>
          <div className="pt-2">
            <a href="#why-chandrika" className="luxury-link text-[#201f1f] text-[11px] tracking-widest font-semibold">
              OUR FAIR-TRADE ARTISAN PLEDGE →
            </a>
          </div>
        </div>

        <div className="w-full max-w-[540px]">
          <div className="relative aspect-[572/720] overflow-hidden rounded-sm bg-[#ebe9e5] group shadow-md border border-[#e8e6e1]">
            <img
              src="/images/handloom-artisan-stories.jpg"
              alt="Indian Handloom Weaver Family Working on Silk Saree with Charkha and Pit Loom"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-[9px] tracking-widest text-white/95 uppercase bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
              HANDLOOM STORIES • WEAVER FAMILY EFFORT & DIRECT PATRONAGE
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
