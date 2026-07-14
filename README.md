<div align="center">
  <h1>RUTHRAN ARULMANI // 3D INTERACTIVE PORTFOLIO</h1>
  <p><strong>B.Sc. Computer Science (CGPA: 9.77/10) @ KC College Mumbai | AI & Cloud DevOps Engineer</strong></p>
  <p><em>2nd Place Winner @ NVIDIA Nemotron Contest 2026 &bull; Best Content Winner @ IRISD 2026</em></p>

  <p>
    <a href="https://github.com/ruthweb-site/Portfolio"><img src="https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" /></a>
    <a href="https://github.com/ruthweb-site/Portfolio"><img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
    <a href="https://github.com/ruthweb-site/Portfolio"><img src="https://img.shields.io/badge/Three.js_R3F-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" /></a>
    <a href="https://github.com/ruthweb-site/Portfolio"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://github.com/ruthweb-site/Portfolio"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://github.com/ruthweb-site/Portfolio"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  </p>
</div>

---

## 🌟 Overview

An extraordinary, futuristic, luxury-dark portfolio website engineered for **Ruthran Arulmani**. Combining the polish of **Apple Human Interface Design**, the engineering minimalism of **Linear.app**, and the 3D WebGL motion graphics of **NVIDIA**, this portfolio is designed to captivate technical interviewers, hiring managers, and enterprise leaders within 3 seconds.

## ✨ Key Features

- **🌐 Interactive 3D Cyber-Sphere & Aurora Lighting (`@react-three/fiber`)**
  - High-performance real-time 3D particle mesh and orbital torus rings that dynamically follow cursor velocity at 60 FPS.
  - Multi-layered ambient aurora lighting and noise textures creating an ultra-premium glassmorphism aesthetic.
- **🏆 National & International Honors Showcase**
  - **NVIDIA Nemotron Contest 2026**: 2nd Place Winner nationally for *CivicShield AI* (Government scam and fake document detection platform).
  - **IRISD 2026 International Conference**: Best Content Prize for presenting original interdisciplinary research in Mumbai.
  - **Academic Distinction**: 9.77 / 10.0 CGPA across B.Sc. Computer Science coursework at Kishinchand Chellaram College.
- **🔬 Deep-Dive Interactive Case Studies**
  - **CivicShield AI**: Multi-agent RAG verification with NVIDIA Nemotron, OCR, and FastAPI.
  - **Healthix AI**: Hybrid regression + Qwen LLM nutrition generation with Flutter & Firebase.
  - **Jenkins CI/CD Pipeline-as-Code**: Automated containerization and AWS EC2 deployment triggered by GitHub Webhooks.
  - **Auto-Scaling Kubernetes Quiz App**: Docker, K8s Kind cluster, HPA scaling, and zero-downtime Canary deployment strategies.
  - **Serverless AWS Healthcare Pipeline**: S3, Lambda, Glue PySpark ETL, CloudWatch, and QuickSight BI analytics.
- **🎛️ Interactive Case Study Modal & Audio Feedback Engine**
  - Inspect exact architecture breakdowns, drag interactive simulation telemetry sliders, and read clean syntax-highlighted kernel source code (`Groovy`, `Python`, `YAML`, `TypeScript`).
  - Optional Web Audio API sound synthesizer producing tactile Apple/Linear-grade UI hover chirps and confirmation tones.
- **⚡ 60 FPS Momentum Scroll & Accessible Architecture**
  - Powered by `Lenis` smooth momentum scroll engine and zero-jank Framer Motion layout transitions.

---

## 🛠️ Technology Stack

| Category | Technologies & Tools |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 15 (App Router)](https://nextjs.org), [React 19](https://react.dev), [TypeScript 5](https://www.typescriptlang.org) |
| **3D & WebGL Engine** | [Three.js](https://threejs.org), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animation & Scroll** | [Framer Motion](https://www.framer.com/motion/), [Lenis Smooth Scroll](https://lenis.darkroom.engineering/), [Canvas Confetti](https://github.com/catdad/canvas-confetti) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com), Custom Glassmorphism (`.glass-card`, `.glass-panel`), Lucide Icons |
| **Audio & Performance** | Web Audio API (`sound.ts`), Dynamic WebGL Transpilation (`next.config.ts`) |

---

## 🚀 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/ruthweb-site/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)** to experience the portfolio locally.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
├── public/
│   ├── ruthran-professional.png     # Primary avatar / professional portrait photo
│   └── profile.jpg                  # Backup photo reference
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom dark luxury palette, noise overlays & glassmorphism
│   │   ├── layout.tsx               # Root layout with Google Fonts (Inter, Space Grotesk) & SEO
│   │   └── page.tsx                 # Main application entry point wrapped in LenisProvider
│   ├── components/
│   │   ├── canvas/
│   │   │   └── InteractiveCyberSphere.tsx # R3F / Three.js 3D interactive particle sphere
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # High-impact hero with photo card & NVIDIA winner pill
│   │   │   ├── AboutSection.tsx     # Executive bio, KC College 9.77 CGPA & Feistron leadership
│   │   │   ├── AchievementsSection.tsx # NVIDIA Nemotron 2nd Place, IRISD research & honors
│   │   │   ├── FlagshipProjectsSection.tsx # Interactive 3D tilt project cards & deep-dive modal
│   │   │   ├── ExperienceTimelineSection.tsx # Academic & leadership career milestones timeline
│   │   │   ├── SkillsMatrixSection.tsx # Cloud, DevOps, Agentic AI & Full-stack spectrum
│   │   │   └── ContactSection.tsx   # Direct email copy, engagement form & social icon footer
│   │   └── ui/
│   │       ├── AmbientAurora.tsx    # Animated background light blobs & noise texture overlay
│   │       ├── LenisProvider.tsx    # Smooth momentum scroll wrapper
│   │       └── NavbarHUD.tsx        # Minimalist Apple/Linear luxury navigation bar
│   ├── data/
│   │   └── portfolioData.ts         # Single source of truth for bio, projects, awards & metrics
│   └── lib/
│       └── sound.ts                 # Web Audio API sound synthesizer controller
├── tailwind.config.ts               # Custom tokens (#050505 obsidian, #00F2FE cyan, #F9D423 gold)
└── package.json
```

---

## 📬 Connect with Ruthran

- **Email**: `ruthran.arulmani@gmail.com`
- **LinkedIn**: [linkedin.com/in/ruthran-arulmani](https://linkedin.com/in/ruthran-arulmani)
- **GitHub**: [github.com/ruthran](https://github.com/ruthran)

---

<div align="center">
  <p><strong>&copy; 2026 RUTHRAN ARULMANI. ALL RIGHTS RESERVED.</strong></p>
</div>
