"use client";

interface ExperienceArchSectionProps {
  onOpenInquiry?: () => void;
}

export default function ExperienceArchSection({ onOpenInquiry }: ExperienceArchSectionProps) {
  return (
    <a
      id="experience"
      href="#sarees"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center cursor-pointer group block"
      style={{
        height: "clamp(260px, 38vh, 420px)",
        backgroundColor: "#05084a",
      }}
      aria-label="Explore Saree Collection"
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
          className="w-full h-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </a>
  );
}
