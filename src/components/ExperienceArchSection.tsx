"use client";

import { useState } from "react";
import Image from "next/image";
import ShopByCategory from "./ShopByCategory";

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function ExperienceArchSection({
  onOpenInquiry,
  onSelectCategory,
}: ExperienceArchSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoors = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="experience"
      className="relative w-screen overflow-hidden flex flex-col items-center justify-center transition-all duration-700"
      style={{
        minHeight: isOpen ? "auto" : "100vh",
        backgroundColor: "#05084a",
      }}
    >
      {/* ── Outer Section Container ── */}
      {!isOpen ? (
        <div
          className="relative w-full overflow-hidden flex flex-col items-center justify-center"
          style={{
            height: "100vh",
            minHeight: "700px",
            backgroundColor: "#05084a",
          }}
        >
          {/* Deep Royal Blue Backdrop visible through arch hole */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              backgroundColor: "#05084a",
              backgroundImage:
                "radial-gradient(circle at 50% 55%, #080d69 0%, #05084a 55%, #030536 100%)",
            }}
          />

          {/* Stone Wall Background Frame */}
          <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            <img
              src="/images/arch-background.webp"
              alt="Experience Wall Background"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* Sliding Left Door */}
          <div
            className="absolute top-0 bottom-0 left-0 w-1/2 z-15 transition-transform duration-1000 ease-in-out pointer-events-auto cursor-pointer"
            style={{
              transform: isOpen ? "translateX(-100%)" : "translateX(0)",
            }}
            onClick={toggleDoors}
          >
            <img
              src="/images/door-left.png"
              alt="Left Door"
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* Sliding Right Door */}
          <div
            className="absolute top-0 bottom-0 right-0 w-1/2 z-15 transition-transform duration-1000 ease-in-out pointer-events-auto cursor-pointer"
            style={{
              transform: isOpen ? "translateX(100%)" : "translateX(0)",
            }}
            onClick={toggleDoors}
          >
            <img
              src="/images/door-right.png"
              alt="Right Door"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* Center Typography & Explore Button */}
          <div
            className={`relative z-20 flex flex-col items-center justify-center text-center px-4 select-none transition-opacity duration-500 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            style={{
              marginTop: "clamp(20px, 4vh, 60px)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(12px, 1.3vw, 16px)",
                letterSpacing: "0.38em",
                fontWeight: 500,
                color: "#ffffff",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              EXPERIENCE
            </span>

            <h2
              style={{
                fontFamily: "'Anton', 'Impact', sans-serif",
                fontSize: "clamp(42px, 6.5vw, 86px)",
                letterSpacing: "0.02em",
                lineHeight: "0.95",
                color: "#ffffff",
                textTransform: "uppercase",
                margin: 0,
                padding: 0,
                marginBottom: "38px",
                textShadow: "0 4px 24px rgba(0,0,0,0.85)",
              }}
            >
              SAREE COLLECTION
            </h2>

            <button
              onClick={toggleDoors}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 42px",
                border: "1.5px solid #ffffff",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: "clamp(11px, 1.1vw, 13px)",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.35s ease",
                textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#05084a";
                e.currentTarget.style.textShadow = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.textShadow = "0 1px 6px rgba(0,0,0,0.7)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              EXPLORE THE COLLECTION
            </button>
          </div>
        </div>
      ) : (
        /* Revealed Inner Section: Shop By Category inside Wall Door */
        <div className="w-full bg-[#fbfaf8] relative animate-fadeIn">
          {/* Header bar allowing user to close the doors */}
          <div className="w-full bg-[#05084a] text-white py-3 px-6 flex items-center justify-between shadow-md">
            <span className="text-xs font-semibold tracking-widest uppercase">
              CHANDRIKA ARCHWAY — SHOP BY CATEGORY
            </span>
            <button
              onClick={toggleDoors}
              className="text-xs font-medium tracking-wider uppercase border border-white/40 px-3 py-1 hover:bg-white hover:text-[#05084a] transition-all"
            >
              CLOSE DOORS ✕
            </button>
          </div>

          <ShopByCategory onSelectCategory={onSelectCategory} />
        </div>
      )}
    </section>
  );
}
