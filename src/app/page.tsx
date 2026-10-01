"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceArchSection from "@/components/ExperienceArchSection";
import SareeCollection from "@/components/SareeCollection";
import EditorialStory from "@/components/EditorialStory";
import CollectionShowcase from "@/components/CollectionShowcase";
import BoutiqueGrid from "@/components/BoutiqueGrid";
import InquirySection from "@/components/InquirySection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#595955] flex flex-col items-center justify-start overflow-x-hidden">
      {/* Fixed Luxury Navigation Header */}
      <Header onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Hero Video (100% Unchanged) */}
      <Hero />

      {/* Experience The Saree Collection Architectural Arch Section */}
      <ExperienceArchSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* The Saree Collection Grid directly on the website */}
      <SareeCollection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Editorial Story & Brand Philosophy */}
      <EditorialStory />

      {/* Haute Couture Silhouettes Lookbook */}
      <CollectionShowcase onSelectLook={() => setInquiryModalOpen(true)} />

      {/* Select Boutiques & Stockists Grid */}
      <BoutiqueGrid onOpenPartnerInquiry={() => setInquiryModalOpen(true)} />

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
