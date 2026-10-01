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
          padding: scrolled ? "14px 0" : "28px 0",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── LEFT NAV (desktop) ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
            className="hidden lg:flex"
          >
            {["PHILOSOPHY", "SAREES", "WHY CHANDRIKA"].map((label, i) => (
              <a
                key={label}
                href={["#about", "#sarees", "#why-chandrika"][i]}
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: scrolled ? "#201f1f" : "#ffffff",
                  textDecoration: "none",
                  textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.7)",
                  transition: "opacity 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── CENTER BRAND ── */}
          <a
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 2vw, 28px)",
                letterSpacing: "0.38em",
                fontWeight: 300,
                textTransform: "uppercase",
                color: scrolled ? "#201f1f" : "#ffffff",
                textShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.8)",
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

          {/* ── RIGHT NAV (desktop) ── */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "40px" }}
            className="hidden lg:flex"
          >
            {[
              { label: "SILHOUETTES", href: "#collection" },
              { label: "INQUIRE", href: null },
            ].map(({ label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: scrolled ? "#201f1f" : "#ffffff",
                    textDecoration: "none",
                    textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.7)",
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {label}
                </a>
              ) : (
                <button
                  key={label}
                  onClick={onOpenInquiry}
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: scrolled ? "#201f1f" : "#ffffff",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.7)",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.2s",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {label}
                </button>
              )
            )}

            {/* EXPLORE SAREES button */}
            <a
              href="#sarees"
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                fontWeight: 500,
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "10px 20px",
                border: scrolled ? "1px solid #201f1f" : "1px solid rgba(255,255,255,0.9)",
                color: scrolled ? "#201f1f" : "#ffffff",
                background: scrolled ? "transparent" : "rgba(255,255,255,0.1)",
                backdropFilter: scrolled ? "none" : "blur(4px)",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = scrolled ? "#201f1f" : "#ffffff";
                e.currentTarget.style.color = scrolled ? "#ffffff" : "#201f1f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = scrolled ? "transparent" : "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = scrolled ? "#201f1f" : "#ffffff";
              }}
            >
              EXPLORE SAREES
            </a>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            style={{
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
            gap: "36px",
          }}
        >
          {[
            { href: "#about", label: "PHILOSOPHY" },
            { href: "#sarees", label: "SAREES" },
            { href: "#collection", label: "SILHOUETTES" },
            { href: "#why-chandrika", label: "WHY CHANDRIKA" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "20px",
                letterSpacing: "0.25em",
                fontWeight: 300,
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
              fontSize: "20px",
              letterSpacing: "0.25em",
              fontWeight: 300,
              textTransform: "uppercase",
              color: "#201f1f",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            INQUIRE
          </button>
        </div>
      )}
    </>
  );
}
