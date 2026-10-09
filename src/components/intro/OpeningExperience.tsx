"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface OpeningExperienceProps {
  onEnterUniverse: () => void;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({
  onEnterUniverse,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Step 1: Initial heart reveal -> transition to Text 1 after 1s
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1200);

    // Step 2: Show second line after 3.2s
    const timer2 = setTimeout(() => {
      setStep(3);
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleOpen = () => {
    setIsDismissing(true);

    // Launch celebratory confetti particles
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#f472b6", "#fb7185", "#fde047", "#e879f9"],
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      onEnterUniverse();
    }, 900);
  };

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(() => {
      onEnterUniverse();
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isDismissing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-[#0d0614] text-slate-100 overflow-hidden select-none"
        >
          {/* Deep plum ambient glow backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25)_0%,rgba(13,6,20,0.98)_70%)] pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[120px] pointer-events-none" />

          {/* Floating Rose Petals & Stars backdrop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            <div className="absolute top-12 left-1/4 animate-float text-rose-400 text-xl">🌸</div>
            <div className="absolute top-1/3 right-1/4 animate-float text-rose-300 text-2xl" style={{ animationDelay: "1.5s" }}>✨</div>
            <div className="absolute bottom-1/4 left-1/3 animate-float text-pink-400 text-lg" style={{ animationDelay: "2.5s" }}>🌸</div>
            <div className="absolute top-2/3 right-1/3 animate-twinkle text-amber-300 text-sm">✦</div>
          </div>

          {/* Skip Intro button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full text-xs font-sans-ui text-slate-400 hover:text-rose-300 bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300 backdrop-blur-md"
          >
            Skip intro
          </button>

          <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center px-4">
            {/* Glowing Heart Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600/30 to-purple-600/30 border border-rose-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(244,114,182,0.4)] animate-pulse-glow">
                <Heart className="w-10 h-10 text-rose-400 fill-rose-500/40" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-amber-300 animate-spin" style={{ animationDuration: "8s" }} />
            </motion.div>

            {/* Step 2: Line 1 Reveal */}
            <AnimatePresence mode="wait">
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-4"
                >
                  <p className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl text-rose-100/90 font-light leading-relaxed tracking-wide">
                    &ldquo;Some people make the world beautiful just by being in it...&rdquo;
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Line 2 Reveal & Main Button */}
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 text-glow-pink mb-10 tracking-tight leading-tight">
                  Akhi Dhar, this little universe is for you. ❤️
                </h1>

                {/* Open Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpen}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white font-medium text-lg font-sans-ui shadow-[0_0_35px_rgba(244,114,182,0.5)] hover:shadow-[0_0_50px_rgba(244,114,182,0.8)] border border-rose-300/40 transition-all duration-300 cursor-pointer"
                >
                  <span>Open Your Little Universe ✨</span>
                  <ArrowRight className="w-5 h-5 text-rose-100 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
