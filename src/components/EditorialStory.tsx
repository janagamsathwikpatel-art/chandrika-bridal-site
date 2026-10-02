"use client";

import Image from "next/image";

interface EditorialStoryProps {
  onOpenInquiry?: () => void;
}

export default function EditorialStory({ onOpenInquiry }: EditorialStoryProps) {
  return (
    <section id="about" className="w-full bg-[#fdfbf7] py-10 md:py-16 border-t border-[#e8e6e1] select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 100% Exact User Graphic: The Handloom Story Composite ── */}
        <div
          onClick={onOpenInquiry}
          className="group cursor-pointer relative w-full rounded-2xl overflow-hidden shadow-lg border border-[#e5d9c7] bg-[#fbf8f3] hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src="/images/handloom-story-full.jpg"
            alt="The Handloom Story - Woven by Generations"
            width={2048}
            height={1365}
            priority
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700"
            sizes="(max-width: 1400px) 100vw, 1380px"
          />
        </div>

      </div>
    </section>
  );
}
