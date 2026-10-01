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
    id: "ny-kleinfeld",
    name: "Kleinfeld Bridal",
    city: "New York, NY",
    address: "110 W 20th Street, New York, NY 10011",
    country: "USA",
  },
  {
    id: "nj-castle",
    name: "Castle Couture",
    city: "Manalapan, NJ",
    address: "355 US Highway 9, Manalapan, NJ 07726",
    country: "USA",
  },
  {
    id: "va-ava",
    name: "Ava Laurenne Bride",
    city: "Fredericksburg, VA",
    address: "1001 Princess Anne St, Fredericksburg, VA 22401",
    country: "USA",
  },
  {
    id: "sc-ava",
    name: "Ava Laurenne Bride",
    city: "Greenville, SC",
    address: "3 McBeth Street, Greenville, SC 29611",
    country: "USA",
  },
  {
    id: "ca-white-flower",
    name: "The White Flower Boutique",
    city: "San Diego, CA",
    address: "2121 Fifth Avenue, Ste 100, San Diego, CA 92101",
    country: "USA",
  },
  {
    id: "ca-mon-amie",
    name: "Mon Amie Bridal Salon",
    city: "Costa Mesa, CA",
    address: "344 Bristol Street, Costa Mesa, CA 92626",
    country: "USA",
  },
  {
    id: "tx-brickhouse",
    name: "Brickhouse Bridal",
    city: "The Woodlands, TX",
    address: "207 East Shore Dr., Suite 250, The Woodlands, TX 77380",
    country: "USA",
  },
  {
    id: "mx-boemo",
    name: "Boemo Haute Bridal",
    city: "Mexico City, MX",
    address: "Calle Bosque de Duraznos 61, Mexico City 11700",
    country: "Mexico",
  },
  {
    id: "it-roma",
    name: "Il Giardino Fiorito",
    city: "Roma, IT",
    address: "Via Antonio Bertolini 24 A, Roma, Lazio 00197",
    country: "Italy",
  },
  {
    id: "it-salerno",
    name: "Atelier Diva Sposa",
    city: "Salerno, IT",
    address: "26 Via Giovanni Ruggi D'Aragona, Salerno 84121",
    country: "Italy",
  },
  {
    id: "in-mumbai",
    name: "Chandrika Atelier Flagship",
    city: "Mumbai, IN",
    address: "Kala Ghoda Art District, Fort, Mumbai 400001",
    country: "India",
  },
  {
    id: "de-boss",
    name: "Boss HochzeitsHaus",
    city: "Winsen Luhe, DE",
    address: "Luhdorfer Str. 32-34, 21423 Winsen Luhe",
    country: "Germany",
  },
];

interface BoutiqueGridProps {
  onOpenPartnerInquiry?: () => void;
}

export default function BoutiqueGrid({ onOpenPartnerInquiry }: BoutiqueGridProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("ALL");

  const regions = ["ALL", "USA", "EUROPE", "INDIA & ASIA", "MEXICO"];

  const filteredBoutiques = BOUTIQUES_DATA.filter((b) => {
    if (selectedRegion === "ALL") return true;
    if (selectedRegion === "USA") return b.country === "USA";
    if (selectedRegion === "EUROPE") return b.country === "Italy" || b.country === "Germany";
    if (selectedRegion === "INDIA & ASIA") return b.country === "India";
    if (selectedRegion === "MEXICO") return b.country === "Mexico";
    return true;
  });

  return (
    <section id="boutiques" className="px-6 md:px-12 py-24 md:py-36 w-full max-w-[1440px] mx-auto bg-[#fbfaf8]">
      <div className="mb-14">
        <span className="text-[10px] tracking-[0.3em] text-[#767573] uppercase block mb-3">
          Global Stockists & Flagships
        </span>
        <h2 className="title text-[#201f1f] max-w-4xl">
          ONLY AVAILABLE <br />
          AT SELECT <br />
          BOUTIQUES
        </h2>
      </div>

      {/* Region Filter Bar */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-[#e8e6e1] pb-4 text-[10px] tracking-widest font-medium">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`transition-colors uppercase pb-1 relative ${
              selectedRegion === region
                ? "text-[#201f1f] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#201f1f]"
                : "text-[#767573] hover:text-[#201f1f]"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Boutique Cards Grid (Matching Poeza Gold/Stone Aesthetic) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredBoutiques.map((boutique) => (
          <div
            key={boutique.id}
            className="flex flex-col justify-between items-start p-6 bg-[#ebe9e5] hover:bg-[#e4e1db] transition-all duration-300 min-h-[220px] group border border-transparent hover:border-[#d5d1c8]"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#767573]">
                <MapPin size={12} />
                <span className="text-[9px] tracking-widest uppercase">{boutique.city}</span>
              </div>
              <h3 className="text-[#201f1f] text-[15px] font-medium tracking-[0.1em] uppercase group-hover:translate-x-1 transition-transform">
                {boutique.name}
              </h3>
            </div>

            <div className="w-full pt-4 border-t border-[#dfdcd6]">
              <p className="text-[#767573] text-[10px] leading-relaxed tracking-wider uppercase mb-3">
                {boutique.address}
              </p>
              <a
                href={`mailto:concierge@chandrikabride.com?subject=Private Appointment at ${boutique.name}`}
                className="inline-flex items-center gap-1.5 text-[9px] tracking-widest text-[#201f1f] font-semibold hover:underline"
              >
                REQUEST FITTING <ArrowRight size={10} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Link Footer */}
      <div className="mt-16 text-center">
        <button
          onClick={onOpenPartnerInquiry}
          className="luxury-link text-[12px] tracking-[0.25em] text-[#201f1f] uppercase font-semibold cursor-pointer pb-1"
        >
          BECOME A STOCKIST / PARTNER
        </button>
      </div>
    </section>
  );
}
