"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Sparkles, X, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";
import { letterConfig } from "@/data/letterConfig";

export const InteractiveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenLetter = () => {
    setIsOpening(true);

    // Particle burst
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f472b6", "#fb7185", "#fde047"],
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 700);
  };

  return (
    <section id="letter" className="relative py-28 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-sans-ui mb-4"
        >
          <Mail className="w-4 h-4 text-rose-400" />
          <span>A Heartfelt Note</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-romantic text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-light mb-4"
        >
          The Interactive{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 text-glow-pink font-normal">
            Love Letter 💌
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300/80 font-sans-ui max-w-lg text-base sm:text-lg font-light mb-12"
        >
          Akhi, there is something I wanted you to know...
        </motion.p>

        {/* ENVELOPE CARD */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl glass-card border border-rose-400/30 shadow-[0_20px_60px_rgba(244,114,182,0.25)] flex flex-col items-center justify-center cursor-pointer group light-sweep"
            onClick={handleOpenLetter}
          >
            {/* Wax Seal Container */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 border-2 border-amber-300/60 shadow-[0_0_25px_rgba(244,114,182,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-9 h-9 text-amber-100 fill-amber-100/40" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-amber-300 animate-pulse" />
            </div>

            <h3 className="font-serif-romantic text-2xl text-rose-100 font-medium mb-2">
              For Akhi Dhar
            </h3>
            <p className="text-xs font-sans-ui text-rose-300/80 mb-6">
              Sealed with warmth & genuine care
            </p>

            {/* Open Button */}
            <button
              onClick={handleOpenLetter}
              disabled={isOpening}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-medium font-sans-ui text-sm shadow-[0_0_20px_rgba(244,114,182,0.4)] group-hover:shadow-[0_0_30px_rgba(244,114,182,0.7)] transition-all"
            >
              <span>{isOpening ? "Unfolding Letter..." : "Open My Letter 💗"}</span>
            </button>
          </motion.div>
        )}

        {/* FULL OPENED LETTER MODAL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1c0b2c] via-[#150722] to-[#0d0614] border border-rose-400/40 shadow-[0_0_60px_rgba(244,114,182,0.3)] text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-rose-500/30 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Header */}
              <div className="flex items-center gap-3 border-b border-rose-500/20 pb-6 mb-8">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 border border-rose-400/30">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-romantic text-2xl text-rose-200 font-semibold">
                    {letterConfig.salutation}
                  </h3>
                  <p className="text-xs font-sans-ui text-slate-400">
                    A message straight from the heart
                  </p>
                </div>
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-6 font-serif-romantic text-lg sm:text-xl text-rose-100/95 font-light leading-relaxed">
                {letterConfig.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Letter Signoff */}
              <div className="mt-10 pt-6 border-t border-rose-500/20 flex flex-col items-end text-right">
                <p className="font-sans-ui text-sm text-slate-400 mb-1">
                  {letterConfig.signoff}
                </p>
                <p className="font-handwritten text-2xl sm:text-3xl text-rose-300">
                  {letterConfig.signature}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
