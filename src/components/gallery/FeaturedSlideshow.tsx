"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, ChevronLeft, ChevronRight, Film, Heart } from "lucide-react";
import { AkhiImage } from "../common/AkhiImage";
import { PhotoItem } from "@/data/akhiPhotos";

interface FeaturedSlideshowProps {
  photos: PhotoItem[];
  onClose: () => void;
}

export const FeaturedSlideshow: React.FC<FeaturedSlideshowProps> = ({
  photos,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentPhoto = photos[currentIndex];
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === photos.length - 1;

  // Handle tab visibility change (pause slideshow when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Timer loop for auto advancing slides
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    setProgress(0);
    const startTime = Date.now();

    // Progress bar updater
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, 50);

    // Slide transition
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isPlaying, photos.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Overlay Controls */}
      <div className="relative z-20 w-full p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <Film className="w-5 h-5 text-amber-300" />
          <span className="font-serif-romantic text-xl text-rose-100 font-semibold tracking-wide">
            Akhi Dhar • Cinematic Experience
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Play / Pause toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
            title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-rose-500/40 border border-white/20 text-white backdrop-blur-md transition-all"
            title="Exit Movie Mode"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Full-Bleed Image Container with Ken Burns effect */}
      <div className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <AkhiImage
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center animate-[kenburns_12s_ease-out_infinite_alternate]"
              fallbackTitle={currentPhoto.alt}
            />
            
            {/* Cinematic dark vignette backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Previous & Next Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-6 z-20 p-4 rounded-full bg-black/40 hover:bg-rose-500/40 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 z-20 p-4 rounded-full bg-black/40 hover:bg-rose-500/40 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Overlay Cinematic Captions */}
        <div className="absolute bottom-16 left-0 right-0 z-20 px-8 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Special Opening / Closing captions */}
          {isFirstSlide && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-300 font-sans-ui text-sm uppercase tracking-widest mb-2 font-medium"
            >
              &ldquo;A collection of little things that make you, you.&rdquo;
            </motion.p>
          )}

          {isLastSlide && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-300 font-sans-ui text-sm uppercase tracking-widest mb-2 font-medium"
            >
              &ldquo;And somehow, every photograph leaves a little more warmth behind.&rdquo;
            </motion.p>
          )}

          {/* Photo caption */}
          {currentPhoto.caption && (
            <motion.p
              key={currentPhoto.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif-romantic text-2xl sm:text-3xl md:text-4xl text-rose-100 font-light italic leading-relaxed text-glow-pink"
            >
              &ldquo;{currentPhoto.caption}&rdquo;
            </motion.p>
          )}
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="relative z-20 w-full px-6 py-4 bg-gradient-to-t from-black/90 to-transparent">
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-sans-ui">
            <span>Slide {currentIndex + 1} of {photos.length}</span>
            <span>{isPlaying ? "Playing..." : "Paused"}</span>
          </div>

          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-500 via-pink-400 to-amber-300 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
