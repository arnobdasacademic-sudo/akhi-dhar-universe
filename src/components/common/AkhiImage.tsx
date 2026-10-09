"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Heart, Sparkles } from "lucide-react";

interface AkhiImageProps extends Omit<ImageProps, "onError"> {
  fallbackTitle?: string;
  glowOnHover?: boolean;
}

export const AkhiImage: React.FC<AkhiImageProps> = ({
  src,
  alt,
  className = "",
  fallbackTitle = "Akhi Dhar",
  glowOnHover = true,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-purple-950/60 via-pink-950/40 to-rose-950/60 border border-pink-500/30 rounded-2xl overflow-hidden min-h-[220px] ${
          glowOnHover ? "hover:border-pink-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,114,182,0.25)]" : ""
        } ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-400/30 flex items-center justify-center mb-3 text-rose-300 animate-pulse">
            <Heart className="w-7 h-7 fill-rose-500/30 text-rose-400" />
          </div>
          <span className="font-serif-romantic text-xl text-rose-200 tracking-wide mb-1 font-semibold">
            {fallbackTitle}
          </span>
          <span className="text-xs text-rose-300/70 font-sans-ui flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Add photo in /public/images/akhi/
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-purple-950/40 animate-pulse flex items-center justify-center">
          <Heart className="w-6 h-6 text-rose-400/50 animate-bounce" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={`transition-all duration-700 ${
          isLoading ? "scale-105 blur-sm opacity-0" : "scale-100 blur-0 opacity-100"
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
};
