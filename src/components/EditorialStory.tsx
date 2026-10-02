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
    <section id="about" className="w-full bg-[#fdfbf7] py-12 md:py-16 border-t border-[#e8e6e1] select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Top Hero Banner ── */}
        <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg border border-[#e8e6e1] bg-black mb-6">
          <Image
            src="/images/artisan-weaver-handloom.jpg"
            alt="Master Weaver handcrafting silk saree on pit loom"
            fill
            priority
            className="object-cover object-center filter brightness-[0.75] contrast-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/70" />

          {/* Left Translucent Overlay Card */}
          <div className="absolute left-4 sm:left-8 top-4 sm:top-8 bottom-4 sm:bottom-8 w-[calc(100%-2rem)] sm:w-[420px] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl flex flex-col justify-between z-10 border border-white/40">
            <div>
              <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#800020] font-bold mb-2">
                THE HANDLOOM STORY
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 leading-tight mb-4">
                Woven by <br />
                <span className="font-normal">Generations</span>
              </h2>
              <div className="w-12 h-px bg-[#b8860b] mb-4" />
              <p className="text-xs sm:text-sm text-gray-700 font-light tracking-wide leading-relaxed font-sans">
                Every Chandrika saree carries the wisdom, patience and passion of our master weavers — an unbroken legacy of Indian handloom heritage.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#2b2520] hover:bg-[#800020] hover:border-[#800020] hover:text-white text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-md shadow-sm"
              >
                <span>EXPLORE OUR HERITAGE</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Text Overlay */}
          <div className="hidden lg:flex absolute right-10 bottom-10 text-right flex-col items-end z-10">
            <p className="text-xs tracking-[0.3em] uppercase text-white/95 font-medium max-w-xs leading-relaxed drop-shadow-md">
              THREADS OF CULTURE, <br />
              WOVEN FOR TOMORROW.
            </p>
            <div className="w-12 h-px bg-white/60 mt-3" />
          </div>
        </div>

        {/* ── 2. 6-Card Editorial Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {EDITORIAL_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={onOpenInquiry}
              className="group cursor-pointer relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-[#e8e6e1] bg-black transition-all duration-500"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center filter brightness-[0.65] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                <div>
                  <h3 className="text-xs tracking-[0.25em] font-medium uppercase text-white drop-shadow-sm mb-1">
                    {card.title}
                  </h3>
                  <div className="w-8 h-px bg-[#ffd700]/70" />
                </div>

                <p className="text-xs text-white/90 font-light font-sans tracking-wide leading-relaxed max-w-xs drop-shadow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Bottom Value Proposition Bar ── */}
        <div className="bg-[#f7f4ed] py-5 px-6 sm:px-8 rounded-xl border border-[#e5d9c7] flex flex-wrap items-center justify-between gap-6 shadow-sm">
          
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-[10px] tracking-[0.2em] font-bold text-gray-800 uppercase">
            {VALUE_PROPOSITIONS.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5">
                  <IconComp size={16} className="text-[#800020]" />
                  <span>{prop.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-[#e5d9c7]">
            <p className="text-lg sm:text-xl font-serif italic text-[#800020] font-normal tracking-wide">
              Woven with Purpose
            </p>
            <div className="w-8 h-px bg-[#b8860b]/60" />
          </div>

        </div>

      </div>
    </section>
  );
}
