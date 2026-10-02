"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

interface ContactSectionProps {
  onOpenInquiry?: () => void;
}

export default function ContactSection({ onOpenInquiry }: ContactSectionProps) {
  return (
    <section id="contact" className="w-full bg-[#f6eee2] pt-16 md:pt-24 pb-12 text-[#2b2520] border-t border-[#e5d9c7] select-none relative overflow-hidden">
      
      {/* Background Decorative Watermark (Lotus graphic) */}
      <div className="absolute right-0 bottom-16 w-[500px] h-[500px] opacity-15 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#800020]">
          <path d="M100 20 C120 60 160 80 180 100 C160 120 120 140 100 180 C80 140 40 120 20 100 C40 80 80 60 100 20 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M100 40 C115 70 145 85 160 100 C145 115 115 130 100 160 C85 130 55 115 40 100 C55 85 85 70 100 40 Z" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Main 3-Column Card Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          
          {/* Left Column: Dark Sepia Artisan Weaving Image Card (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-[#e5d9c7] bg-[#2b2520] group">
              <Image
                src="/images/artisan-weaver-handloom.jpg"
                alt="Tradition In Every Thread - Handloom Weaving Atelier"
                fill
                className="object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-85"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
              
              {/* Top Text Overlay */}
              <div className="absolute top-6 left-6 right-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-light">
                  A CONVERSATION
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-light">
                  ALWAYS
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-light">
                  INSPIRES
                </p>
                <div className="w-8 h-px bg-[#ffd700]/60 mt-2" />
              </div>

              {/* Bottom Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs tracking-[0.25em] uppercase text-white font-medium">
                  TRADITION
                </p>
                <p className="text-xs tracking-[0.25em] uppercase text-white font-medium">
                  IN EVERY
                </p>
                <p className="text-xs tracking-[0.25em] uppercase text-white font-medium">
                  THREAD
                </p>
                <div className="w-8 h-px bg-[#ffd700]/60 mt-2" />
              </div>
            </div>
          </div>

          {/* Middle Column: Let's Connect CTA & Script (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between py-4 sm:py-6">
            <div>
              <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#800020] font-bold mb-3">
                A CONVERSATION ALWAYS INSPIRES
              </p>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2b2520] tracking-tight mb-4">
                Let’s Connect
              </h2>

              <p className="text-sm md:text-base text-gray-700 font-light tracking-wide leading-relaxed mb-8 max-w-md font-sans">
                For collaborations, bespoke orders or any enquiries, we’d love to hear from you.
              </p>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#2b2520] hover:bg-[#800020] text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 rounded-md shadow-md hover:shadow-lg group"
              >
                <span>WRITE TO US</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative Cursive Handwriting Script */}
            <div className="mt-10 sm:mt-14 pt-6 border-t border-[#e5d9c7]/60">
              <p className="text-3xl sm:text-4xl font-serif italic text-[#800020] font-normal tracking-wide transform -rotate-2">
                Sarees that tell <br />
                <span className="pl-6">your story</span>
              </p>
              <div className="w-12 h-px bg-[#b8860b]/50 mt-3" />
            </div>
          </div>

          {/* Right Column: Contact Details & Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between py-4 sm:py-6 border-l border-[#e5d9c7]/80 pl-0 lg:pl-8">
            <div className="space-y-6">
              
              {/* Studio */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#2b2520]/20 flex items-center justify-center shrink-0 bg-white/50 text-[#2b2520]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#800020] font-bold">
                    OUR STUDIO
                  </h4>
                  <p className="text-xs text-gray-700 mt-1 font-sans leading-snug">
                    Banjara Hills,<br />Hyderabad 500033
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#2b2520]/20 flex items-center justify-center shrink-0 bg-white/50 text-[#2b2520]">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#800020] font-bold">
                    CALL US
                  </h4>
                  <p className="text-xs text-gray-700 mt-1 font-sans">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#2b2520]/20 flex items-center justify-center shrink-0 bg-white/50 text-[#2b2520]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#800020] font-bold">
                    EMAIL US
                  </h4>
                  <p className="text-xs text-gray-700 mt-1 font-sans">
                    hello@chandrika.in
                  </p>
                </div>
              </div>

              {/* Chat on Whatsapp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#2b2520]/20 flex items-center justify-center shrink-0 bg-white/50 text-[#2b2520]">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#800020] font-bold">
                    CHAT ON WHATSAPP
                  </h4>
                  <p className="text-xs text-gray-700 mt-1 font-sans">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Visit by Appointment */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#2b2520]/20 flex items-center justify-center shrink-0 bg-white/50 text-[#2b2520]">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#800020] font-bold">
                    VISIT BY APPOINTMENT
                  </h4>
                  <p className="text-xs text-gray-700 mt-1 font-sans">
                    Mon – Sat, 11 AM – 7 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Quote */}
            <div className="mt-8 pt-6 border-t border-[#e5d9c7]/80">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-600 font-medium leading-relaxed">
                “TIMELESS SAREES MEANINGFUL CONNECTIONS”
              </p>
            </div>
          </div>

        </div>

        {/* ── Integrated Bottom Brand Navigation Bar ── */}
        <div className="pt-8 border-t border-[#e5d9c7] flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-serif font-medium tracking-[0.25em] text-[#2b2520] uppercase">
              CHANDRIKA
            </h3>
            <p className="text-[8px] tracking-[0.35em] text-[#800020] uppercase font-bold">
              HAUTE BRIDAL SAREES
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] tracking-[0.2em] uppercase font-medium text-gray-700">
            <a href="#about" className="hover:text-[#800020] transition-colors">Philosophy</a>
            <a href="#sarees" className="hover:text-[#800020] transition-colors">Sarees</a>
            <a href="#why-chandrika" className="hover:text-[#800020] transition-colors">Bridal</a>
            <a href="#about" className="hover:text-[#800020] transition-colors">Journal</a>
            <a href="#contact" className="hover:text-[#800020] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-[#2b2520]/20 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors">
              <Instagram size={14} />
            </a>
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-[#2b2520]/20 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full border border-[#2b2520]/20 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors">
              <Youtube size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
