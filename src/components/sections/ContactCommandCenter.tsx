"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Send,
  Calendar,
  Sparkles,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

export const ContactCommandCenter: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<
    { type: "user" | "system"; text: string }[]
  >([
    {
      type: "system",
      text: "VEX SPATIAL OS COMMAND KERNEL v2.4 // TYPE '/hire' OR '/schedule' TO INIT",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleType: "Principal Engineering / Consulting",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    sound.playPing();
    const cmd = terminalInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: "user" as const, text: `> ${cmd}` }];

    if (cmd === "/hire" || cmd === "hire") {
      newLogs.push({
        type: "system",
        text: "STATUS: AVAILABLE Q3/Q4. DIRECT CHANNEL OPENED -> alexander@vexspatial.dev",
      });
    } else if (cmd === "/schedule" || cmd === "schedule") {
      newLogs.push({
        type: "system",
        text: "EXECUTIVE CALENDAR SYNC -> CAL.COM/ALEXANDER-VEX/PRINCIPAL-ADVISORY",
      });
    } else if (cmd === "/clear" || cmd === "clear") {
      setTerminalLogs([
        {
          type: "system",
          text: "VEX SPATIAL OS COMMAND KERNEL v2.4 // TYPE '/hire' OR '/schedule'",
        },
      ]);
      setTerminalInput("");
      return;
    } else {
      newLogs.push({
        type: "system",
        text: `COMMAND '${cmd}' RECORDED. FOR IMMEDIATE CONTACT USE FORM OR SEND INQUIRY.`,
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playPing();

    // Trigger futuristic confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6E3AFF", "#00F2FE", "#F9D423"],
    });

    setSubmitted(true);
  };

  const copyDirectEmail = () => {
    sound.playPing();
    navigator.clipboard.writeText("alexander@vexspatial.dev");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest font-bold mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>DIRECT COMMAND PORTAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-4">
          INITIATE COLLABORATION
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Open for select Principal Engineering, Creative Technology Leadership, and Architectural Advisory engagements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Terminal & Direct Channel */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Interactive Shell Console */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald/80" />
                  <span className="text-xs font-mono text-zinc-300 ml-2">VEX.SH // TERMINAL</span>
                </div>
                <span className="text-[10px] font-mono text-emerald">ONLINE</span>
              </div>

              {/* Logs output */}
              <div className="space-y-2 max-h-56 overflow-y-auto font-mono text-xs mb-4 pr-2">
                {terminalLogs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.type === "system"
                        ? "text-cyan leading-relaxed"
                        : "text-zinc-200 font-semibold"
                    }
                  >
                    {log.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt Input */}
            <form onSubmit={handleTerminalSubmit} className="relative mt-4">
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type /hire, /schedule, or /clear..."
                className="w-full bg-obsidian/90 border border-white/15 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan"
              />
              <button
                type="submit"
                className="absolute right-2 top-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-all"
              >
                EXEC
              </button>
            </form>
          </div>

          {/* Direct Email Fast Copy Card */}
          <div className="glass-panel rounded-3xl p-6 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                DIRECT SECURE ENCRYPTED CHANNEL
              </span>
              <div className="text-sm sm:text-base font-mono font-bold text-white mt-1">
                alexander@vexspatial.dev
              </div>
            </div>

            <button
              onClick={copyDirectEmail}
              data-cursor="copy"
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-5 h-5 text-emerald" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Right Column: Sleek Glassmorphic Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/15">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-emerald/10 border border-emerald/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                TRANSMISSION ACKNOWLEDGED
              </h3>
              <p className="text-sm text-zinc-400 max-w-md mb-8">
                Your executive inquiry has been prioritized. Alexander Vex or the advisory team will reply within 12 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
              >
                SEND ANOTHER TRANSMISSION
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-royal transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    EXECUTIVE EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.connor@cyberdyne.ai"
                    className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-royal transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  ENGAGEMENT TYPE / ROLE
                </label>
                <select
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-royal transition-all"
                >
                  <option>Principal Engineering / Advisory Role</option>
                  <option>Chief Architect / VP Frontend Consultation</option>
                  <option>Custom 3D / WebGL Enterprise Design System</option>
                  <option>Technical Interview / Press & Speaking</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  MISSION BRIEF / PROJECT DETAILS
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the scope, timeline, or leadership role requirements..."
                  className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-royal transition-all"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                  ENCRYPTED TLS 1.3 // IMMEDIATE DISPATCH
                </span>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="hire"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-royal to-electric text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(110,58,255,0.4)] hover:shadow-[0_0_45px_rgba(0,168,255,0.7)] transition-all duration-300"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} ALEXANDER VEX // SPATIAL OS ARCHITECTURES. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            X // TWITTER
          </a>
        </div>
      </footer>
    </section>
  );
};
