"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

export const FinalSurprise: React.FC = () => {
  const handleReplay = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#f472b6", "#fb7185", "#fde047", "#e879f9"],
      });
    } catch {
      // Fallback
    }

    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="final" className="relative py-32 px-6 overflow-hidden bg-[#0a0410] text-center">
      {/* Deep Starry Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.2)_0%,rgba(10,4,16,1)_80%)] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-rose-600/15 blur-[150px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-3xl mx-auto z-10 relative flex flex-col items-center">
        {/* Softly Pulsing Big Heart Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-10"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-purple-600 border-2 border-rose-300/60 flex items-center justify-center shadow-[0_0_50px_rgba(244,114,182,0.6)] animate-pulse-glow">
            <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-white fill-white/50" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-amber-300 animate-spin" style={{ animationDuration: "10s" }} />
        </motion.div>

        {/* Text Sequence */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-romantic text-2xl sm:text-3xl text-rose-200/80 font-light mb-4"
        >
          Before you leave...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif-romantic text-3xl sm:text-4xl lg:text-5xl text-slate-100 font-light mb-6 leading-relaxed"
        >
          Thank you for being exactly who you are,{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 font-normal text-glow-pink">
            Akhi.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-serif-romantic text-xl sm:text-2xl lg:text-3xl text-rose-200/90 font-light italic mb-8 max-w-xl"
        >
          &ldquo;Keep smiling. The world needs more of that kind of light.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mb-12"
        >
          <p className="font-serif-romantic text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-200 font-semibold tracking-wide text-glow-gold">
            This little universe will always have your name on it. ✨
          </p>
        </motion.div>

        {/* Replay Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReplay}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white font-medium text-lg font-sans-ui shadow-[0_0_35px_rgba(244,114,182,0.5)] hover:shadow-[0_0_50px_rgba(244,114,182,0.8)] border border-rose-300/40 transition-all duration-300 cursor-pointer"
        >
          <RotateCcw className="w-5 h-5 text-rose-100 group-hover:-rotate-90 transition-transform duration-500" />
          <span>Replay the Magic ❤️</span>
        </motion.button>
      </div>
    </section>
  );
};
