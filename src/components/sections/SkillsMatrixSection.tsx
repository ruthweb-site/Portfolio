"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { sound } from "@/lib/sound";

export const SkillsMatrixSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="relative py-14 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 border border-royal/30 text-royal text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>FULL-STACK ADVANCED MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white">
            TECHNICAL SPECTRUM
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Deep architectural fluency across cutting-edge frontend infrastructure, high-density WebGL GPU computation, and luxury UI craft.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {skillCategories.map((cat, idx) => {
          const isActive = activeCategory === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                setActiveCategory(idx);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-mono uppercase font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-white text-obsidian shadow-[0_0_25px_rgba(255,255,255,0.25)] scale-[1.02]"
                  : "glass-panel text-zinc-400 hover:text-white border-white/10"
              }`}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Selected Category Skill Matrix */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories[activeCategory].skills.map((skill, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sound.playHover()}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/25 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{skill.name}</h4>
                <p className="text-xs text-zinc-400">{skill.highlight}</p>
              </div>
              <span className="text-sm font-mono font-bold text-cyan px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                {skill.level}%
              </span>
            </div>

            {/* Animated Proficiency Bar */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-royal via-electric to-emerald rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
