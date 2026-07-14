import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUTHRAN ARULMANI // AI & Cloud DevOps Engineer | NVIDIA Nemotron Winner",
  description:
    "Award-winning portfolio of Ruthran Arulmani. B.Sc. Computer Science (CGPA: 9.77/10) at KC College Mumbai. 2nd Place Winner at NVIDIA Nemotron Contest 2026. Specializing in Agentic AI, RAG, Linux, AWS, Docker, and Kubernetes.",
  keywords: [
    "Ruthran Arulmani",
    "CivicShield AI",
    "NVIDIA Nemotron Winner",
    "KC College Mumbai",
    "Agentic AI",
    "RAG",
    "AWS DevOps",
    "Kubernetes",
  ],
  authors: [{ name: "Ruthran Arulmani" }],
  openGraph: {
    title: "RUTHRAN ARULMANI // AI & Cloud DevOps Engineer | NVIDIA Nemotron Winner",
    description:
      "Award-winning portfolio of Ruthran Arulmani. B.Sc. Computer Science (CGPA: 9.77/10) at KC College Mumbai. 2nd Place Winner at NVIDIA Nemotron Contest 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-obsidian text-slate-100 antialiased selection:bg-royal selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
