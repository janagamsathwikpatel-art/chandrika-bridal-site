"use client";

import Image from "next/image";

export default function EditorialStory() {
  return (
    <div id="about" className="w-full bg-[#fbfaf8] py-16 md:py-28 overflow-hidden">
      {/* Story Part 1 */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
        <div className="flex flex-col justify-center w-full max-w-[540px] gap-6">
          <div className="border-b border-[#e8e6e1] pb-4">
            <span className="text-[10px] tracking-[0.25em] text-[#767573] uppercase block mb-1">
              Etymology & Origins
            </span>
            <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] text-[#201f1f] uppercase leading-tight">
              DERIVED FROM CHANDRIKA <br />
              (SANSKRIT FOR “MOONLIGHT”)
            </h2>
          </div>
          <p className="text-justify text-[#595955] uppercase text-[12px] md:text-[13px] leading-relaxed tracking-[0.08em] font-normal">
            Chandrika is an ode to quiet luxury, offering refined bridal design for the woman who
            seeks elegance without excess. Blending precise tailoring, contemporary silhouettes and
            impeccable craftsmanship, each gown feels intentionally composed and softly evocative,
            like a whisper carried in fabric. Chandrika finds its power in restraint, choosing nuance
            over noise.
          </p>
          <div className="pt-2">
            <a href="#collection" className="luxury-link text-[#201f1f] text-[11px] tracking-widest font-semibold">
              EXPLORE THE SILHOUETTES →
            </a>
          </div>
        </div>

        <div className="w-full max-w-[540px]">
          <div className="relative aspect-[572/720] overflow-hidden rounded-sm bg-[#ebe9e5] group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop"
              alt="Chandrika Bridal Gown Editorial"
              className="w-full h-full object-cover grayscale contrast-105 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-[9px] tracking-widest text-white/90 uppercase bg-black/30 backdrop-blur-sm px-3 py-1">
              LOOK 01 • L'ÉLÉGANCE SILENCIEUSE
            </div>
          </div>
        </div>
      </section>

      {/* Story Part 2 */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="flex flex-col justify-center w-full max-w-[540px] gap-6">
          <div className="border-b border-[#e8e6e1] pb-4">
            <span className="text-[10px] tracking-[0.25em] text-[#767573] uppercase block mb-1">
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
            meaning, beauty with clarity. Handcrafted using double-faced silk crepe, sculptural
            organza, and architectural draping.
          </p>
          <div className="pt-2">
            <a href="#boutiques" className="luxury-link text-[#201f1f] text-[11px] tracking-widest font-semibold">
              SCHEDULE PRIVATE FITTING →
            </a>
          </div>
        </div>

        <div className="w-full max-w-[540px]">
          <div className="relative aspect-[572/720] overflow-hidden rounded-sm bg-[#ebe9e5] group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
              alt="Architectural Bridal Silhouettes"
              className="w-full h-full object-cover grayscale contrast-105 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-[9px] tracking-widest text-white/90 uppercase bg-black/30 backdrop-blur-sm px-3 py-1">
              LOOK 02 • ARCHITECTURAL DRAPING
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
