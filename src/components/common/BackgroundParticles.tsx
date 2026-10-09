"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "star" | "petal" | "sparkle";
}

export const BackgroundParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate initial set of ambient background particles
    const generated: Particle[] = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      const type: "star" | "petal" | "sparkle" =
        typeRand < 0.5 ? "star" : typeRand < 0.8 ? "petal" : "sparkle";

      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === "petal" ? Math.random() * 10 + 10 : Math.random() * 3 + 1,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.7 + 0.2,
        type,
      });
    }

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep plum glowing ambient radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/40 via-[#0d0614] to-[#07030b]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px]" />

      {/* Floating stars, sparkles and rose petals */}
      {particles.map((p) => {
        if (p.type === "star") {
          return (
            <div
              key={p.id}
              className="absolute rounded-full bg-amber-100 animate-twinkle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                boxShadow: "0 0 6px rgba(254, 240, 138, 0.8)",
                animationDuration: `${p.duration / 3}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          );
        }

        if (p.type === "sparkle") {
          return (
            <div
              key={p.id}
              className="absolute rounded-full bg-rose-300 animate-pulse"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size * 1.5}px`,
                height: `${p.size * 1.5}px`,
                opacity: p.opacity * 0.8,
                boxShadow: "0 0 10px rgba(244, 114, 182, 0.9)",
                animationDuration: `${p.duration / 2}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          );
        }

        // Rose petal icon float animation
        return (
          <div
            key={p.id}
            className="absolute text-rose-400/40 animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: `${p.size}px`,
              opacity: p.opacity * 0.6,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            🌸
          </div>
        );
      })}
    </div>
  );
};
