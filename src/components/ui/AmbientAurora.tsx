"use client";

import React from "react";

export const AmbientAurora: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark base overlay */}
      <div className="absolute inset-0 bg-obsidian/90 z-10" />

      {/* Noise Texture Layer */}
      <div className="absolute inset-0 noise-overlay opacity-40 z-20" />

      {/* Animated Aurora Orb 1 - Royal Purple */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-35 animate-aurora-flow"
        style={{
          background:
            "radial-gradient(circle, rgba(110,58,255,0.8) 0%, rgba(0,168,255,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Animated Aurora Orb 2 - Electric Cyan */}
      <div
        className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full blur-[160px] opacity-25 animate-aurora-flow"
        style={{
          animationDelay: "-6s",
          animationDuration: "24s",
          background:
            "radial-gradient(circle, rgba(0,242,254,0.7) 0%, rgba(79,172,254,0.3) 60%, transparent 100%)",
        }}
      />

      {/* Animated Aurora Orb 3 - Soft Gold / Emerald Accent */}
      <div
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full blur-[150px] opacity-20 animate-aurora-flow"
        style={{
          animationDelay: "-12s",
          animationDuration: "20s",
          background:
            "radial-gradient(circle, rgba(249,212,35,0.5) 0%, rgba(110,58,255,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Subtle top vignette shadow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian to-transparent z-20" />
      {/* Subtle bottom vignette shadow */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent z-20" />
    </div>
  );
};
