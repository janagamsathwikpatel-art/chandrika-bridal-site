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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════ HEADER ═══════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(251,250,248,0.95)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232,230,225,0.9)" : "none",
          padding: scrolled ? "10px 0 6px 0" : "18px 0 10px 0",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1680px",
            margin: "0 auto",
            padding: "0 clamp(20px, 3.5vw, 56px)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "48px",
          }}
        >
          {/* ── LEFT SAREE CATEGORIES (Kept on Left Side of Header) ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 1.8vw, 32px)",
              justifyContent: "flex-start",
            }}
            className="hidden lg:flex"
          >
            {[
              { label: "NEW ARRIVALS", href: "#sarees" },
              { label: "KANCHIPURAM", href: "#sarees" },
              { label: "BANARASI", href: "#sarees" },
              { label: "OCCASIONS", href: "#sarees" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: "clamp(10.5px, 0.85vw, 12px)",
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: scrolled ? "#201f1f" : "#ffffff",
                  textDecoration: "none",
                  textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.85)",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? "#8B0000" : "#ffd700";
                  e.currentTarget.style.opacity = "0.75";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? "#201f1f" : "#ffffff";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── CENTER BRAND (True Center of Header) ── */}
          <a
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              transition: "all 0.3s",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 2.2vw, 28px)",
                letterSpacing: "0.38em",
                fontWeight: 300,
                textTransform: "uppercase",
                color: scrolled ? "#201f1f" : "#ffffff",
                textShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.85)",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
              }}
            >
              CHANDRIKA
            </span>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                fontWeight: 400,
                textTransform: "uppercase",
                color: scrolled ? "#767573" : "rgba(255,255,255,0.85)",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.8)",
                marginTop: "-2px",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
              }}
            >
              HAUTE BRIDAL SAREES
            </span>
          </a>

          {/* ── RIGHT SAREE CATEGORIES (Kept on Right Side of Header) ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 1.8vw, 32px)",
              justifyContent: "flex-end",
            }}
            className="hidden lg:flex"
          >
            {[
              { label: "DESIGNED BY CHANDRIKA", href: "#sarees" },
              { label: "SHOP ALL", href: "#sarees" },
              { label: "READYMADES", href: "#sarees" },
              { label: "FABRICS", href: "#sarees" },
              { label: "MORE", href: "#why-chandrika" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: "clamp(10.5px, 0.85vw, 12px)",
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: scrolled ? "#201f1f" : "#ffffff",
                  textDecoration: "none",
                  textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.85)",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? "#8B0000" : "#ffd700";
                  e.currentTarget.style.opacity = "0.75";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? "#201f1f" : "#ffffff";
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── MOBILE HAMBURGER (Visible on mobile & tablet) ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#201f1f" : "#ffffff",
              textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.8)",
              padding: "8px",
            }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Saree Categories Strip for Mobile / Tablet screens (< lg) ── */}
        <div
          className="flex lg:hidden items-center justify-start border-t mt-2.5 pt-2 overflow-x-auto no-scrollbar"
          style={{
            borderColor: scrolled ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.2)",
            gap: "18px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "100%",
          }}
        >
          {[
            { label: "NEW ARRIVALS", href: "#sarees" },
            { label: "KANCHIPURAM", href: "#sarees" },
            { label: "BANARASI", href: "#sarees" },
            { label: "OCCASIONS", href: "#sarees" },
            { label: "DESIGNED BY CHANDRIKA", href: "#sarees" },
            { label: "SHOP ALL", href: "#sarees" },
            { label: "READYMADES", href: "#sarees" },
            { label: "FABRICS", href: "#sarees" },
            { label: "MORE", href: "#why-chandrika" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                fontWeight: 600,
                textTransform: "uppercase",
                color: scrolled ? "#201f1f" : "#ffffff",
                textDecoration: "none",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.85)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </header>

      {/* ═══════════════════════════ MOBILE DRAWER ═══════════════════════════ */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "#fbfaf8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "40px 24px",
            overflowY: "auto",
          }}
        >
          {[
            { href: "#sarees", label: "NEW ARRIVALS" },
            { href: "#sarees", label: "KANCHIPURAM" },
            { href: "#sarees", label: "BANARASI" },
            { href: "#sarees", label: "OCCASIONS" },
            { href: "#sarees", label: "DESIGNED BY CHANDRIKA" },
            { href: "#sarees", label: "SHOP ALL" },
            { href: "#sarees", label: "READYMADES" },
            { href: "#sarees", label: "FABRICS" },
            { href: "#why-chandrika", label: "WHY CHANDRIKA" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "14px",
                letterSpacing: "0.22em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#201f1f",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            style={{
              marginTop: "12px",
              fontSize: "12px",
              letterSpacing: "0.24em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#ffffff",
              backgroundColor: "#201f1f",
              padding: "12px 28px",
              border: "none",
              cursor: "pointer",
            }}
          >
            BOOK CONSULTATION
          </button>
        </div>
      )}
    </>
  );
}
