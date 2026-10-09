"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Film, Grid, Filter, Eye } from "lucide-react";
import { AkhiImage } from "../common/AkhiImage";
import { akhiPhotos, PhotoItem } from "@/data/akhiPhotos";
import { LightboxModal } from "./LightboxModal";
import { FeaturedSlideshow } from "./FeaturedSlideshow";

const categories = [
  { id: "all", label: "All Moments" },
  { id: "smiles", label: "Her Smiles ✨" },
  { id: "grace", label: "Quiet Grace 🌸" },
  { id: "moments", label: "Kept Memories 💖" },
  { id: "favorites", label: "Favorites ❤️" },
];

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  // Filter photos based on category tab
  const filteredPhotos = akhiPhotos.filter((photo) => {
    if (activeCategory === "all") return true;
    return photo.category === activeCategory;
  });

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-sans-ui mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Constellation of Her Moments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-romantic text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-light mb-4"
          >
            A Gallery of Her{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 text-glow-pink">
              Unforgettable Light
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300/80 font-sans-ui max-w-xl text-base sm:text-lg font-light mb-8"
          >
            Every picture holds a gentle story. Click any photograph to expand it in full screen or view the movie slideshow experience.
          </motion.p>

          {/* Action Bar: Category Tabs + Movie Mode Button */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans-ui whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white font-medium shadow-[0_0_15px_rgba(244,114,182,0.4)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Launch Fullscreen Movie Slideshow Button */}
            <button
              onClick={() => setSlideshowOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-300/40 text-amber-200 hover:text-white text-xs sm:text-sm font-sans-ui font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-[0_0_20px_rgba(253,224,71,0.2)]"
            >
              <Film className="w-4 h-4 text-amber-300" />
              <span>Movie Slideshow Mode 🎬</span>
            </button>
          </div>
        </div>

        {/* Masonry Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer light-sweep border border-pink-500/20 hover:border-pink-400/60 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,114,182,0.3)] hover:-translate-y-1.5"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <AkhiImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    fallbackTitle={photo.alt}
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614]/90 via-[#0d0614]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/30 text-rose-200 text-xs font-sans-ui border border-rose-300/30">
                        {photo.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    {photo.caption && (
                      <p className="font-serif-romantic text-base text-rose-100 font-light italic leading-snug">
                        &ldquo;{photo.caption}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />

      {/* Movie Mode Fullscreen Slideshow */}
      {slideshowOpen && (
        <FeaturedSlideshow
          photos={akhiPhotos}
          onClose={() => setSlideshowOpen(false)}
        />
      )}
    </section>
  );
};
