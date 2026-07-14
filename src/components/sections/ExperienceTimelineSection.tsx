"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ExperienceTimelineSection: React.FC = () => {
  const { career } = PORTFOLIO_DATA;
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="chronicles" className="relative py-14 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald/10 border border-emerald/30 text-emerald text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ACADEMIC & LEADERSHIP TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white">
            EXPERIENCE & LEADERSHIP
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Leading multi-disciplinary college technical symposiums while maintaining top-percentile academic standing and social service impact.
        </p>
      </div>

      {/* Timeline Interactive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Nav Column */}
        <div className="lg:col-span-5 space-y-4">
          {career.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "glass-card border-cyan/70 shadow-[0_0_35px_rgba(0,242,254,0.15)] scale-[1.02]"
                    : "glass-panel border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span
                    className={`font-semibold ${
                      isActive ? "text-cyan" : "text-zinc-400"
                    }`}
                  >
                    {item.period}
                  </span>
                  <span className="text-zinc-500">{item.location}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-xs font-mono tracking-wider text-emerald uppercase">
                  {item.company}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Right Active Chronicle Deep-Dive Display */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-3xl p-8 sm:p-10 border border-white/15 relative overflow-hidden"
            >
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan/15 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan uppercase tracking-widest font-semibold">
                    {career[activeIdx].period} // ROLE OVERVIEW
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {career[activeIdx].role}
                  </h3>
                  <p className="text-sm font-mono text-emerald mt-1">
                    {career[activeIdx].company} ({career[activeIdx].location})
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                {career[activeIdx].description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
                  Key Achievements & Responsibilities
                </h4>
                {career[activeIdx].achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                  >
                    <Sparkles className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {ach}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold mb-3">
                  Applied Skills & Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career[activeIdx].technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-obsidian border border-white/10 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
