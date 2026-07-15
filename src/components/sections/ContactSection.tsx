"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const { identity } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Principal Engineering / Consulting Opportunity",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00F2FE", "#4FACFE", "#F9D423"],
    });

    setSubmitted(true);
  };

  const copyDirectEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-widest font-bold mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white mb-4">
          CONNECT WITH RUTHRAN
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Available for select AI Engineering opportunities, cloud infrastructure architecture, and impactful collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Contact & Location Info */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="glass-card rounded-3xl p-8 border border-white/15 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-xs font-mono text-cyan uppercase tracking-widest font-semibold">
                DIRECT COMMUNICATION CHANNELS
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                Let&apos;s Build Impactful AI & Cloud Systems
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                Whether you are looking to collaborate on Agentic AI, robust AWS pipelines, or discuss research opportunities, feel free to reach out directly.
              </p>

              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3.5 truncate">
                  <div className="w-10 h-10 rounded-xl bg-cyan/15 border border-cyan/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-400">DIRECT EMAIL</div>
                    <div className="text-sm font-mono font-bold text-white truncate">
                      {identity.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyDirectEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all shrink-0 ml-2"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald/15 border border-emerald/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400">LOCATION & COLLEGE</div>
                  <div className="text-sm font-semibold text-white">
                    Mumbai, Maharashtra // KC College
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">CONNECT ON PLATFORMS</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ruthweb-site"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ruthran1803/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-cyan" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${identity.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                  aria-label="Send Email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Message Form */}
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
                MESSAGE SENT SUCCESSFULLY
              </h3>
              <p className="text-sm text-zinc-400 max-w-md mb-8">
                Thank you for reaching out! Ruthran Arulmani will review your message and reply promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
              >
                SEND ANOTHER MESSAGE
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
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  SUBJECT / ENGAGEMENT TYPE
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Engineering Role / Collaboration Inquiry"
                  className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Ruthran about your project, team, or opportunity..."
                  className="w-full bg-obsidian/80 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan transition-all"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                  SECURE & DIRECT TRANSMISSION
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-obsidian font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Small Clean Professional Footer */}
      <footer className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} RUTHRAN ARULMANI // B.SC. COMPUTER SCIENCE
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ruthran"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ruthran-arulmani"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5 text-cyan" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all"
            title="Email"
          >
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>Email</span>
          </a>
        </div>
      </footer>
    </section>
  );
};
