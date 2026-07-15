import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#081226", // Deep peaceful midnight navy canvas
        charcoal: "#0F2147", // Sapphire cobalt surface
        surface: "#0A1931", // Calm blue abyss
        card: "rgba(15, 33, 71, 0.65)", // Glass sapphire
        royal: "#A855F7", // Serene violet (matching 3D sphere ring)
        electric: "#38BDF8", // Sky blue
        emerald: "#00F2FE", // Crystalline cyan
        cyan: "#38BDF8", // Peaceful azure
        gold: "#FCD34D", // Warm soft amber
        orange: "#FB7185", // Soft coral
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "aurora-flow": "auroraFlow 18s ease-in-out infinite alternate",
        "border-shimmer": "borderShimmer 4s linear infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        auroraFlow: {
          "0%": { transform: "translate(0px, 0px) scale(1) rotate(0deg)" },
          "50%": { transform: "translate(80px, -60px) scale(1.15) rotate(10deg)" },
          "100%": { transform: "translate(-60px, 40px) scale(0.95) rotate(-10deg)" },
        },
        borderShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(24px)" },
          "50%": { opacity: "0.85", filter: "blur(36px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
