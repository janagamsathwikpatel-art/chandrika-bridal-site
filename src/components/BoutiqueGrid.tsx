"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

interface Boutique {
  id: string;
  name: string;
  city: string;
  address: string;
  country: string;
  phone?: string;
}

const BOUTIQUES_DATA: Boutique[] = [
  {
    id: "in-mumbai",
    name: "Chandrika Flagship Atelier",
    city: "Mumbai",
    address: "Kala Ghoda Art District, Fort, Mumbai 400001",
    country: "India",
    phone: "+91 22 4980 1200",
  },
  {
    id: "in-delhi",
    name: "Chandrika Heritage Salon",
    city: "New Delhi",
    address: "One Style Mile, Mehrauli, New Delhi 110030",
    country: "India",
    phone: "+91 11 2680 4400",
  },
  {
    id: "in-chennai",
    name: "Kanchipuram Silk Weavers House",
    city: "Chennai",
    address: "Khader Nawaz Khan Rd, Nungambakkam, Chennai 600006",
    country: "India",
    phone: "+91 44 2833 9100",
  },
  {
    id: "in-hyderabad",
    name: "Royal Draping Atelier",
    city: "Hyderabad",
    address: "Road No. 36, Jubilee Hills, Hyderabad 500033",
    country: "India",
    phone: "+91 40 4012 8800",
  },
  {
    id: "in-bangalore",
    name: "Pure Silk Lounge",
    city: "Bengaluru",
    address: "Lavelle Road, Shanthala Nagar, Bengaluru 560001",
    country: "India",
    phone: "+91 80 4150 7700",
  },
  {
    id: "in-kolkata",
    name: "Bengal & Banaras Atelier",
    city: "Kolkata",
    address: "Queens Mansion, Park Street, Kolkata 700016",
    country: "India",
    phone: "+91 33 2229 5500",
  },
  {
    id: "uk-london",
    name: "Chandrika Mayfair Salon",
    city: "London",
    address: "Mount Street, Mayfair, London W1K 2PB",
    country: "UK",
    phone: "+44 20 7493 8810",
  },
  {
    id: "us-nyc",
    name: "Chandrika Fifth Avenue Bridal",
    city: "New York",
    address: "650 Fifth Avenue, New York, NY 10019",
    country: "USA",
    phone: "+1 212 586 3300",
  },
];

interface BoutiqueGridProps {
  onOpenPartnerInquiry?: () => void;
}

export default function BoutiqueGrid({ onOpenPartnerInquiry }: BoutiqueGridProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("ALL");

  const countries = ["ALL", "India", "UK", "USA"];

  const filteredBoutiques =
    selectedCountry === "ALL"
      ? BOUTIQUES_DATA
      : BOUTIQUES_DATA.filter((b) => b.country === selectedCountry);

  return (
    <section id="boutiques" className="py-24 md:py-36 bg-[#fbfaf8] px-6 md:px-12 border-t border-[#e8e6e1]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-[#201f1f]/20">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#767573] uppercase block mb-2 font-semibold">
              Atelier Locator • Handloom Salons
            </span>
            <h2 className="title text-[#201f1f]">CHANDRIKA ATELIERS</h2>
          </div>
          <p className="mt-4 md:mt-0 text-[11px] tracking-widest text-[#595955] max-w-sm uppercase leading-relaxed">
            Experience our six yards of living heritage in person. Visit our bespoke ateliers for private draping sessions with our master drapers.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-[#e8e6e1] pb-4">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`text-[11px] tracking-widest uppercase transition-all duration-300 pb-2 border-b-2 font-medium ${
                selectedCountry === c
                  ? "border-[#201f1f] text-[#201f1f]"
                  : "border-transparent text-[#767573] hover:text-[#201f1f]"
              }`}
            >
              {c === "ALL" ? "All Ateliers" : c}
            </button>
          ))}
        </div>

        {/* Ateliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBoutiques.map((b) => (
            <div
              key={b.id}
              className="p-6 bg-[#f4f3f0] border border-[#e8e6e1] flex flex-col justify-between hover:border-[#201f1f] transition-all duration-300 group hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 text-[#767573]">
                  <MapPin size={14} className="text-[#8B0000]" />
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#201f1f]">
                    {b.city}, {b.country}
                  </span>
                </div>
                <h3 className="text-[14px] font-medium tracking-wide text-[#201f1f] uppercase mb-2">
                  {b.name}
                </h3>
                <p className="text-[11px] text-[#595955] leading-relaxed uppercase tracking-wider mb-6">
                  {b.address}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e6e1]">
                {b.phone && (
                  <p className="text-[10px] tracking-widest text-[#767573] uppercase mb-3 flex items-center gap-2">
                    <Phone size={11} /> {b.phone}
                  </p>
                )}
                <button
                  onClick={onOpenPartnerInquiry}
                  className="luxury-link text-[10px] tracking-widest text-[#201f1f] uppercase font-semibold flex items-center gap-1.5"
                >
                  SCHEDULE PRIVATE DRAPING <ArrowRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
