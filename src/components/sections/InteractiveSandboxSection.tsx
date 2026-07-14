"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, Sparkles, Terminal, Copy, Check, ShieldCheck } from "lucide-react";
import { sound } from "@/lib/sound";

export const InteractiveSandboxSection: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<"nebula" | "emerald" | "gold">("nebula");
  const [shaderTurbulence, setShaderTurbulence] = useState(65);
  const [particleDensity, setParticleDensity] = useState(4800);
  const [copied, setCopied] = useState(false);

  const themeConfigs = {
    nebula: {
      name: "OBSIDIAN NEBULA",
      primary: "#6E3AFF",
      secondary: "#00A8FF",
      badgeClass: "from-royal to-electric",
      glowColor: "rgba(110, 58, 255, 0.4)",
    },
    emerald: {
      name: "QUANTUM EMERALD",
      primary: "#00F2FE",
      secondary: "#4FACFE",
      badgeClass: "from-emerald to-cyan",
      glowColor: "rgba(0, 242, 254, 0.4)",
    },
    gold: {
      name: "SOLAR GOLD LUXURY",
      primary: "#F9D423",
      secondary: "#FF4E50",
      badgeClass: "from-gold to-orange",
      glowColor: "rgba(249, 212, 35, 0.4)",
    },
  };

  const currentTheme = themeConfigs[activeTheme];

  const generatedCode = `// Bespoke VEX Spatial Shader Configuration
export const VexThemeProfile = {
  theme: "${currentTheme.name}",
  shaderTurbulence: ${shaderTurbulence.toFixed(1)},
  particleDensity: ${particleDensity},
  uniforms: {
    uPrimaryColor: new THREE.Color("${currentTheme.primary}"),
    uSecondaryColor: new THREE.Color("${currentTheme.secondary}"),
    uTimeDelta: 0.016, // 60 FPS strict frame budget
  },
};`;

  const copyCode = () => {
    sound.playPing();
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest font-bold mb-4">
          <Sliders className="w-3.5 h-3.5" />
          <span>INTERACTIVE ARCHITECTURAL SANDBOX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-4">
          THE CODE PLAYGROUND
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Experiment with real-time WebGL shader parameters, switch luxury color palettes, and inspect clean modular TypeScript outputs.
        </p>
      </div>

      {/* Interactive Playground Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Control Column */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-royal" />
              <span>1. SELECT LUXURY COLOR MATRIX</span>
            </h3>

            {/* Theme Toggle Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {(Object.keys(themeConfigs) as Array<keyof typeof themeConfigs>).map((key) => {
                const cfg = themeConfigs[key];
                const isSelected = activeTheme === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      sound.playClick();
                      setActiveTheme(key);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                      isSelected
                        ? "border-white bg-white/10 shadow-lg scale-[1.02]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/30"
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${cfg.primary}, ${cfg.secondary})`,
                      }}
                    />
                    <div className="text-xs font-mono font-bold text-white truncate">
                      {cfg.name.split(" ")[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Shader Parameters Slider */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>SHADER TURBULENCE INDEX</span>
                  <span className="text-white font-bold">{shaderTurbulence}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={shaderTurbulence}
                  onChange={(e) => {
                    sound.playHover();
                    setShaderTurbulence(Number(e.target.value));
                  }}
                  className="w-full accent-cyan cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                  <span>PARTICLE DENSITY MATRIX</span>
                  <span className="text-white font-bold">{particleDensity} NODES</span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="10000"
                  step="200"
                  value={particleDensity}
                  onChange={(e) => {
                    sound.playHover();
                    setParticleDensity(Number(e.target.value));
                  }}
                  className="w-full accent-emerald cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Live Preview Badge Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              STATE PRESERVED IN REAL-TIME
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              }}
            >
              ACTIVE PROFILE
            </span>
          </div>
        </div>

        {/* Right Code Output & Live Visual Representation */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Dynamic Background Glow representing the theme */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[110px] pointer-events-none transition-all duration-700"
            style={{ backgroundColor: currentTheme.primary, opacity: 0.35 }}
          />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan" />
                <span>VexThemeProfile.ts // GENERATED SPEC</span>
              </span>

              <button
                onClick={copyCode}
                data-cursor="copy"
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald" />
                    <span className="text-emerald">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY SPEC</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-5 rounded-2xl bg-obsidian/90 border border-white/10 text-xs font-mono text-zinc-200 leading-relaxed overflow-x-auto">
              <code>{generatedCode}</code>
            </pre>
          </div>

          {/* Simulated 3D Preview Visual Card */}
          <div
            className="mt-6 p-6 rounded-2xl border transition-all duration-500 flex items-center justify-between"
            style={{
              borderColor: currentTheme.primary,
              background: `radial-gradient(circle at left, ${currentTheme.primary}20 0%, transparent 80%)`,
            }}
          >
            <div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                PREVIEW STATE
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">
                {currentTheme.name} // 60 FPS RENDERER
              </h4>
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20">
              <ShieldCheck className="w-5 h-5 text-emerald" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
