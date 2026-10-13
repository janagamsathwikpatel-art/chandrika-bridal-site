"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenInquiry?: () => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function Header({
  onOpenInquiry,
  activeCategory = "SHOP ALL",
  onSelectCategory,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string
  ) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(label);
    }
    const targetId = href.startsWith("#") ? href.substring(1) : href;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 70;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.href = href;
    }
    setMobileMenuOpen(false);
  };

  const leftNavItems = [
    { label: "NEW ARRIVALS", href: "#sarees" },
    { label: "KANCHIPURAM", href: "#sarees" },
    { label: "BANARASI", href: "#sarees" },
    { label: "OCCASIONS", href: "#sarees" },
  ];

  const rightNavItems = [
    { label: "DESIGNED BY ROSEPETAL", href: "#sarees" },
    { label: "SHOP ALL", href: "#sarees" },
    { label: "FABRICS", href: "#sarees" },
    { label: "MORE", href: "#why-chandrika" },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

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
          background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 75%, transparent 100%)",
          backdropFilter: "blur(6px)",
          borderBottom: "none",
          padding: scrolled ? "10px 0 6px 0" : "18px 0 10px 0",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1680px",
            margin: "0 auto",
            padding: "0 clamp(16px, 2.5vw, 48px)",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            columnGap: "clamp(16px, 2.5vw, 36px)",
            minHeight: "48px",
          }}
        >
          {/* ── LEFT SAREE CATEGORIES ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1.2vw, 22px)",
              justifyContent: "flex-start",
            }}
            className="hidden lg:flex"
          >
            {leftNavItems.map(({ label, href }) => {
              const isActive = activeCategory === label;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, label, href)}
                  style={{
                    fontSize: "clamp(10px, 0.76vw, 11.5px)",
                    letterSpacing: "0.14em",
                    fontWeight: isActive ? 700 : 600,
                    textTransform: "uppercase",
                    color: isActive ? "#ffd700" : "#ffffff",
                    textDecoration: "none",
                    borderBottom: isActive ? "2px solid #ffd700" : "2px solid transparent",
                    paddingBottom: "2px",
                    textShadow: "0 1px 4px rgba(0,0,0,0.85)",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#ffd700";
                      e.currentTarget.style.opacity = "0.85";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.opacity = "1";
                    }
                  }}
                >
                  {label}
                </a>
              );
            })}
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
              justifySelf: "center",
              padding: "0 12px",
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 2.2vw, 28px)",
                letterSpacing: "0.38em",
                fontWeight: 300,
                textTransform: "uppercase",
                color: "#ffffff",
                textShadow: "0 2px 8px rgba(0,0,0,0.85)",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
              }}
            >
              ROSEPETAL
            </span>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.45em",
                fontWeight: 400,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                marginTop: "-2px",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
              }}
            >
              DESIGNER BOUTIQUE
            </span>
          </a>

          {/* ── RIGHT SAREE CATEGORIES ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              justifySelf: "end",
              width: "100%",
            }}
          >
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(8px, 1.2vw, 22px)",
                justifyContent: "flex-end",
              }}
              className="hidden lg:flex"
            >
              {rightNavItems.map(({ label, href }) => {
                const isActive = activeCategory === label;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleNavClick(e, label, href)}
                    style={{
                      fontSize: "clamp(10px, 0.76vw, 11.5px)",
                      letterSpacing: "0.14em",
                      fontWeight: isActive ? 700 : 600,
                      textTransform: "uppercase",
                      color: isActive ? "#ffd700" : "#ffffff",
                      textDecoration: "none",
                      borderBottom: isActive ? "2px solid #ffd700" : "2px solid transparent",
                      paddingBottom: "2px",
                      textShadow: "0 1px 4px rgba(0,0,0,0.85)",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#ffd700";
                        e.currentTarget.style.opacity = "0.85";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.opacity = "1";
                      }
                    }}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
              style={{
                marginLeft: "auto",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ffffff",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                padding: "8px",
              }}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile/Tablet Category Strip ── */}
        <div
          className="flex lg:hidden items-center justify-start border-t mt-2.5 pt-2 overflow-x-auto no-scrollbar"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            gap: "18px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "100%",
          }}
        >
          {allNavItems.map(({ label, href }) => {
            const isActive = activeCategory === label;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, label, href)}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  fontWeight: isActive ? 700 : 600,
                  textTransform: "uppercase",
                  color: isActive ? "#ffd700" : "#ffffff",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid #ffd700" : "none",
                  paddingBottom: "2px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  textShadow: "0 1px 4px rgba(0,0,0,0.85)",
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      </header>

      {/* ═══════════════════════════ MOBILE DRAWER ═══════════════════════════ */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "#1c040d",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "40px 24px",
            overflowY: "auto",
          }}
        >
          {allNavItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, label, href)}
              style={{
                fontSize: "14px",
                letterSpacing: "0.22em",
                fontWeight: activeCategory === label ? 700 : 500,
                textTransform: "uppercase",
                color: activeCategory === label ? "#ffd700" : "#ffffff",
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
              color: "#05084a",
              backgroundColor: "#ffd700",
              padding: "12px 28px",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            BOOK CONSULTATION
          </button>
        </div>
      )}
    </>
  );
}
