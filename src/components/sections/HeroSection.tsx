"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Trophy, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { InteractiveCyberSphere } from "@/components/canvas/InteractiveCyberSphere";

export const HeroSection: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: High Impact Typography & Identity */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Live Winner Status Badge */}
          {identity.status ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-gold/40 mb-6 group cursor-default"
            >
              <Trophy className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-gold font-bold">
                {identity.status}
              </span>
            </motion.div>
          ) : null}

          {/* Name & Role Designation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3"
          >
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-cyan uppercase font-bold">
              {identity.name} // {identity.role}
            </span>
          </motion.div>

          {/* Huge Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.04] text-white mb-6"
          >
            ARCHITECTING THE{" "}
            <span className="text-gradient-royal">NEXT ERA</span> OF DIGITAL{" "}
            <span className="text-gradient-emerald">REALITY</span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8 font-normal"
          >
            {identity.subheadline}
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-obsidian font-bold text-sm tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore Flagship Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full glass-panel border border-white/20 text-white font-semibold text-sm tracking-wide hover:border-cyan/80 hover:bg-cyan/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-cyan" />
              <span>Connect with Ruthran</span>
            </button>
          </motion.div>

          {/* Performance & Quality Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-white/10"
          >
            {identity.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex flex-col p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[11px] text-zinc-400 font-medium leading-tight mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Profile Photo Card overlaying Interactive 3D Cyber-Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[480px] sm:h-[580px] w-full relative flex items-center justify-center"
        >
          {/* Subtle Ambient Radial Glow Behind 3D Canvas */}
          <div className="absolute inset-0 bg-gradient-to-tr from-royal/20 via-electric/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

          {/* Interactive R3F Cyber Sphere Canvas */}
          <InteractiveCyberSphere />

          {/* Floating High-Tech Portrait Card over 3D Canvas */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3.5 p-3 rounded-2xl glass-card border border-white/15 shadow-2xl">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-cyan/50 shrink-0">
              <Image
                src={identity.photoUrl}
                alt={identity.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-tight">
                {identity.name}
              </div>
              <div className="text-[10px] font-mono text-emerald">
                B.Sc. CS // 9.77 CGPA
              </div>
              <div className="text-[9px] font-mono text-zinc-400">
                KC College Mumbai
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient Divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};
