"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight, Smartphone, Laptop, Database, Server, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectsSection() {
  // SmartKhata real screenshots tabs
  const [smartKhataTab, setSmartKhataTab] = useState<"splash" | "home" | "drawer" | "voice" | "analytics">("home");

  const smartKhataScreens = {
    splash: {
      name: "Splash & Security",
      desc: "Brand splash launcher with 100% Safe & Secure ledger architecture.",
      image: "/assets/smartkhata_splash.png",
    },
    home: {
      name: "Cashbook Dashboard",
      desc: "Real-time balance calculations, weekly summary, and active cashbook management.",
      image: "/assets/smartkhata_home.png",
    },
    drawer: {
      name: "Navigation & Settings",
      desc: "Backup & restore, cashbook filters, help & support, and dark mode toggle.",
      image: "/assets/smartkhata_drawer.png",
    },
    voice: {
      name: "AI Voice Assistant",
      desc: "Speak naturally to log income or expenses automatically ('Finances at the speed of thought').",
      image: "/assets/smartkhata_voice.png",
    },
    analytics: {
      name: "Smart Analytics",
      desc: "Monthly savings growth, spending tendency charts, and expense breakdown.",
      image: "/assets/smartkhata_analytics.png",
    },
  };

  const featuredProjects = [
    {
      id: "used-bike-ml",
      name: "Used Bike Price Prediction",
      type: "Machine Learning Project",
      device: "desktop",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      problem: "Buyers and sellers struggle to estimate fair market value for second-hand motorcycles due to inconsistent pricing parameters.",
      solution: "Engineered a predictive ML model analyzing brand, engine CC, age, and mileage to estimate bike valuation with high R² accuracy.",
      features: ["Predictive ML Engine", "Matplotlib Data Visualizations", "Custom Feature Engineering", "Interactive Web Interface"],
      image: "/assets/project_bike.png", // Rendered fallback or custom dashboard UI mockup
      github: "https://github.com/Z-oss-tech",
      demo: "https://github.com/Z-oss-tech",
    },
    {
      id: "mechworkx",
      name: "Mechworkx",
      type: "Internship Project (Welogical Software Solutions)",
      device: "mobile",
      tech: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
      problem: "Vehicle owners face delayed mechanic dispatch and lack transparency in repair progress tracking.",
      solution: "Developed an Android & iOS mobile app allowing users to book vehicle mechanics, track status live, and view service history.",
      features: ["Service Bookings", "Live Status Tracking", "Firebase Realtime DB", "Mechanic Dispatch Dashboard"],
      image: "/assets/project_parking_app.png",
      github: "https://github.com/Z-oss-tech",
      demo: "https://github.com/Z-oss-tech",
    },
    {
      id: "phonics-app",
      name: "Phonics Learning App",
      type: "Educational Android Application",
      device: "mobile",
      tech: ["Java", "SQLite", "Android SDK", "XML"],
      problem: "Early learners need offline-accessible, structured audio-visual phonics lessons with progress tracking.",
      solution: "Engineered a native Android app with interactive lesson modules, offline quiz tests, progress scoring, and local SQLite data preservation.",
      features: ["Interactive Lessons", "Practice Tests", "Offline Progress Preserved", "Results Dashboard"],
      image: "/assets/project_learning_app.png",
      github: "https://github.com/Z-oss-tech",
      demo: "https://github.com/Z-oss-tech",
    },
    {
      id: "lavish-ambiance",
      name: "Lavish Ambiance Design",
      type: "Modern Interior Design Website",
      device: "macbook",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      problem: "High-end interior design firms need a modern web showcase to convert prospective luxury client inquiries.",
      solution: "Built a responsive web platform featuring interactive portfolio galleries, contact inquiry handling, and a custom PHP backend.",
      features: ["Interactive Gallery", "Responsive Layout", "PHP Contact Handler", "Smooth Animations"],
      image: "/assets/project_smartkhata.png",
      github: "https://github.com/Z-oss-tech",
      demo: "https://github.com/Z-oss-tech",
    },
  ];

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#08090D]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Software Portfolio Showcase
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
              Featured <span className="text-gradient-purple">Projects</span>
            </h2>
          </motion.div>

          <a
            href="https://github.com/Z-oss-tech"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B82F6] hover:text-[#7C3AED] transition-colors"
          >
            Explore Repositories on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* FLAGSHIP PROJECT: SmartKhata Interactive Showcase with Real Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] glass-panel border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-14 mb-24 relative"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-lg">
                Flagship Project
              </span>
              <span className="text-xs text-slate-400 font-mono">Mobile App (Android &amp; iOS)</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Z-oss-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub Repo
              </a>
              <a
                href="https://github.com/Z-oss-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-xs shadow-lg transition-transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Story, Features & Interactive Screen Selector */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] block mb-2">
                  Digital Financial Bookkeeping
                </span>
                <h3 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mb-4">
                  SmartKhata
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  A modern digital financial management application built to simplify bookkeeping, track expenses, generate instant reports, and organize business finances.
                </p>
              </div>

              {/* Real Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Node.js", "PostgreSQL", "Firebase"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-xl text-xs font-bold bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/30">
                    {t}
                  </span>
                ))}
              </div>

              {/* Key Features Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Income & Expense Tracking",
                  "Monthly Analytics",
                  "Instant PDF Reports",
                  "AI Voice Assistant",
                  "Modern Cashbook Dashboard",
                  "Offline Support & Backup",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Screenshot Selector */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Inspect Actual Application Screenshots:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(["home", "analytics", "voice", "drawer", "splash"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSmartKhataTab(key)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                        smartKhataTab === key
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-lg scale-105"
                          : "bg-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Premium Android Device Mockup displaying Real Screenshots */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Android Phone Frame */}
              <motion.div
                whileHover={{ rotateY: 6, rotateX: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-72 sm:w-80 h-[520px] sm:h-[580px] rounded-[3.5rem] border-8 border-[#161A22] bg-[#08090D] overflow-hidden shadow-[0_30px_70px_rgba(124,58,237,0.4)]"
              >
                {/* Real App Screenshot */}
                <Image
                  src={smartKhataScreens[smartKhataTab].image}
                  alt={smartKhataScreens[smartKhataTab].name}
                  fill
                  priority
                  className="object-contain object-center transition-all duration-300 bg-[#08090D]"
                />

                {/* Android Camera Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#161A22] rounded-full z-20 pointer-events-none" />
              </motion.div>

              {/* Caption */}
              <div className="mt-4 text-center max-w-sm">
                <span className="text-xs font-bold text-white block">
                  {smartKhataScreens[smartKhataTab].name}
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {smartKhataScreens[smartKhataTab].desc}
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* OTHER FEATURED PROJECTS GRID */}
        <div className="space-y-16">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[3rem] glass-panel border border-white/10 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Project Info */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] block mb-2">
                    {proj.type}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-3">
                    {proj.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">The Challenge</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{proj.problem}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                    <span className="text-[10px] font-bold uppercase text-[#3B82F6] block mb-1">The Solution</span>
                    <p className="text-xs text-slate-200 leading-relaxed">{proj.solution}</p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-xs shadow-md transition-transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Device Mockup Display */}
              <div className={`lg:col-span-6 flex justify-center items-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {proj.device === "macbook" ? (
                  /* MacBook Laptop Frame for Web Projects */
                  <div className="relative w-full max-w-lg h-[280px] sm:h-[320px] rounded-2xl border-4 border-slate-700 bg-slate-900 overflow-hidden shadow-2xl p-2">
                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  /* Android Mobile Frame */
                  <div className="relative w-64 sm:w-72 h-[420px] sm:h-[480px] rounded-[3rem] border-8 border-[#161A22] bg-[#08090D] overflow-hidden shadow-2xl">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
