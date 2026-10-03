"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Leaf, Award, Repeat } from "lucide-react";

interface EditorialStoryProps {
  onOpenInquiry?: () => void;
}

const EDITORIAL_CARDS = [
  {
    id: 1,
    tag: "HANDLOOM ARTISTRY",
    title: "CRAFTED WITH CARE",
    subtitle: "Each motif is a labour of love, woven thread by thread.",
    story:
      "Every motif begins in the hands of a master artisan. Intricate details are patiently woven thread by thread on traditional wooden pit looms, preserving generations of Indian craftsmanship and ancestral devotion.",
    image: "/images/contact-loom-border.png",
  },
  {
    id: 2,
    tag: "NATURAL SILK & 24K ZARI",
    title: "PURE BY NATURE",
    subtitle: "From mulberry silk to 24K gold zari, nature's purest gifts.",
    story:
      "From the finest certified mulberry silk to lab-tested authentic 24K gold zari, our sarees begin with nature's purest gifts harvested directly from India's traditional silk havens for a luminescent drape.",
    image: "/images/cta-saree-3.png",
  },
  {
    id: 3,
    tag: "ROYAL ELEGANCE",
    title: "HERITAGE IN EVERY DRAPE",
    subtitle: "Timeless weaves that connect tradition, art and you.",
    story:
      "Timeless weaves that connect tradition, art and you. Every fold cascades with rich ancestral motifs, intricate Korvai borders, and authentic handloom grace designed to be cherished for generations.",
    image: "/images/cta-saree-1.jpg",
  },
  {
    id: 4,
    tag: "COUTURE LEGACY",
    title: "MORE THAN A SAREE",
    subtitle: "A story of people, places and a rich cultural legacy.",
    story:
      "It is a living story of people, sacred weaving towns, and a rich cultural legacy crafted to honor life's most meaningful milestone celebrations and bridal occasions.",
    image: "/images/cta-saree-2.jpg",
  },
  {
    id: 5,
    tag: "ANCESTRAL ROOTS",
    title: "ROOTED IN INDIA",
    subtitle: "Inspired by our land and the artisans who keep it alive.",
    story:
      "Inspired by our sacred land, temple gopuram architecture, and master weavers who dedicate their lives to keeping ancestral Indian textile traditions alive.",
    image: "/images/cta-saree-4.jpg",
  },
  {
    id: 6,
    tag: "FUTURE HERITAGE",
    title: "FOR GENERATIONS AHEAD",
    subtitle: "Preserving handloom today for a more beautiful tomorrow.",
    story:
      "Preserving traditional wooden pit looms today for a more conscious, beautiful tomorrow. An heirloom treasure passed from mother to daughter with enduring elegance.",
    image: "/images/cta-saree-3.png",
  },
];

const VALUE_PROPOSITIONS = [
  { icon: Heart, label: "SUPPORTING ARTISANS" },
  { icon: Leaf, label: "SUSTAINABLE FASHION" },
  { icon: Award, label: "AUTHENTIC HANDLOOM" },
  { icon: Sparkles, label: "TIMELESS DESIGNS" },
  { icon: Repeat, label: "A LEGACY LIVES ON" },
];

