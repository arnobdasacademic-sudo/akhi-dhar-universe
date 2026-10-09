"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Moon, Wand2, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { defaultWishes, getRandomWish, WishItem } from "@/data/wishesData";

export const WishesSection: React.FC = () => {
  const [currentWish, setCurrentWish] = useState<WishItem>(defaultWishes[0]);

  const handleNextWish = () => {
    const next = getRandomWish(currentWish.id);
    setCurrentWish(next);

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#fde047", "#f472b6", "#c084fc"],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section id="wishes" className="relative py-28 px-6 overflow-hidden">
      {/* Night Sky Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/50 via-[#0d0614] to-[#08030c] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-sans-ui mb-4"
        >
          <Moon className="w-4 h-4 text-amber-300" />
          <span>A Night Sky Full of Blessings</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-romantic text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-light mb-4"
        >
          For You,{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-pink-300 text-glow-gold font-normal">
            Akhi Dhar ✨
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300/80 font-sans-ui max-w-xl text-base sm:text-lg font-light mb-12"
        >
          Every star in this little universe carries a gentle wish written just for you.
        </motion.p>

        {/* Wish Display Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl p-8 sm:p-12 rounded-3xl glass-card border border-amber-300/30 shadow-[0_20px_60px_rgba(253,224,71,0.15)] relative overflow-hidden light-sweep mb-8"
        >
          <div className="absolute top-4 right-4 text-amber-300/30">
            <Sparkles className="w-12 h-12" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-sans-ui mb-6 border border-amber-300/20">
            <span>{currentWish.theme}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentWish.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="font-serif-romantic text-2xl sm:text-3xl lg:text-4xl text-rose-100 font-light leading-relaxed italic mb-4 text-glow-gold"
            >
              &ldquo;{currentWish.wish}&rdquo;
            </motion.p>
          </AnimatePresence>

          <p className="font-handwritten text-2xl text-amber-200/90">
            — Akhi Dhar Universe
          </p>
        </motion.div>

        {/* Generate Wish Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNextWish}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-medium text-base sm:text-lg font-sans-ui shadow-[0_0_35px_rgba(253,224,71,0.4)] hover:shadow-[0_0_50px_rgba(253,224,71,0.7)] border border-amber-300/40 transition-all duration-300 cursor-pointer"
        >
          <Wand2 className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
          <span>Send One More Wish ✨</span>
        </motion.button>
      </div>
    </section>
  );
};
