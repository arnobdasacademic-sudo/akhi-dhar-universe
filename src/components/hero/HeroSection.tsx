"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Mail, Compass } from "lucide-react";
import { AkhiImage } from "../common/AkhiImage";
import { HERO_PHOTO } from "@/data/akhiPhotos";

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Soft lighting rays backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-rose-600/15 via-purple-600/20 to-amber-400/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* MOBILE ORDER: Photo comes first on mobile (lg:order-2), text below (lg:order-1) */}
        
        {/* TEXT CONTENT (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-sans-ui mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Dedicated to a very special person</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/50" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif-romantic text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-100 leading-[1.15] tracking-tight mb-4"
          >
            Somewhere Between a Thousand Beautiful Things,{" "}
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 text-glow-pink">
              My Eyes Found You.
            </span>
          </motion.h1>

          {/* Sub-headline: Akhi Dhar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <h2 className="font-handwritten text-4xl sm:text-5xl lg:text-6xl text-rose-300 tracking-wide font-normal">
              Akhi Dhar
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-slate-300/90 text-base sm:text-lg lg:text-xl font-sans-ui max-w-xl font-light leading-relaxed mb-8"
          >
            Your smile has a way of making ordinary moments feel extraordinary.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollTo("gallery")}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white font-medium text-base font-sans-ui shadow-[0_0_25px_rgba(244,114,182,0.4)] hover:shadow-[0_0_40px_rgba(244,114,182,0.7)] border border-rose-300/30 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Compass className="w-5 h-5 text-rose-200 group-hover:rotate-45 transition-transform duration-500" />
              <span>Explore Your Universe ✨</span>
            </button>

            <button
              onClick={() => scrollTo("letter")}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 hover:bg-rose-500/10 border border-white/15 hover:border-rose-400/40 text-rose-200 hover:text-white font-medium text-base font-sans-ui backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Mail className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
              <span>A Little Letter for You 💌</span>
            </button>
          </motion.div>
        </div>

        {/* FEATURED PHOTO COMPOSITION (lg:col-span-5) (Order 1 on mobile) */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md aspect-[3/4] animate-float"
          >
            {/* Soft glowing halo behind frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-rose-500/30 via-purple-500/20 to-amber-300/30 blur-2xl opacity-80 animate-pulse-glow" />

            {/* Glowing animated frame container */}
            <div className="relative w-full h-full rounded-3xl p-3 bg-gradient-to-b from-rose-400/30 via-purple-500/20 to-pink-500/30 border border-rose-300/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden light-sweep">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <AkhiImage
                  src={HERO_PHOTO.src}
                  alt={HERO_PHOTO.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fallbackTitle="Akhi Dhar"
                />

                {/* Subtle vignette gradient over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614]/80 via-transparent to-transparent opacity-60" />

                {/* Photo Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span className="font-serif-romantic text-sm text-rose-100 tracking-wide font-medium">
                      Akhi Dhar
                    </span>
                  </div>
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-500/50" />
                </div>
              </div>
            </div>

            {/* Floating decorative elements around photo */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-rose-500/20 border border-rose-300/50 flex items-center justify-center backdrop-blur-md animate-bounce" style={{ animationDuration: "4s" }}>
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>

            <div className="absolute -bottom-4 -left-3 w-12 h-12 rounded-full bg-purple-500/20 border border-purple-300/50 flex items-center justify-center backdrop-blur-md animate-pulse">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400/40" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
