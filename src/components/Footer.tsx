"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full min-h-[480px] bg-[#0c0c0b] text-white overflow-hidden select-none border-t border-white/10">
      
      {/* ── Edge-to-Edge Full-Bleed Background Image with Dark Overlay ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/artisan-weaver-handloom.jpg"
          alt="Chandrika Handloom Heritage Atelier"
          fill
          className="object-cover object-center filter brightness-[0.35] contrast-125"
          sizes="100vw"
        />
        {/* Luxury Dark Gradient Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/80 z-10" />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 lg:pt-20 pb-8 flex flex-col justify-between min-h-[480px]">
        
        {/* ── 5-Column Grid Layout matching Ekaya reference ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          
          {/* Column 1: Stay Updated Newsletter (lg:col-span-4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <h4 className="text-base md:text-lg font-serif tracking-wide text-white mb-3">
              Stay Updated
            </h4>
            <p className="text-xs text-white/70 font-light tracking-wide leading-relaxed mb-6 font-sans">
              Get the latest launches and event updates directly in your inbox, sign up to our newsletter:
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-sm">
              <input
                type="email"
                placeholder="Your Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/40 focus:border-white text-xs text-white placeholder-white/50 py-2.5 pr-10 outline-none transition-colors font-sans tracking-wider"
                required
              />
              <button
                type="submit"
                aria-label="Submit Email"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#ffd700] mt-2 font-light tracking-wider">
                Thank you for subscribing to Chandrika updates.
              </p>
            )}
          </div>

          {/* Column 2: Customer Care (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif tracking-wide text-white mb-4">
              Customer Care
            </h4>
            <div className="space-y-2 text-xs text-white/80 font-light font-sans tracking-wide">
              <p>Mon - Sat</p>
              <p>11:00 am - 8:00 pm</p>
              <p className="pt-1">+91 98765 43210</p>
              <p>hello@chandrika.in</p>
              <a
                href="#contact"
                className="inline-block pt-3 font-medium text-white hover:text-[#ffd700] underline underline-offset-4 transition-colors"
              >
                View Our Store Locations
              </a>
            </div>
          </div>

          {/* Column 3: About us (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif tracking-wide text-white mb-4">
              About us
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light font-sans tracking-wide">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">In The Press</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Column 4: Client Experiences (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif tracking-wide text-white mb-4">
              Client Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light font-sans tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">Shipping &amp; Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 5: Follow Us (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif tracking-wide text-white mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light font-sans tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Divider with Central Emblem & Copyright ── */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase text-white/60">
          
          {/* Central Emblem Divider */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-white/20" />
            <div className="w-6 h-6 rounded-full border border-[#ffd700]/40 flex items-center justify-center bg-black/40">
              <Sparkles size={12} className="text-[#ffd700]" />
            </div>
            <div className="w-12 h-px bg-white/20" />
          </div>

          {/* Copyright Statement */}
          <p className="text-center md:text-right font-light">
            ROSEPETAL DESIGNER BOUTIQUE. all rights reserved © {new Date().getFullYear()}
          </p>

        </div>

      </div>
    </footer>
  );
}
