"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles, Music } from "lucide-react";

interface AudioPlayerProps {
  autoStartOnPermission?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynthesized, setIsSynthesized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscGainRef = useRef<GainNode | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  // Stop web audio synthesizer
  const stopSynthesizer = () => {
    if (synthTimerRef.current) {
      window.clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  // Start web audio soft ambient romantic synthesizer (fallback if no mp3)
  const startSynthesizer = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      oscGainRef.current = masterGain;

      // Soft ambient romantic chord sequence (frequencies in Hz)
      const chords = [
        [220, 261.63, 329.63, 392.0], // Am7
        [174.61, 220, 261.63, 349.23], // Fmaj7
        [196.0, 246.94, 293.66, 392.0],  // G
        [164.81, 220, 261.63, 329.63], // C/E
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Soft attack and release swell
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.8);

          osc.connect(gain);
          gain.connect(masterGain);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 5.0);
        });
      };

      playChord();
      synthTimerRef.current = window.setInterval(playChord, 4500);
      setIsSynthesized(true);
    } catch {
      setIsSynthesized(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      stopSynthesizer();
      setIsPlaying(false);
    } else {
      // Try playing audio file first
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsSynthesized(false);
          })
          .catch(() => {
            // If MP3 file missing or blocked, fall back to Web Audio Synthesizer
            startSynthesizer();
            setIsPlaying(true);
          });
      } else {
        startSynthesizer();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynthesizer();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Hidden audio element for optional /audio/romantic-ambient.mp3 */}
      <audio
        ref={audioRef}
        src="/BGM/BGM1.mp3"
        loop
        preload="auto"
        onError={() => {
          // Silent handler - player will fall back to Web Audio API when toggled
        }}
      />

      <button
        onClick={toggleSound}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-xl ${
          isPlaying
            ? "bg-rose-950/80 border-rose-400/50 text-rose-200 shadow-[0_0_20px_rgba(244,114,182,0.3)]"
            : "bg-slate-900/80 border-slate-700/50 text-slate-300 hover:text-white hover:border-pink-500/40"
        } backdrop-blur-md`}
        title={isPlaying ? "Mute Background Music" : "Play Romantic Music"}
        aria-label="Toggle Sound"
      >
        <div className="relative">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-rose-400 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-slate-400 group-hover:text-rose-300" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-400 animate-ping" />
          )}
        </div>

        <span className="text-xs font-medium font-sans-ui hidden sm:inline-block">
          {isPlaying ? (isSynthesized ? "Ambient Music ✨" : "Music Playing 🎶") : "Music Off"}
        </span>

        {isPlaying && (
          <span className="flex items-center gap-0.5 text-rose-400">
            <span className="w-0.5 h-3 bg-rose-400 animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 h-4 bg-rose-300 animate-[bounce_1s_infinite_300ms]" />
            <span className="w-0.5 h-2 bg-rose-400 animate-[bounce_1s_infinite_200ms]" />
          </span>
        )}
      </button>
    </div>
  );
};
