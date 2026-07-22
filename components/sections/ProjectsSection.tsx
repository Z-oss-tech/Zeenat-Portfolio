"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight, Smartphone, Database, Server, Layers, ShieldCheck, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectsSection() {
  const [activeScreen, setActiveScreen] = useState<"dashboard" | "transactions" | "reports" | "analytics">("dashboard");

  const screenDetails = {
    dashboard: {
      title: "Real-Time Cashbook Overview",
      desc: "Live income vs. expense tracking charts with instant calculation of daily net profits.",
      badge: "Dashboard Screen",
    },
    transactions: {
      title: "Categorized Transaction History",
      desc: "Detailed ledger listing with payment methods, timestamps, and search filters.",
      badge: "Transactions Screen",
    },
    reports: {
      title: "Instant PDF Report Export",
      desc: "Generates formatted financial ledgers & tax-ready PDF summaries in one click.",
      badge: "Reports Screen",
    },
    analytics: {
      title: "Interactive Expense Breakdown",
      desc: "Visual charts dissecting spending categories and month-over-month revenue growth.",
      badge: "Analytics Screen",
    },
  };

  const secondaryProjects = [
    {
      id: "learning-app",
      name: "Learning App",
      subtitle: "Educational Mobile Platform",
      problem:
        "Traditional learning apps often suffer from clunky navigation, lack of offline progress tracking, and low student retention rates.",
      solution:
        "An interactive Android application built with native Java and SQLite, providing gamified quiz engines, course streak badges, and offline progress preservation.",
      architecture: "Native Android SDK, MVVM Pattern, Offline SQLite Sync, Custom XML Layouts",
      image: "/assets/learning_app.png",
      technologies: ["Java", "SQLite", "XML", "Android SDK"],
      results: "100% offline functionality with zero data loss during connectivity drops.",
      githubUrl: "https://github.com/Z-oss-tech",
      demoUrl: "https://github.com/Z-oss-tech",
    },
    {
      id: "parking-booking",
      name: "Online Parking Booking System",
      subtitle: "Real-Time Slot & Floor Management",
      problem:
        "Drivers waste time searching for available parking in high-density urban areas and government buildings without live slot visibility.",
      solution:
        "An end-to-end mobile & web solution with real-time floor map navigation, QR pass entry verification, and admin floor capacity analytics.",
      architecture: "Native Android SDK, RESTful PHP Backend, MySQL Database, Instant QR Scanner",
      image: "/assets/parking_app.png",
      technologies: ["Java", "PHP", "MySQL", "Android SDK"],
      results: "Reduced parking search time by 65% with instant QR slot reservation passes.",
      githubUrl: "https://github.com/Z-oss-tech",
      demoUrl: "https://github.com/Z-oss-tech",
    },
  ];

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#08090D]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#3B82F6]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

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
              Selected Software Products
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
              Featured <span className="text-gradient-purple">Showcase &amp; Architecture</span>
            </h2>
          </motion.div>

          <a
            href="https://github.com/Z-oss-tech"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B82F6] hover:text-[#7C3AED] transition-colors"
          >
            View All Repositories on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* FLAGSHIP PROJECT 1: SmartKhata Interactive Product Launch Page */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] glass-panel border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-14 mb-24 relative"
        >
          {/* Top Banner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-lg">
                Flagship Case Study
              </span>
              <span className="text-xs text-slate-400 font-mono">Mobile App &amp; Web Platform</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Z-oss-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
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
            
            {/* Left: Narrative, Problem, Solution & Architecture */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] block mb-2">
                  Digital Cashbook &amp; Financial Platform
                </span>
                <h3 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mb-4">
                  SmartKhata
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-[1.7]">
                  A cross-platform financial platform built for small business owners and freelancers to track daily transactions, calculate net profits, and generate tax-ready reports.
                </p>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">The Problem</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Manual ledger entries, delayed financial reconciliation, and fragmented paper reporting.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                  <span className="text-[10px] font-bold uppercase text-[#06B6D4] block mb-1">The Solution</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Real-time PostgreSQL sync, instant PDF ledger exports, multi-user sync, and QR payment sharing.
                  </p>
                </div>
              </div>

              {/* Architecture Highlight */}
              <div className="p-4 rounded-2xl bg-[#161A22] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#3B82F6] mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Architecture &amp; Tech Stack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Flutter BLoC Pattern, Node.js REST API, PostgreSQL Relational Database, Firebase Authentication &amp; Realtime Sync.
                </p>
              </div>

              {/* Interactive Screen Switcher Tabs */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Interactive Phone Screen Preview:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(["dashboard", "transactions", "reports", "analytics"] as const).map((screen) => (
                    <button
                      key={screen}
                      onClick={() => setActiveScreen(screen)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                        activeScreen === screen
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-lg scale-105"
                          : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {screen}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Interactive Phone Mockup */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Phone Mockup Container */}
              <motion.div
                whileHover={{ rotateY: 8, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-72 sm:w-84 h-[500px] sm:h-[560px] rounded-[3.5rem] border-8 border-[#161A22] bg-[#08090D] overflow-hidden shadow-[0_30px_70px_rgba(124,58,237,0.4)]"
              >
                {/* Dynamic Screen View */}
                <Image
                  src={featuredProjectImage(activeScreen)}
                  alt="SmartKhata Screen Preview"
                  fill
                  priority
                  className="object-cover object-top transition-all duration-500"
                />

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#161A22] rounded-b-2xl z-20" />
              </motion.div>

              {/* Active Screen Detail Badge */}
              <div className="mt-6 text-center max-w-sm">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/30 inline-block mb-1">
                  {screenDetails[activeScreen].badge}
                </span>
                <h4 className="text-sm font-bold text-white font-heading">
                  {screenDetails[activeScreen].title}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {screenDetails[activeScreen].desc}
                </p>
              </div>

            </div>

          </div>

        </motion.div>

        {/* SECONDARY PROJECTS: Deep Showcase Layout */}
        <div className="space-y-20">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[3rem] glass-panel border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] block mb-2">
                    {project.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                    {project.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Problem</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                    <span className="text-[10px] font-bold uppercase text-[#3B82F6] block mb-1">Solution</span>
                    <p className="text-xs text-slate-200 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#161A22] border border-white/10">
                  <span className="text-[10px] font-bold uppercase text-purple-300 block mb-1">Architecture</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.architecture}</p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-xs shadow-md transition-transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className={`lg:col-span-6 relative min-h-[340px] sm:min-h-[400px] rounded-3xl overflow-hidden bg-[#101218] ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function featuredProjectImage(screen: string) {
  return "/assets/smartkhata.png";
}
