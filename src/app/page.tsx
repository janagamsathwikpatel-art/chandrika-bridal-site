"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceArchSection from "@/components/ExperienceArchSection";
import CustomerFavourites from "@/components/CustomerFavourites";
import SareeCollection from "@/components/SareeCollection";
import EditorialStory from "@/components/EditorialStory";
import InquirySection from "@/components/InquirySection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("SHOP ALL");

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#595955] flex flex-col items-center justify-start overflow-x-hidden">
      {/* Fixed Luxury Navigation Header */}
      <Header
        onOpenInquiry={() => setInquiryModalOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Hero Video (100% Unchanged) */}
      <Hero />

      {/* Experience Architectural Arch Section with Door Opening & Shop By Category */}
      <ExperienceArchSection
        onOpenInquiry={() => setInquiryModalOpen(true)}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Customer Favourites Slider matching user screenshot */}
      <CustomerFavourites onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Featured Products Saree Collection Grid with active category filter */}
      <SareeCollection
        onOpenInquiry={() => setInquiryModalOpen(true)}
        selectedCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Editorial Story & Brand Philosophy */}
      <EditorialStory />

      {/* Why Choose Chandrika & Bespoke Appointment CTA */}
      <InquirySection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Editorial Luxury Footer */}
      <Footer />

      {/* Private Consultation & Stockist Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </main>
  );
}
