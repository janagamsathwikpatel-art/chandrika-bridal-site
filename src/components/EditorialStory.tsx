"use client";

import Image from "next/image";
import { ArrowRight, Heart, Leaf, Sparkles, Award, Repeat } from "lucide-react";

interface EditorialStoryProps {
  onOpenInquiry?: () => void;
}

const EDITORIAL_CARDS = [
  {
    id: 1,
    title: "CRAFTED WITH CARE",
    description: "Each motif is a labour of love, woven thread by thread.",
    image: "/images/contact-loom-border.png",
  },
  {
    id: 2,
    title: "PURE BY NATURE",
    description: "From the finest mulberry silk to authentic 24K gold zari, our sarees begin with nature's purest gifts.",
    image: "/images/cta-saree-3.png",
  },
  {
    id: 3,
    title: "HERITAGE IN EVERY DRAPE",
    description: "Timeless weaves that connect tradition, art and you.",
    image: "/images/cta-saree-1.jpg",
  },
  {
    id: 4,
    title: "MORE THAN A SAREE",
    description: "It's a story of people, places and a rich cultural legacy.",
    image: "/images/cta-saree-2.jpg",
  },
  {
    id: 5,
    title: "ROOTED IN INDIA",
    description: "Inspired by our land, our traditions and the artisans who keep them alive.",
    image: "/images/cta-saree-4.jpg",
  },
  {
    id: 6,
    title: "FOR GENERATIONS AHEAD",
    description: "Preserving handloom today for a more beautiful tomorrow.",
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
  return (
    <section id="about" className="w-full bg-[#fdfbf7] py-8 md:py-12 border-t border-[#e8e6e1] select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Compact HD Top Hero Banner ── */}
        <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] rounded-xl overflow-hidden shadow-md border border-[#e8e6e1] bg-black mb-4">
          <Image
            src="/images/artisan-weaver-handloom.jpg"
            alt="Master Weaver handcrafting silk saree on pit loom"
            fill
            priority
            quality={95}
            className="object-cover object-center filter brightness-[0.8] contrast-110"
            sizes="(max-width: 1400px) 100vw, 1380px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/65" />

          {/* Left Translucent Overlay Card */}
          <div className="absolute left-3 sm:left-6 top-3 sm:top-6 bottom-3 sm:bottom-6 w-[calc(100%-1.5rem)] sm:w-[380px] bg-white/92 backdrop-blur-md p-5 sm:p-6 rounded-lg shadow-lg flex flex-col justify-between z-10 border border-white/50">
            <div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#800020] font-bold mb-1.5">
                THE HANDLOOM STORY
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 leading-tight mb-3">
                Woven by <br />
                <span className="font-normal">Generations</span>
              </h2>
              <div className="w-10 h-px bg-[#b8860b] mb-3" />
              <p className="text-[11px] sm:text-xs text-gray-700 font-light tracking-wide leading-relaxed font-sans">
                Every Chandrika saree carries the wisdom, patience and passion of our master weavers — an unbroken legacy of Indian handloom heritage.
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#2b2520] hover:bg-[#800020] hover:border-[#800020] hover:text-white text-[9px] uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded shadow-sm"
              >
                <span>EXPLORE OUR HERITAGE</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Right Text Overlay */}
          <div className="hidden lg:flex absolute right-8 bottom-8 text-right flex-col items-end z-10">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/95 font-medium max-w-xs leading-relaxed drop-shadow-md">
              THREADS OF CULTURE, <br />
              WOVEN FOR TOMORROW.
            </p>
            <div className="w-10 h-px bg-white/60 mt-2.5" />
          </div>
        </div>

        {/* ── 2. Compact 6-Card Editorial Grid (Sleek aspect-[16/10]) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-4">
          {EDITORIAL_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={onOpenInquiry}
              className="group cursor-pointer relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-[#e8e6e1] bg-black transition-all duration-500"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                quality={95}
                className="object-cover object-center filter brightness-[0.7] group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />

              {/* Card Vector Overlay Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10">
                <div>
                  <h3 className="text-[11px] tracking-[0.25em] font-medium uppercase text-white drop-shadow-sm mb-1">
                    {card.title}
                  </h3>
                  <div className="w-6 h-px bg-[#ffd700]/70" />
                </div>

                <p className="text-[11px] text-white/90 font-light font-sans tracking-wide leading-relaxed max-w-xs drop-shadow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Compact Bottom Value Proposition Bar ── */}
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
