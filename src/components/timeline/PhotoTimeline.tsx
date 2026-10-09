"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Clock } from "lucide-react";
import { AkhiImage } from "../common/AkhiImage";
import { timelineData } from "@/data/timelineData";

export const PhotoTimeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-sans-ui mb-4"
          >
            <Clock className="w-4 h-4 text-amber-300" />
            <span>Little Moments, Endless Warmth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-romantic text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-light mb-4"
          >
            A Timeline of{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 text-glow-pink font-normal">
              Precious Glances
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300/80 font-sans-ui max-w-xl text-base sm:text-lg font-light"
          >
            Moments that capture her radiant smile, quiet grace, and unforgettable presence.
          </motion.p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Vertical Connecting Line (Center on desktop, left on mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500/40 via-purple-500/30 to-amber-400/40 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16 sm:space-y-24">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#0d0614] border-2 border-rose-400 shadow-[0_0_15px_rgba(244,114,182,0.8)] flex items-center justify-center">
                      <Heart className="w-5 h-5 text-rose-400 fill-rose-400/40" />
                    </div>
                  </div>

                  {/* Photo Card Component (Width 1/2 desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8"
                  >
                    <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 group light-sweep">
                      
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                        <AkhiImage
                          src={item.photoSrc}
                          alt={item.photoAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          fallbackTitle={item.title}
                        />
                      </div>

                      {/* Tag & Title */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 text-xs font-sans-ui border border-rose-300/30">
                          {item.tag}
                        </span>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                      </div>

                      <h3 className="font-serif-romantic text-2xl text-rose-100 font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="font-serif-romantic text-base text-rose-200/90 font-light italic leading-relaxed">
                        &ldquo;{item.caption}&rdquo;
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
