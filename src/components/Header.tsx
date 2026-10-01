"use client";

import { useState, useEffect } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fbfaf8]/85 backdrop-blur-md py-4 shadow-sm border-b border-[#e8e6e1]/60"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-widest font-medium">
            <a href="#about" className="luxury-link hover:text-[#201f1f]">
              PHILOSOPHY
            </a>
            <a href="#collection" className="luxury-link hover:text-[#201f1f]">
              COLLECTION
            </a>
            <a href="#boutiques" className="luxury-link hover:text-[#201f1f]">
              BOUTIQUES
            </a>
          </nav>

          {/* Center Brand Logo */}
          <a
            href="/"
            className="group flex flex-col items-center justify-center transition-transform duration-300"
          >
            <span className="text-[20px] md:text-[26px] tracking-[0.35em] font-light text-[#201f1f] uppercase transition-all duration-300 group-hover:tracking-[0.42em]">
              CHANDRIKA
            </span>
            <span className="text-[8px] tracking-[0.4em] text-[#767573] -mt-1 font-normal">
              HAUTE BRIDAL
            </span>
          </a>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] tracking-widest font-medium">
            <a href="#gallery" className="luxury-link hover:text-[#201f1f]">
              EDITORIAL
            </a>
            <button
              onClick={onOpenInquiry}
              className="luxury-link hover:text-[#201f1f] cursor-pointer uppercase"
            >
              INQUIRE
            </button>
            <a
              href="#boutiques"
              className="px-4 py-2 border border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-[#ffffff] transition-all duration-300 text-[10px] tracking-widest"
            >
              FIND A BOUTIQUE
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#201f1f] p-2 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="text-lg tracking-widest hover:text-[#201f1f]"
          >
            PHILOSOPHY
          </a>
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg tracking-widest hover:text-[#201f1f]"
          >
            COLLECTION
          </a>
          <a
            href="#boutiques"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg tracking-widest hover:text-[#201f1f]"
          >
            SELECT BOUTIQUES
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg tracking-widest hover:text-[#201f1f]"
          >
            EDITORIAL GALLERY
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            className="text-lg tracking-widest hover:text-[#201f1f] uppercase"
          >
            PRIVATE INQUIRY
          </button>
        </div>
      )}
    </>
  );
}
