"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  X,
  CheckCircle2,
  Terminal,
  Activity,
  Maximize2,
} from "lucide-react";
import { PORTFOLIO_DATA, FlagshipProject } from "@/data/portfolioData";
import { sound } from "@/lib/sound";

export const FlagshipProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<FlagshipProject | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"architecture" | "code" | "simulator">("architecture");
  const [simulatorSlider, setSimulatorSlider] = useState(85);

  const openProjectModal = (project: FlagshipProject) => {
    sound.playPing();
    setSelectedProject(project);
    setActiveModalTab("architecture");
  };

  const closeModal = () => {
    sound.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-14 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 border border-royal/30 text-royal text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>MISSION CRITICAL CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white">
            FLAGSHIP ARCHITECTURES
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          A curated selection of high-concurrency systems, spatial WebGL engines, and Apple-grade luxury user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            onClick={() => openProjectModal(project)}
            onMouseEnter={() => sound.playHover()}
            data-cursor="view"
            className="group relative glass-card glass-card-hover rounded-3xl p-8 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Background Gradient Mesh */}
            <div
              className={`absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div>
              {/* Category & Impact Badge */}
              <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-semibold">
                  {project.category}
                </span>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-emerald text-xs font-mono font-bold">
                  <span>{project.impactMetric}</span>
                  <span className="text-zinc-400 font-normal">{project.impactLabel}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-zinc-300 mb-4">{project.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">{project.description}</p>
            </div>

            <div>
              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8 relative z-10">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-obsidian/80 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer CTA & Interactive Expand Prompt */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10 relative z-10">
                <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-royal" />
                  <span>INSPECT ARCHITECTURE & CODE</span>
                </span>

                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-obsidian transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deep Dive Architecture & Code Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              className="w-full max-w-4xl max-h-[88vh] overflow-y-auto glass-card rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-cyan uppercase tracking-widest font-semibold">
                    {selectedProject.category} // CASE STUDY SPECIFICATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">{selectedProject.subtitle}</p>
                </div>

                <button
                  onClick={closeModal}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="flex items-center gap-3 my-6 border-b border-white/10 pb-4 overflow-x-auto">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveModalTab("architecture");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center gap-2 ${
                    activeModalTab === "architecture"
                      ? "bg-white text-obsidian shadow-lg"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Impact</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveModalTab("simulator");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center gap-2 ${
                    activeModalTab === "simulator"
                      ? "bg-white text-obsidian shadow-lg"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Interactive Simulator</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveModalTab("code");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all flex items-center gap-2 ${
                    activeModalTab === "code"
                      ? "bg-white text-obsidian shadow-lg"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Kernel Source Code</span>
                </button>
              </div>

              {/* Tab 1: Architecture Breakdown */}
              {activeModalTab === "architecture" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <span className="text-xs font-mono text-zinc-400 uppercase">
                        Verified Metric
                      </span>
                      <div className="text-3xl font-mono font-bold text-emerald mt-1">
                        {selectedProject.impactMetric}
                      </div>
                      <p className="text-xs text-zinc-300 mt-1">
                        {selectedProject.impactLabel}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <span className="text-xs font-mono text-zinc-400 uppercase">
                        Production Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {selectedProject.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
                      Architectural Innovations & Apple-Grade Craft
                    </h4>
                    {selectedProject.architecturePoints.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-sm font-semibold text-white">{pt.label}</h5>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                            {pt.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Interactive Simulator */}
              {activeModalTab === "simulator" && (
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-obsidian border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-cyan uppercase font-semibold">
                        LIVE KERNEL TELEMETRY SIMULATOR
                      </span>
                      <span className="text-xs font-mono text-emerald">
                        LATENCY: 0.38MS // STATUS: OPTIMAL
                      </span>
                    </div>

                    <div className="h-44 rounded-xl bg-charcoal/80 border border-white/10 p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>RENDER LOAD INTENSITY</span>
                        <span className="text-white font-bold">{simulatorSlider}%</span>
                      </div>

                      {/* Animated Telemetry Graph Bar */}
                      <div className="space-y-2">
                        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: `${simulatorSlider}%` }}
                            className="h-full bg-gradient-to-r from-royal via-electric to-emerald rounded-full"
                          />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                          <span>0 NODE BUFFER</span>
                          <span>50,000 NODES</span>
                          <span>100,000 NODES</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center pt-2">
                        <div className="p-2 rounded-lg bg-white/5">
                          <div className="text-[10px] font-mono text-zinc-400">FPS RENDER</div>
                          <div className="text-sm font-mono font-bold text-white">60.0</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5">
                          <div className="text-[10px] font-mono text-zinc-400">GPU MEMORY</div>
                          <div className="text-sm font-mono font-bold text-cyan">342 MB</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5">
                          <div className="text-[10px] font-mono text-zinc-400">WASM TICK</div>
                          <div className="text-sm font-mono font-bold text-emerald">0.4 ms</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={simulatorSlider}
                        onChange={(e) => {
                          sound.playHover();
                          setSimulatorSlider(Number(e.target.value));
                        }}
                        className="w-full accent-cyan cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Code Inspector */}
              {activeModalTab === "code" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl bg-obsidian border border-white/10 border-b-0 text-xs font-mono text-zinc-300">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-royal" />
                      <span>{selectedProject.codeSnippet.filename}</span>
                    </span>
                    <span className="text-zinc-500 uppercase">
                      {selectedProject.codeSnippet.language}
                    </span>
                  </div>
                  <pre className="p-5 rounded-b-xl bg-[#08080C] border border-white/10 overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed">
                    <code>{selectedProject.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
