"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, GraduationCap, Award, HeartHandshake, Sparkles, MapPin, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative py-14 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest font-bold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>EXECUTIVE BIO & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white">
            ABOUT RUTHRAN
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait Photo & Identity Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden flex flex-col items-center text-center"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-royal/25 blur-3xl pointer-events-none" />

          {/* Profile Image Frame */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-cyan/40 shadow-[0_0_40px_rgba(0,242,254,0.25)] mb-6 group">
            <Image
              src={identity.photoUrl}
              alt={identity.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-40" />
          </div>

          <span className="text-xs font-mono text-emerald uppercase tracking-widest font-semibold">
            B.Sc. COMPUTER SCIENCE // 3RD YEAR
          </span>
          <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mt-1">
            {identity.name}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-1 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan" />
            <span>KC College Mumbai, Maharashtra</span>
          </p>

        </motion.div>

        {/* Right Column: Executive Summary & Leadership Highlights */}
        <div className="lg:col-span-7 space-y-6">
          {/* Executive Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan" />
              <span>EXECUTIVE SUMMARY</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Enthusiastic and self-motivated B.Sc. Computer Science student in the third year with hands-on experience in web programming, full-stack app development, and AI engineering. Highly familiar with Linux environments and comfortable building automated pipelines using AWS, Docker, and Jenkins. Demonstrates strong organizational leadership through active participation as Core Head of Feistron and an NSS volunteer. Passionate about learning, collaborating, and contributing to impactful tech solutions.
            </p>
          </motion.div>

          {/* Academic & Extra-Curricular Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-royal/15 border border-royal/30 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5 text-royal" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Kishinchand Chellaram College
                </h4>
                <p className="text-xs font-mono text-emerald mb-2">
                  B.Sc. COMPUTER SCIENCE // 3RD YEAR
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Consistently maintaining a 9.77 CGPA across core subjects including Linux systems, Cloud Computing, Database Systems, and AI/ML.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-cyan/15 border border-cyan/30 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-cyan" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Feistron Tech Fest Head
                </h4>
                <p className="text-xs font-mono text-cyan mb-2">
                  CORE MEMBER & HEAD 2024–25
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Led marketing and administrative teams for the premier college technical fest, managing student volunteers and event programming.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald/15 border border-emerald/30 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5 text-emerald" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  NSS Volunteer Leadership
                </h4>
                <p className="text-xs font-mono text-emerald mb-2">
                  120+ HOURS SOCIAL SERVICE
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Completed over 120 hours of community development and digital literacy outreach under the National Service Scheme.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-3">
                  <Terminal className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  SciCode Fest Technical Lead
                </h4>
                <p className="text-xs font-mono text-gold mb-2">
                  CORE EVENT VOLUNTEER
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Managed, judged, and executed core technical and coding events during college-wide technical symposiums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
