"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceArchSection from "@/components/ExperienceArchSection";
import EditorialStory from "@/components/EditorialStory";
import CollectionShowcase from "@/components/CollectionShowcase";
import BoutiqueGrid from "@/components/BoutiqueGrid";
import LayeredGallery from "@/components/LayeredGallery";
import InquirySection from "@/components/InquirySection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#595955] flex flex-col items-center justify-start overflow-x-hidden">
      {/* Fixed Luxury Navigation Header */}
      <Header onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Hero Video with Large Typographic Scroll Reveal — 100% UNTOUCHED */}
      <Hero />

      {/* Stitching Stories Archway & Saree Collection Experience — DIRECTLY BELOW HERO */}
      <ExperienceArchSection onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Editorial Story & Brand Philosophy */}
      <EditorialStory />

      {/* Haute Couture Silhouettes Lookbook */}
      <CollectionShowcase onSelectLook={() => setInquiryModalOpen(true)} />

      {/* Select Boutiques & Stockists Grid */}
      <BoutiqueGrid onOpenPartnerInquiry={() => setInquiryModalOpen(true)} />

      {/* Visual Narrative Layered Editorial Gallery */}
      <LayeredGallery />

      {/* Stay in the loop & Bespoke Appointment CTA */}
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
