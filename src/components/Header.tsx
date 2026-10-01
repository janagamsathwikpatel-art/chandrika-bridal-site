"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fbfaf8]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#e8e6e1]/80 text-[#201f1f]"
            : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-7 md:py-9 text-white"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left Navigation (Increased Font Size & Pure White in Hero) */}
          <nav
            className={`hidden lg:flex items-center gap-9 text-[13px] md:text-[14px] tracking-[0.22em] font-medium transition-colors duration-300 ${
              scrolled ? "text-[#201f1f]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            }`}
          >
            <a
              href="#about"
              className={`relative transition-colors duration-300 ${
                scrolled
                  ? "luxury-link hover:text-black"
                  : "hover:text-white/80 after:absolute after:bottom-[-3px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
              }`}
            >
              PHILOSOPHY
            </a>
            <a
              href="#collection"
              className={`relative transition-colors duration-300 ${
                scrolled
                  ? "luxury-link hover:text-black"
                  : "hover:text-white/80 after:absolute after:bottom-[-3px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
              }`}
            >
              COLLECTION
            </a>
            <a
              href="#boutiques"
              className={`relative transition-colors duration-300 ${
                scrolled
                  ? "luxury-link hover:text-black"
                  : "hover:text-white/80 after:absolute after:bottom-[-3px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
              }`}
            >
              BOUTIQUES
            </a>
          </nav>

          {/* Center Brand Logo */}
          <a
            href="/"
            className="group flex flex-col items-center justify-center transition-transform duration-300"
          >
            <span
              className={`text-[22px] md:text-[30px] tracking-[0.38em] font-light uppercase transition-all duration-300 group-hover:tracking-[0.45em] ${
                scrolled
                  ? "text-[#201f1f]"
                  : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              }`}
            >
              CHANDRIKA
            </span>
            <span
              className={`text-[9px] md:text-[10px] tracking-[0.45em] -mt-1 font-normal uppercase transition-colors duration-300 ${
                scrolled ? "text-[#767573]" : "text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
              }`}
            >
              HAUTE BRIDAL
            </span>
          </a>

          {/* Right Navigation */}
          <div
            className={`hidden lg:flex items-center gap-9 text-[13px] md:text-[14px] tracking-[0.22em] font-medium transition-colors duration-300 ${
              scrolled ? "text-[#201f1f]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            }`}
          >
            <a
              href="#gallery"
              className={`relative transition-colors duration-300 ${
                scrolled
                  ? "luxury-link hover:text-black"
                  : "hover:text-white/80 after:absolute after:bottom-[-3px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
              }`}
            >
              EDITORIAL
            </a>
            <button
              onClick={onOpenInquiry}
              className={`relative transition-colors duration-300 uppercase cursor-pointer ${
                scrolled
                  ? "luxury-link hover:text-black"
                  : "hover:text-white/80 after:absolute after:bottom-[-3px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300"
              }`}
            >
              INQUIRE
            </button>
            <a
              href="#boutiques"
              className={`px-5 py-2.5 transition-all duration-300 text-[11px] md:text-[12px] tracking-[0.25em] font-medium uppercase border ${
                scrolled
                  ? "border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white"
                  : "border-white text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm shadow-sm"
              }`}
            >
              FIND A BOUTIQUE
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-opacity ${
                scrolled ? "text-[#201f1f]" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbfaf8] flex flex-col justify-center items-center gap-8 px-6 text-center animate-fadeIn lg:hidden">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl tracking-widest text-[#201f1f] hover:opacity-70 uppercase font-light"
          >
            PHILOSOPHY
          </a>
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl tracking-widest text-[#201f1f] hover:opacity-70 uppercase font-light"
          >
            COLLECTION
          </a>
          <a
            href="#boutiques"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl tracking-widest text-[#201f1f] hover:opacity-70 uppercase font-light"
          >
            SELECT BOUTIQUES
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl tracking-widest text-[#201f1f] hover:opacity-70 uppercase font-light"
          >
            EDITORIAL GALLERY
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            className="text-xl tracking-widest text-[#201f1f] hover:opacity-70 uppercase font-light"
          >
            PRIVATE INQUIRY
          </button>
        </div>
      )}
    </>
  );
}
