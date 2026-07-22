"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, GitCommit, GraduationCap, Building2, Smartphone, Code2, Sparkles, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const journeyTimeline: Milestone[] = [
  {
    year: "2022",
    title: "Started Android Development & Learned Java",
    subtitle: "Foundational Mobile Engineering",
    description:
      "Began deep dive into object-oriented programming, data structures, Android SDK lifecycle, and local SQLite database design.",
    icon: <Code2 className="w-5 h-5 text-[#3B82F6]" />,
    tags: ["Java", "Android SDK", "SQLite", "XML"],
  },
  {
    year: "2023",
    title: "Built First Native Mobile Applications",
    subtitle: "Learning App & Parking Booking System",
    description:
      "Engineered an interactive educational app and a real-time parking reservation system with instant QR pass verification.",
    icon: <Smartphone className="w-5 h-5 text-[#06B6D4]" />,
    tags: ["Java", "PHP", "MySQL", "QR Verification"],
  },
  {
    year: "2023",
    title: "Discovered Flutter & Cross-Platform Architecture",
    subtitle: "Embracing Reactive UI & Dart",
    description:
      "Mastered Flutter framework, BLoC/Provider state management, and building high-framerate mobile interfaces across iOS & Android.",
    icon: <Sparkles className="w-5 h-5 text-[#7C3AED]" />,
    tags: ["Flutter", "Dart", "BLoC Pattern", "REST APIs"],
  },
  {
    year: "2024",
    title: "Engineered SmartKhata Financial Platform",
    subtitle: "Flagship Product Launch",
    description:
      "Designed and launched SmartKhata cashbook platform featuring PostgreSQL real-time sync, PDF ledger exports, and multi-user access.",
    icon: <GitCommit className="w-5 h-5 text-[#EC4899]" />,
    tags: ["Flutter", "Node.js", "PostgreSQL", "Firebase"],
  },
  {
    year: "2024",
    title: "Founded BliXo.tech Product Studio",
    subtitle: "Client & Software Leadership",
    description:
      "Established BliXo.tech agency delivering custom mobile apps, web solutions, and software architectures for businesses worldwide.",
    icon: <Building2 className="w-5 h-5 text-amber-400" />,
    tags: ["Full Stack", "Mobile Apps", "UI/UX", "Consulting"],
  },
  {
    year: "Present",
    title: "Building Premium Software & Pursuing BCA Degree",
    subtitle: "Dolat Usha Institute (Graduation 2026)",
    description:
      "Consistently refining code quality, open-source contributions, and mobile product engineering while pursuing BCA degree at Dolat Usha Institute, Valsad, Gujarat.",
    icon: <GraduationCap className="w-5 h-5 text-[#22C55E]" />,
    tags: ["BCA 2026", "Open Source", "Senior Mobile Engineer"],
  },
];

export function AboutSection() {
  return (
    <section id="journey" className="py-28 relative overflow-hidden bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#3B82F6] uppercase tracking-wider mb-4 border border-white/10">
              <Compass className="w-3.5 h-3.5" />
              My Journey &amp; Growth
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Evolution of a <span className="text-gradient-purple">Software Craftsman</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              From writing my first line of Java code to founding BliXo.tech and building flagship platforms.
            </p>
          </motion.div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 border-l-2 border-white/10 space-y-12">
          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-10 h-10 rounded-2xl glass-panel border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-[#7C3AED] transition-all">
                {item.icon}
              </div>

              <div className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl hover:border-[#7C3AED]/50 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/20 text-[#3B82F6] border border-[#7C3AED]/30">
                    {item.year}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
