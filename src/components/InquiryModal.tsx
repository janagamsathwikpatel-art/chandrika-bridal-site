"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [inquiryType, setInquiryType] = useState<"bride" | "stockist">("bride");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    city: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-[#fbfaf8] w-full max-w-xl p-8 md:p-12 relative shadow-2xl border border-[#e8e6e1] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#201f1f] hover:opacity-60 transition-opacity p-2"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="py-16 text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Check size={24} />
            </div>
            <h3 className="text-xl font-light tracking-[0.2em] text-[#201f1f] uppercase">
              Inquiry Received
            </h3>
            <p className="text-[11px] tracking-wider text-[#767573] uppercase max-w-xs">
              A member of the Chandrika concierge team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <span className="text-[9px] tracking-[0.3em] text-[#767573] uppercase block mb-2">
              Concierge Services
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.15em] text-[#201f1f] uppercase mb-6">
              PRIVATE CONSULTATION
            </h2>

            {/* Selector */}
            <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-[#ebe9e5]">
              <button
                type="button"
                onClick={() => setInquiryType("bride")}
                className={`py-2 text-[10px] tracking-widest uppercase transition-all ${
                  inquiryType === "bride" ? "bg-white text-[#201f1f] font-semibold shadow-sm" : "text-[#767573]"
                }`}
              >
                PROSPECTIVE BRIDE
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("stockist")}
                className={`py-2 text-[10px] tracking-widest uppercase transition-all ${
                  inquiryType === "stockist" ? "bg-white text-[#201f1f] font-semibold shadow-sm" : "text-[#767573]"
                }`}
              >
                BOUTIQUE / STOCKIST
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-[11px]">
              <div>
                <label className="block text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#f4f3f0] border border-[#e8e6e1] px-4 py-2.5 text-[#201f1f] focus:outline-none focus:border-[#201f1f]"
                  placeholder="E.G. ELEANOR VANCE"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f4f3f0] border border-[#e8e6e1] px-4 py-2.5 text-[#201f1f] focus:outline-none focus:border-[#201f1f]"
                    placeholder="NAME@DOMAIN.COM"
                  />
                </div>
                <div>
                  <label className="block text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#f4f3f0] border border-[#e8e6e1] px-4 py-2.5 text-[#201f1f] focus:outline-none focus:border-[#201f1f]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                    PREFERRED CITY / BOUTIQUE
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#f4f3f0] border border-[#e8e6e1] px-4 py-2.5 text-[#201f1f] focus:outline-none focus:border-[#201f1f]"
                    placeholder="E.G. NEW YORK / MUMBAI"
                  />
                </div>
                <div>
                  <label className="block text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                    WEDDING / EVENT DATE
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full bg-[#f4f3f0] border border-[#e8e6e1] px-4 py-2.5 text-[#201f1f] focus:outline-none focus:border-[#201f1f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] tracking-widest text-[#767573] uppercase mb-1">
                  NOTES OR SPECIFIC SILHOUETTE INQUIRY
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f4f3f0] border border-[#e8e6e1] px-4 py-2.5 text-[#201f1f] focus:outline-none focus:border-[#201f1f]"
                  placeholder="Tell us about your wedding vision or boutique retail profile..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3.5 bg-[#201f1f] text-white hover:bg-black transition-colors uppercase tracking-[0.2em] font-medium text-[10px]"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
