"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Sun, Heart, MoonStar, Gem, Quote } from "lucide-react";
import { quotesData, QuoteItem } from "@/data/quotesData";

const categoryIcons: Record<string, React.ReactNode> = {
  smile: <Sun className="w-5 h-5 text-amber-300" />,
  kindness: <Heart className="w-5 h-5 text-rose-400" />,
  beauty: <Sparkles className="w-5 h-5 text-pink-300" />,
  presence: <MoonStar className="w-5 h-5 text-purple-300" />,
  uniqueness: <Gem className="w-5 h-5 text-amber-200" />,
};

export const QuoteSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredQuotes = quotesData.filter((q) => {
    if (activeFilter === "all") return true;
    return q.category === activeFilter;
  });

  return (
    <section id="quotes" className="relative py-28 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-rose-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-sans-ui mb-4"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>The Things That Make You Special</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-romantic text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-light mb-4"
          >
            Words Written for{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 text-glow-pink font-normal">
              Akhi Dhar
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300/80 font-sans-ui max-w-xl text-base sm:text-lg font-light mb-8"
          >
            Because some people carry a warmth that deserves to be put into words.
          </motion.p>

          {/* Filter Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans-ui transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-rose-500 text-white font-medium shadow-[0_0_15px_rgba(244,114,182,0.4)]"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              All Quotes ✨
            </button>

            {[
              { id: "smile", label: "Her Smile ☀️" },
              { id: "kindness", label: "Her Kindness 💗" },
              { id: "beauty", label: "Her Beauty 🌸" },
              { id: "presence", label: "Her Presence 🌙" },
              { id: "uniqueness", label: "Her Uniqueness 💎" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans-ui transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white font-medium shadow-[0_0_15px_rgba(244,114,182,0.4)]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quotes Cards Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredQuotes.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-3xl glass-card border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_45px_rgba(244,114,182,0.2)] flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-rose-500/10 pointer-events-none" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-400/20">
                    {categoryIcons[item.category]}
                  </div>
                  <span className="text-xs font-sans-ui text-rose-300 font-medium tracking-wide uppercase">
                    {item.categoryTitle}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif-romantic text-xl sm:text-2xl text-rose-100 font-light leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                <span className="font-handwritten text-xl text-rose-300">
                  Akhi Dhar
                </span>
                <span className="text-xs font-sans-ui text-slate-400">
                  {item.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
