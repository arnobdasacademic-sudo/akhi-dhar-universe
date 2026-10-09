"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";
import { heartWallMessages, HeartItem } from "@/data/heartWallData";

export const HeartWall: React.FC = () => {
  const [selectedHeart, setSelectedHeart] = useState<HeartItem | null>(null);

  const handleHeartClick = (item: HeartItem) => {
    setSelectedHeart(item);

    try {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.7 },
        colors: ["#f472b6", "#fb7185", "#fde047"],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section id="heartwall" className="relative py-28 px-6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-sans-ui mb-4"
        >
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <span>Interactive Wall of Affection</span>
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
            Heart Wall 💖
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300/80 font-sans-ui max-w-xl text-base sm:text-lg font-light mb-12"
        >
          Click any glowing heart below to uncover a special message about Akhi.
        </motion.p>

        {/* Floating Heart Cloud Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 justify-items-center mb-6">
          {heartWallMessages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleHeartClick(item)}
              className="relative cursor-pointer flex flex-col items-center group"
            >
              {/* Heart Container */}
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr ${item.color} border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(244,114,182,0.4)] group-hover:shadow-[0_0_45px_rgba(244,114,182,0.8)] transition-all duration-300 animate-float`}
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white/40 drop-shadow-md" />
              </div>

              <span className="mt-3 text-xs font-sans-ui text-rose-200/90 font-medium group-hover:text-white transition-colors">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* MODAL POPUP MESSAGE */}
        <AnimatePresence>
          {selectedHeart && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedHeart(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl glass-card border border-rose-400/40 shadow-[0_0_60px_rgba(244,114,182,0.4)] text-center"
              >
                <button
                  onClick={() => setSelectedHeart(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-rose-500/30 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 mx-auto flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(244,114,182,0.5)]">
                  <Heart className="w-8 h-8 text-white fill-white/50" />
                </div>

                <h3 className="font-serif-romantic text-2xl sm:text-3xl text-rose-100 font-semibold mb-3">
                  {selectedHeart.title}
                </h3>

                <p className="font-serif-romantic text-xl sm:text-2xl text-rose-200/90 font-light italic leading-relaxed mb-6">
                  &ldquo;{selectedHeart.message}&rdquo;
                </p>

                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-sans-ui">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Akhi Dhar</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
