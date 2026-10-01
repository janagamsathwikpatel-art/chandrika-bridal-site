"use client";

import { useState } from "react";

const EDITORIAL_SLIDES = [
  {
    id: "slide-1",
    title: "LIGHT & SHADOW",
    caption: "Sculpted lines in natural morning light.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-2",
    title: "TEXTURED MINIMALISM",
    caption: "Heavy silk crepe tailored with architectural discipline.",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-3",
    title: "POETIC RESTRAINT",
    caption: "Nuance over noise in every folded seam.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "slide-4",
    title: "THE FINAL COMPOSURE",
    caption: "Designed for the bride who commands quiet attention.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function LayeredGallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="gallery" className="w-full bg-[#111110] text-[#fbfaf8] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#a19f9a] uppercase block mb-2">
              Visual Narrative
            </span>
            <h2 className="title text-[#fbfaf8]">EDITORIAL DECK</h2>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            {EDITORIAL_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-12 h-1 transition-all duration-300 ${
                  activeIdx === idx ? "bg-white" : "bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Large Viewport */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-black/40 rounded-sm">
          {EDITORIAL_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeIdx === idx ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
                <span className="text-[10px] tracking-[0.3em] text-[#d4d1c9] uppercase block mb-2">
                  0{idx + 1} / 0{EDITORIAL_SLIDES.length}
                </span>
                <h3 className="text-xl md:text-3xl font-light tracking-[0.2em] text-white uppercase mb-2">
                  {slide.title}
                </h3>
                <p className="text-[11px] md:text-[12px] tracking-wider text-white/80 uppercase">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {EDITORIAL_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => setActiveIdx(idx)}
              className={`cursor-pointer group relative aspect-[16/10] overflow-hidden border transition-all duration-300 ${
                activeIdx === idx ? "border-white" : "border-white/20 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-2 left-2 text-[9px] tracking-widest text-white uppercase">
                {slide.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
