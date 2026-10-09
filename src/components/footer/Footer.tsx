"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative py-12 px-6 bg-[#07030a] border-t border-rose-500/15 text-slate-400 font-sans-ui text-sm overflow-hidden select-none">
      {/* Subtle star elements */}
      <div className="absolute top-4 left-1/4 animate-twinkle text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-4 right-1/4 animate-twinkle text-rose-300 text-xs" style={{ animationDelay: "1s" }}>✦</div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left z-10 relative">
        {/* Main Footer Message */}
        <div className="flex items-center gap-2 text-rose-200/80 font-serif-romantic text-base">
          <span>Made with care, a little imagination, and lots of heart.</span>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-500/60 inline-block" />
        </div>

        {/* Developer Signature */}
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>© {year} Akhi Dhar Universe</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 font-medium tracking-wide">
            Developed by <span className="text-rose-300 hover:text-rose-200 transition-colors">CRP(-2)</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
