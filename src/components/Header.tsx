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

  const navLinkClass = (base = "") =>
    `relative uppercase tracking-[0.2em] text-[13px] font-medium transition-colors duration-300 cursor-pointer
    after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0
    hover:after:w-full after:transition-all after:duration-300
    ${scrolled
      ? "text-[#201f1f] after:bg-[#201f1f]"
      : "text-white after:bg-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
    } ${base}`;

  return (
    <>
      {/* ────────────────────────── MAIN HEADER ────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fbfaf8]/95 backdrop-blur-md border-b border-[#e8e6e1] py-4 shadow-sm"
            : "bg-gradient-to-b from-black/60 to-transparent py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full px-8 md:px-14">
          <div className="flex items-center justify-between w-full">

            {/* ── LEFT NAV ── */}
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#about" className={navLinkClass()}>PHILOSOPHY</a>
              <a href="#collection" className={navLinkClass()}>COLLECTION</a>
              <a href="#boutiques" className={navLinkClass()}>BOUTIQUES</a>
            </nav>

            {/* ── CENTER BRAND ── */}
            <a
              href="/"
              className="flex flex-col items-center justify-center group mx-auto lg:mx-0 transition-all duration-300"
            >
              <span
                className={`text-[22px] md:text-[28px] tracking-[0.38em] font-light uppercase transition-all duration-300 group-hover:tracking-[0.46em] ${
                  scrolled ? "text-[#201f1f]" : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                }`}
              >
                CHANDRIKA
              </span>
              <span
                className={`text-[9px] tracking-[0.45em] -mt-1 font-normal uppercase transition-all duration-300 ${
                  scrolled ? "text-[#767573]" : "text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                }`}
              >
                HAUTE BRIDAL
              </span>
            </a>

            {/* ── RIGHT NAV ── */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="#gallery" className={navLinkClass()}>EDITORIAL</a>
              <button onClick={onOpenInquiry} className={navLinkClass()}>INQUIRE</button>
              <a
                href="#boutiques"
                className={`text-[11px] tracking-[0.25em] uppercase font-medium px-5 py-2.5 border transition-all duration-300 ${
                  scrolled
                    ? "border-[#201f1f] text-[#201f1f] hover:bg-[#201f1f] hover:text-white"
                    : "border-white text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm"
                }`}
              >
                FIND A BOUTIQUE
              </a>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-opacity absolute right-6 ${
                scrolled ? "text-[#201f1f]" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ────────────────────────── MOBILE DRAWER ────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbfaf8] flex flex-col justify-center items-center gap-10 lg:hidden">
          {[
            { href: "#about", label: "PHILOSOPHY" },
            { href: "#collection", label: "COLLECTION" },
            { href: "#boutiques", label: "BOUTIQUES" },
            { href: "#gallery", label: "EDITORIAL" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl tracking-[0.25em] font-light text-[#201f1f] uppercase hover:opacity-60 transition-opacity"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            className="text-xl tracking-[0.25em] font-light text-[#201f1f] uppercase hover:opacity-60 transition-opacity"
          >
            INQUIRE
          </button>
        </div>
      )}
    </>
  );
}
