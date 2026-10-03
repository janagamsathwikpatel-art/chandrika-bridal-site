import Image from "next/image";

export default function NewArrivalsDivider() {
  return (
    <section className="w-full bg-[#ffffff] pt-12 pb-8 px-4 md:px-10 flex flex-col items-center justify-center text-center select-none">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
        
        {/* ── Pink Bougainvillea Flower Branch (Authentic 1st Image Replacement) ── */}
        <div className="w-full flex items-center justify-center mb-6">
          {/* Left Hairline Rule */}
          <div className="flex-1 border-t border-[#d8d3c7]" />

          {/* Centered Authentic Pink Bougainvillea Flower HD Motif */}
          <div className="px-4 sm:px-8 relative flex items-center justify-center shrink-0">
            <Image
              src="/images/bougainvillea-flower-hd.png"
              alt="Pink Bougainvillea Flower HD Motif"
              width={220}
              height={135}
              className="w-[160px] sm:w-[200px] md:w-[240px] h-auto object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Right Hairline Rule */}
          <div className="flex-1 border-t border-[#d8d3c7]" />
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
