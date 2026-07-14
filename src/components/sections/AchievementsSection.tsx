"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const AchievementsSection: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  const badgeStyles = {
    gold: {
      border: "border-gold/50 hover:border-gold",
      glow: "from-gold/25 via-orange/15 to-transparent",
      text: "text-gold",
      bg: "bg-gold/10 border-gold/30",
      icon: <Trophy className="w-6 h-6 text-gold" />,
    },
    cyan: {
      border: "border-cyan/50 hover:border-cyan",
      glow: "from-cyan/25 via-blue-500/15 to-transparent",
      text: "text-cyan",
      bg: "bg-cyan/10 border-cyan/30",
      icon: <Award className="w-6 h-6 text-cyan" />,
    },
    purple: {
      border: "border-royal/50 hover:border-royal",
      glow: "from-royal/25 via-purple-500/15 to-transparent",
      text: "text-royal",
      bg: "bg-royal/10 border-royal/30",
      icon: <Star className="w-6 h-6 text-royal" />,
    },
  };

  return (
    <section id="achievements" className="relative py-14 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS, AWARDS & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white">
            HONORS & ACHIEVEMENTS
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          National recognition in Agentic AI competitions, international peer-reviewed research awards, and top-percentile academic distinction.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {achievements.map((item, idx) => {
          const style = badgeStyles[item.badgeType];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-card rounded-3xl p-8 border ${style.border} relative overflow-hidden flex flex-col justify-between transition-all duration-400 hover:-translate-y-2`}
            >
              {/* Ambient Background Gradient Glow */}
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${style.glow} blur-3xl pointer-events-none`}
              />

              <div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${style.bg}`}>
                    {style.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {item.year}
                  </span>
                </div>

                <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${style.text}`}>
                  {item.highlight}
                </span>

                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mt-1 mb-3">
                  {item.award}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>ISSUED BY: {item.organization.toUpperCase()}</span>
                <CheckCircle2 className={`w-4 h-4 ${style.text}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
