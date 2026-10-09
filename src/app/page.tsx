"use client";

import React, { useState } from "react";
import { OpeningExperience } from "@/components/intro/OpeningExperience";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { QuoteSection } from "@/components/quotes/QuoteSection";
import { InteractiveLetter } from "@/components/letter/InteractiveLetter";
import { PhotoTimeline } from "@/components/timeline/PhotoTimeline";
import { HeartWall } from "@/components/heartwall/HeartWall";
import { WishesSection } from "@/components/wishes/WishesSection";
import { FinalSurprise } from "@/components/final/FinalSurprise";
import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { BackgroundParticles } from "@/components/common/BackgroundParticles";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0d0614] text-slate-100 overflow-x-hidden selection:bg-rose-500/30 selection:text-rose-200">
      {/* 1. Opening Experience (Full Screen Intro Overlay) */}
      {!hasEntered && (
        <OpeningExperience onEnterUniverse={() => setHasEntered(true)} />
      )}

      {/* 2. Persistent Ambient Background Particles (Petals & Twinkling Stars) */}
      <BackgroundParticles />

      {/* 3. Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 4. Hero Section ("The Girl Who Makes Everything Brighter") */}
      <HeroSection />

      {/* 5. Photo Gallery ("A Constellation of Her Beautiful Moments") */}
      <PhotoGallery />

      {/* 6. Animated Quote Section ("The Things That Make You Special") */}
      <QuoteSection />

      {/* 7. Interactive Love Letter 💌 */}
      <InteractiveLetter />

      {/* 8. Photo Timeline ("Little Moments, Endless Warmth") */}
      <PhotoTimeline />

      {/* 9. Interactive Heart Wall */}
      <HeartWall />

      {/* 10. A Little Wish For You ✨ */}
      <WishesSection />

      {/* 11. Final Surprise ("One Last Thing, Akhi ❤️") */}
      <FinalSurprise />

      {/* 12. Floating Audio Player with Web Audio Synthesizer Fallback */}
      <AudioPlayer />

      {/* 13. Footer with "Developed by CRP(-2)" Signature */}
      <Footer />
    </main>
  );
}
