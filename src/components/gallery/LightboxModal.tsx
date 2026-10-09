"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, Maximize2 } from "lucide-react";
import { AkhiImage } from "../common/AkhiImage";
import { PhotoItem } from "@/data/akhiPhotos";

interface LightboxModalProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const isOpen = currentIndex !== null;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  // Keyboard navigation & Escape close handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, photos.length]);

  if (!isOpen || !currentPhoto || currentIndex === null) return null;

  const handlePrev = () => {
    const newIdx = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    onSelectIndex(newIdx);
  };

  const handleNext = () => {
    const newIdx = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    onSelectIndex(newIdx);
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-2xl p-4 sm:p-6 overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Bar */}
        <div className="w-full max-w-7xl flex items-center justify-between z-10 py-2 px-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-rose-400 fill-rose-500/40" />
            <span className="font-serif-romantic text-lg sm:text-xl text-rose-100 font-semibold tracking-wide">
              {currentPhoto.alt || "Akhi Dhar Photo"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm font-sans-ui text-slate-400">
              {currentIndex + 1} / {photos.length}
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-rose-500/30 text-slate-200 hover:text-white transition-colors border border-white/15"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Image Container */}
        <div className="relative flex-1 w-full max-w-5xl my-4 flex items-center justify-center overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-rose-500/40 text-white border border-white/15 transition-all duration-300 backdrop-blur-md"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-rose-500/40 text-white border border-white/15 transition-all duration-300 backdrop-blur-md"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Active Image Card */}
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="relative w-full h-full max-h-[75vh] flex items-center justify-center p-2"
          >
            <div className="relative w-full h-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(244,114,182,0.25)] border border-pink-500/20">
              <AkhiImage
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain object-center"
                fallbackTitle={currentPhoto.alt || "Akhi Dhar"}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Caption & Thumbnail Strip */}
        <div className="w-full max-w-3xl flex flex-col items-center gap-3 z-10 text-center">
          {currentPhoto.caption && (
            <div className="px-6 py-2.5 rounded-full bg-rose-950/60 border border-rose-400/30 backdrop-blur-md">
              <p className="font-serif-romantic text-base sm:text-lg text-rose-100 font-light italic">
                &ldquo;{currentPhoto.caption}&rdquo;
              </p>
            </div>
          )}

          {/* Horizontal thumbnail selector */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-2 px-4 no-scrollbar">
            {photos.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 border ${
                  idx === currentIndex
                    ? "border-rose-400 scale-110 shadow-[0_0_12px_rgba(244,114,182,0.8)]"
                    : "border-white/20 opacity-50 hover:opacity-100"
                }`}
              >
                <AkhiImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
