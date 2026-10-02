"use client";

export default function NewArrivalsDivider() {
  return (
    <section className="w-full bg-[#ffffff] pt-12 pb-8 px-4 md:px-10 flex flex-col items-center justify-center text-center select-none">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
        
        {/* ── Pink Bougainvillea Flower Branch with Left & Right Divider Lines ── */}
        <div className="w-full flex items-center justify-center mb-6">
          {/* Left Hairline Rule */}
          <div className="flex-1 border-t border-[#e2dfd7]" />

          {/* Centered Pink Bougainvillea Floral Motif Vector */}
          <div className="px-6 relative flex items-center justify-center">
            <svg
              width="86"
              height="54"
              viewBox="0 0 90 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-sm"
            >
              {/* Natural Branch */}
              <path
                d="M10 38C25 36 38 32 50 28C62 24 75 22 84 20"
                stroke="#6D4C41"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M32 34C36 28 42 22 46 16"
                stroke="#5D4037"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              {/* Green Leaves */}
              <path
                d="M22 36C18 30 20 22 26 24C32 26 30 34 22 36Z"
                fill="#4CAF50"
                stroke="#2E7D32"
                strokeWidth="0.8"
              />
              <path
                d="M48 24C44 18 46 12 52 14C58 16 56 22 48 24Z"
                fill="#388E3C"
                stroke="#1B5E20"
                strokeWidth="0.8"
              />
              <path
                d="M62 22C60 16 64 10 70 12C74 14 70 20 62 22Z"
                fill="#66BB6A"
                stroke="#2E7D32"
                strokeWidth="0.8"
              />

              {/* Pink / Magenta Bougainvillea Petals (Cluster 1) */}
              <path
                d="M42 16C36 10 38 2 46 4C52 6 48 14 42 16Z"
                fill="#E91E63"
                opacity="0.9"
              />
              <path
                d="M44 14C50 10 56 12 54 18C50 22 42 18 44 14Z"
                fill="#EC407A"
                opacity="0.95"
              />
              <path
                d="M38 18C34 14 36 6 42 10C46 12 42 20 38 18Z"
                fill="#F48FB1"
                opacity="0.9"
              />

              {/* Pink / Magenta Bougainvillea Petals (Cluster 2) */}
              <path
                d="M66 18C60 12 62 4 70 6C76 8 72 16 66 18Z"
                fill="#D81B60"
                opacity="0.95"
              />
              <path
                d="M68 16C74 12 80 14 78 20C74 24 66 20 68 16Z"
                fill="#E91E63"
                opacity="0.9"
              />
              <path
                d="M62 20C58 16 60 8 66 12C70 14 66 22 62 20Z"
                fill="#F06292"
                opacity="0.9"
              />

              {/* Small Petal Buds */}
              <circle cx="44" cy="12" r="1.5" fill="#FFF59D" />
              <circle cx="68" cy="14" r="1.5" fill="#FFF59D" />
            </svg>
          </div>

          {/* Right Hairline Rule */}
          <div className="flex-1 border-t border-[#e2dfd7]" />
        </div>

        {/* ── Title & Subtitles matching User Screenshot ── */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#111111] tracking-tight mb-3">
          New Arrivals
        </h2>
        <p className="text-sm md:text-base font-sans text-[#444444] font-normal tracking-wide">
          New Weave, New Vibe!
        </p>
        <p className="text-xs md:text-sm font-serif text-[#666666] tracking-wide mt-1 font-light">
          Step into the experience— and find your new go to outfit.
        </p>

      </div>
    </section>
  );
}
