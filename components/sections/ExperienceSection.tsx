"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, CheckCircle2, Building2 } from "lucide-react";

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const roadmapData = [
    {
      role: "Founder & Lead Mobile Engineer",
      company: "BliXo.tech",
      timeline: "2024 - Present",
      type: "Product Studio & Agency",
      responsibilities:
        "Architecting cross-platform mobile apps, native Android software, and client web platforms. Directing product strategy, UI/UX systems, and production database sync.",
      achievements: [
        "Delivered 15+ cross-platform mobile & web applications for client projects.",
        "Engineered SmartKhata financial digital cashbook platform from scratch.",
        "Pioneered clean architecture pipelines reducing mobile crash rates by 40%.",
        "Managed end-to-end deployment workflows across Google Play & App Store ecosystems.",
      ],
      technologies: ["Flutter", "Android SDK", "Kotlin", "Java", "Node.js", "Firebase", "PostgreSQL"],
    },
  ];

  return (
    <section id="roadmap" className="py-28 relative overflow-hidden bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-4 border border-white/10">
              <Briefcase className="w-3.5 h-3.5" />
              Leadership &amp; Academic Roadmap
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Career <span className="text-gradient-purple">Roadmap</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Expanding roadmap for product studio leadership and academic credentials.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Animated Roadmap */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#7C3AED]" />
              Professional Product Roadmap
            </h3>

            <div className="space-y-6">
              {roadmapData.map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl p-8 hover:border-[#7C3AED]/50 transition-all duration-300"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] block mb-1">
                          {item.company} · {item.type}
                        </span>
                        <h4 className="text-xl font-bold font-heading text-white">{item.role}</h4>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 hidden sm:inline-block">
                          {item.timeline}
                        </span>
                        <button className="p-2 rounded-xl bg-white/5 text-slate-300">
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                      {item.responsibilities}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-6 mt-6 border-t border-white/10 space-y-4 overflow-hidden"
                        >
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Key Achievements</span>
                          <div className="space-y-2">
                            {item.achievements.map((ach) => (
                              <div key={ach} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Technologies</span>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-xl text-[11px] font-semibold bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Academic Profile (Education) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
              Academic Profile
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6 relative overflow-hidden group hover:border-[#3B82F6]/50 transition-colors"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] absolute top-0 left-0" />

              <div className="flex items-center justify-between pt-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30">
                  Verified Academic Credential
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Graduation: 2026
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-bold font-heading text-white mb-1">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-sm font-semibold text-[#06B6D4]">
                  Dolat Usha Institute, Valsad, Gujarat
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                <div>
                  <span className="font-bold text-white block mb-1">Core Computer Science Coursework</span>
                  <p className="text-slate-400">Data Structures &amp; Algorithms, Object-Oriented Software Design (Java/Kotlin), Mobile Software Architecture, Relational Databases (SQL).</p>
                </div>
                <div>
                  <span className="font-bold text-white block mb-1">Academic Distinction &amp; Projects</span>
                  <p className="text-slate-400">Engineered custom Android applications for campus slot reservations and interactive student learning platforms.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
