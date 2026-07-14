"use client";

import React from "react";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { AmbientAurora } from "@/components/ui/AmbientAurora";
import { NavbarHUD } from "@/components/ui/NavbarHUD";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { FlagshipProjectsSection } from "@/components/sections/FlagshipProjectsSection";
import { ExperienceTimelineSection } from "@/components/sections/ExperienceTimelineSection";
import { SkillsMatrixSection } from "@/components/sections/SkillsMatrixSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <LenisProvider>
      <div className="min-h-screen relative overflow-hidden bg-obsidian text-slate-100">
        {/* Animated Aurora Light Orbs & Noise Grain Overlay */}
        <AmbientAurora />

        {/* Clean Luxury Navigation Bar */}
        <NavbarHUD />

        {/* Main Content Layout */}
        <main className="relative z-10 space-y-4 sm:space-y-8">
          <HeroSection />
          <AboutSection />
          <AchievementsSection />
          <FlagshipProjectsSection />
          <ExperienceTimelineSection />
          <SkillsMatrixSection />
          <ContactSection />
        </main>
      </div>
    </LenisProvider>
  );
}
