"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, CheckCircle2, Star } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest font-bold mb-4">
          <Star className="w-3.5 h-3.5" />
          <span>EXECUTIVE INDUSTRY VALIDATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-4">
          LEADERSHIP ENDORSEMENTS
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          What VPs of Engineering, Chief Technology Officers, and Creative Directors say about collaborating with Alexander Vex.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative"
          >
            <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6" />

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-royal to-electric flex items-center justify-center font-mono font-bold text-white text-sm shadow-md">
                {t.avatarUrl}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan" />
                </div>
                <p className="text-xs text-zinc-400">
                  {t.role} // <span className="text-emerald">{t.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
