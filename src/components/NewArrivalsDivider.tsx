import Image from "next/image";

export default function NewArrivalsDivider() {
  return (
    <section className="w-full bg-[#ffffff] py-1 px-4 md:px-10 flex flex-col items-center justify-center text-center select-none">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col items-center">
        
        {/* ── Pink Bougainvillea Flower Branch ── */}
        <div className="w-full flex items-center justify-center my-0">
          {/* Left Hairline Rule */}
          <div className="flex-1 border-t border-[#d8d3c7]" />

          {/* Centered Authentic Pink Bougainvillea Flower HD Motif */}
          <div className="px-4 sm:px-8 relative flex items-center justify-center shrink-0">
            <Image
              src="/images/bougainvillea-flower-hd.png"
              alt="Pink Bougainvillea Flower HD Motif"
              width={220}
              height={135}
              className="w-[140px] sm:w-[170px] md:w-[200px] h-auto object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Right Hairline Rule */}
          <div className="flex-1 border-t border-[#d8d3c7]" />
        </div>
      </div>
    </section>
  );
}
