"use client";

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
}

export default function ExperienceArchSection({ onOpenInquiry }: ExperienceArchSectionProps) {
  return (
    <section
      id="experience"
      className="relative w-screen overflow-hidden flex flex-col items-center justify-center"
      style={{
        height: "100vh",
        minHeight: "700px",
        backgroundColor: "#05084a",
      }}
    >
      {/* ── Deep Royal Blue Backdrop (Visible through the arch hole) ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundColor: "#05084a",
          backgroundImage: "radial-gradient(circle at 50% 55%, #080d69 0%, #05084a 55%, #030536 100%)",
        }}
      />

      {/* ── Stone Wall Background with Transparent Arch Opening ── */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <img
          src="/images/arch-background.webp"
          alt="Experience Wall Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* ── Center Typography: Full Font Presentation ── */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 select-none"
        style={{
          marginTop: "clamp(20px, 4vh, 60px)",
        }}
      >
        {/* Small Top Label: EXPERIENCE */}
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

        {/* Large Bold Condensed Headline: THE SAREE COLLECTION */}
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

        {/* Outlined Button: EXPLORE THE COLLECTION */}
        <a
          href="#sarees"
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
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.textShadow = "0 1px 6px rgba(0,0,0,0.7)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          EXPLORE THE COLLECTION
        </a>
      </div>
    </section>
  );
}
