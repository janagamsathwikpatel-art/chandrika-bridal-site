"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface InquirySectionProps {
  onOpenInquiry?: () => void;
}

export default function InquirySection({ onOpenInquiry }: InquirySectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-36 bg-[#fbfaf8] px-6 md:px-12 flex flex-col justify-center items-center text-center">
      <div className="max-w-[1000px] mx-auto w-full">
        {/* Poeza-style 'Stay In The Loop' Big Typography */}
        <h2 className="title text-[#201f1f] mb-8 leading-[0.85] select-none">
          <span className="inline-block">STAY</span>
          <br />
          <span className="inline-block md:pl-24">IN THE</span>
          <br />
          <span className="inline-flex items-center justify-center gap-4">
            <span>LOOP</span>
            <span className="inline-block w-8 h-8 md:w-16 md:h-16 rounded-full border border-[#201f1f] flex-shrink-0 animate-pulse" />
          </span>
        </h2>

        <p className="text-[11px] md:text-[13px] tracking-[0.25em] text-[#767573] uppercase max-w-md mx-auto mb-10 leading-relaxed">
          Be the first to receive private previews of new collections, trunk show dates, and atelier
          newsletters.
        </p>

        {/* Minimalist Email Input Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex items-center border-b border-[#201f1f] pb-3 pt-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL ADDRESS"
            required
            className="bg-transparent flex-grow text-[#201f1f] text-[11px] tracking-widest placeholder-[#a8a59e] focus:outline-none uppercase"
          />
          <button
            type="submit"
            className="text-[#201f1f] hover:translate-x-1 transition-transform p-1"
            aria-label="Subscribe"
          >
            <ArrowRight size={16} />
          </button>
        </form>

        {submitted && (
          <div className="mt-4 flex items-center justify-center gap-2 text-emerald-700 text-[10px] tracking-widest uppercase animate-fadeIn">
            <CheckCircle2 size={14} />
            <span>Thank you. You have been added to our private register.</span>
          </div>
        )}

        <div className="mt-12">
          <button
            onClick={onOpenInquiry}
            className="px-8 py-3.5 bg-[#201f1f] text-white hover:bg-black transition-all duration-300 text-[11px] tracking-[0.25em] uppercase font-medium shadow-sm hover:shadow"
          >
            REQUEST BESPOKE BRIDAL CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