export default function EditorialStory({ onOpenInquiry }: EditorialStoryProps) {
  const [activeCardId, setActiveCardId] = useState(1);

  const activeCard =
    EDITORIAL_CARDS.find((c) => c.id === activeCardId) || EDITORIAL_CARDS[0];

  return (
    <section id="about" className="w-full bg-[#fdfbf7] py-10 md:py-16 border-t border-[#e8e6e1] select-none">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 65% / 35% Grid Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* ── LEFT 65% COLUMN: Handloom Image Grid (lg:col-span-8) ── */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Top Compact Hero Banner */}
            <div className="relative w-full h-[300px] sm:h-[340px] rounded-2xl overflow-hidden shadow-md border border-[#e8e6e1] bg-black">
              <Image
                src="/images/artisan-weaver-handloom.jpg"
                alt="Master Weaver handcrafting silk saree on pit loom"
                fill
                priority
                quality={95}
                className="object-cover object-center filter brightness-[0.75] contrast-110"
                sizes="(max-width: 1024px) 100vw, 850px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/60" />

              {/* Left Translucent Card Overlay */}
              <div className="absolute left-4 sm:left-6 top-4 sm:top-6 bottom-4 sm:bottom-6 w-[calc(100%-2rem)] sm:w-[360px] bg-white/92 backdrop-blur-md p-5 rounded-xl shadow-xl flex flex-col justify-between z-10 border border-white/50">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#800020] font-bold mb-1.5">
                    THE HANDLOOM STORY
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 leading-tight mb-2">
                    Woven by <br />
                    <span className="font-normal">Generations</span>
                  </h2>
                  <div className="w-10 h-px bg-[#b8860b] mb-2.5" />
                  <p className="text-xs text-gray-700 font-light tracking-wide leading-relaxed font-sans">
                    Every Chandrika saree carries the wisdom, patience and passion of our master weavers.
                  </p>
                </div>

                <div>
                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#2b2520] hover:bg-[#800020] hover:border-[#800020] hover:text-white text-[9px] uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded shadow-sm"
                  >
                    <span>EXPLORE OUR HERITAGE</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Right Overlay */}
              <div className="hidden sm:flex absolute right-6 bottom-6 text-right flex-col items-end z-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/90 font-medium max-w-xs leading-relaxed drop-shadow-md">
                  THREADS OF CULTURE, <br />
                  WOVEN FOR TOMORROW.
                </p>
                <div className="w-8 h-px bg-white/60 mt-2" />
              </div>
            </div>

            {/* 6 Individual Interactive Image Cards (3-Column Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {EDITORIAL_CARDS.map((card) => {
                const isActive = card.id === activeCardId;
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setActiveCardId(card.id)}
                    onClick={() => setActiveCardId(card.id)}
                    className={`group cursor-pointer relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-sm transition-all duration-500 border ${
                      isActive
                        ? "border-[#800020] ring-2 ring-[#800020]/30 shadow-md scale-[1.01]"
                        : "border-[#e8e6e1] opacity-90 hover:opacity-100 hover:border-[#b8860b]"
                    }`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      quality={95}
                      className="object-cover object-center filter brightness-[0.7] group-hover:brightness-[0.55] group-hover:scale-[1.03] transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />

                    {/* Active State Accent Badge */}
                    {isActive && (
                      <div className="absolute top-2.5 right-2.5 bg-[#800020] text-white p-1 rounded-full shadow-md z-20">
                        <Sparkles size={12} />
                      </div>
                    )}

                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between text-white z-10">
                      <div>
                        <h3 className="text-[10px] tracking-[0.25em] font-medium uppercase text-white drop-shadow-sm mb-1">
                          {card.title}
                        </h3>
                        <div
                          className={`h-px transition-all duration-300 ${
                            isActive ? "w-8 bg-[#ffd700]" : "w-4 bg-white/50"
                          }`}
                        />
                      </div>

                      <p className="text-[10px] text-white/90 font-light font-sans tracking-wide leading-snug line-clamp-2 drop-shadow">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ── RIGHT 35% COLUMN: Fixed Dynamic Information Panel (lg:col-span-4) ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-[#f6eee2] border border-[#e5d9c7] p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-500">
              
              {/* Background Watermark Accent */}
              <div className="absolute -right-6 -bottom-6 w-40 h-40 opacity-10 pointer-events-none text-[#800020]">
                <Sparkles size={160} />
              </div>

              {/* Eyebrow Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#800020]" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#800020] font-bold">
                  {activeCard.tag}
                </p>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2b2520] tracking-tight mb-2">
                {activeCard.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs font-serif italic text-[#b8860b] mb-4">
                {activeCard.subtitle}
              </p>

              <div className="w-12 h-px bg-[#b8860b]/40 mb-5" />

              {/* Story Description */}
              <p className="text-xs sm:text-sm text-gray-700 font-light tracking-wide leading-relaxed font-sans mb-8">
                {activeCard.story}
              </p>

              {/* CTA Button */}
              <button
                onClick={onOpenInquiry}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#2b2520] hover:bg-[#800020] text-white text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-md shadow-md group"
              >
                <span>EXPLORE OUR HERITAGE</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Card Selector Indicator */}
              <div className="mt-6 pt-4 border-t border-[#e5d9c7]/80 flex items-center justify-between text-[9px] tracking-widest text-gray-500 uppercase font-medium">
                <span>HERITAGE STORY {activeCard.id} OF 6</span>
                <span className="text-[#800020] font-bold">HOVER CARD TO EXPLORE</span>
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom Value Proposition Bar ── */}
        <div className="bg-[#f7f4ed] py-4 px-6 sm:px-8 rounded-xl border border-[#e5d9c7] flex flex-wrap items-center justify-between gap-4 shadow-sm">
          
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-[9px] tracking-[0.2em] font-bold text-gray-800 uppercase">
            {VALUE_PROPOSITIONS.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <IconComp size={15} className="text-[#800020]" />
                  <span>{prop.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5 pl-4 border-l border-[#e5d9c7]">
            <p className="text-base sm:text-lg font-serif italic text-[#800020] font-normal tracking-wide">
              Woven with Purpose
            </p>
            <div className="w-6 h-px bg-[#b8860b]/60" />
          </div>

        </div>

      </div>
    </section>
  );
}
