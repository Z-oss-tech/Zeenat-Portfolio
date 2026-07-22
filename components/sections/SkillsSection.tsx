"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Layers, ExternalLink } from "lucide-react";

interface UniverseTech {
  id: string;
  name: string;
  category: "Mobile" | "Backend" | "Database" | "Design & Tools";
  icon: string;
  badge: "Expert" | "Advanced" | "Proficient";
  years: string;
  description: string;
  relatedProjects: string[];
  color: string;
}

const universeData: UniverseTech[] = [
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile",
    icon: "🚀",
    badge: "Expert",
    years: "2+ Years",
    description: "Cross-platform mobile application development with BLoC pattern, reactive UIs, and native channels.",
    relatedProjects: ["SmartKhata", "BliXo Client Apps"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "android",
    name: "Android SDK",
    category: "Mobile",
    icon: "🤖",
    badge: "Expert",
    years: "2+ Years",
    description: "Native Android development utilizing Java, Kotlin, Jetpack components, and local SQLite data caching.",
    relatedProjects: ["Learning App", "Parking Booking System"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "dart",
    name: "Dart",
    category: "Mobile",
    icon: "⚡",
    badge: "Expert",
    years: "2+ Years",
    description: "Strongly typed object-oriented programming for high-framerate mobile software.",
    relatedProjects: ["SmartKhata", "Cross-Platform Frameworks"],
    color: "from-sky-400 to-indigo-500",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "Mobile",
    icon: "🎯",
    badge: "Advanced",
    years: "2+ Years",
    description: "Modern concise Android development with Coroutines, StateFlow, and Jetpack Compose fundamentals.",
    relatedProjects: ["Native Android Architecture"],
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "java",
    name: "Java",
    category: "Mobile",
    icon: "☕",
    badge: "Expert",
    years: "2+ Years",
    description: "Core object-oriented programming, Android activity lifecycles, multithreading, and REST client integration.",
    relatedProjects: ["Learning App", "Parking System"],
    color: "from-red-500 to-orange-600",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Backend",
    icon: "🔥",
    badge: "Expert",
    years: "2+ Years",
    description: "Authentication, Firestore Realtime Database, Cloud Messaging, and Analytics integration.",
    relatedProjects: ["SmartKhata", "Mobile Push Sync"],
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    badge: "Proficient",
    years: "1+ Years",
    description: "RESTful API development, Express microservices, and PostgreSQL database queries.",
    relatedProjects: ["SmartKhata Backend API"],
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    badge: "Advanced",
    years: "1+ Years",
    description: "Relational database schema modeling, transaction management, and optimized indexing.",
    relatedProjects: ["SmartKhata Cashbook Ledger"],
    color: "from-blue-600 to-indigo-800",
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "Database",
    icon: "💾",
    badge: "Expert",
    years: "2+ Years",
    description: "Embedded offline-first local database caching for native Android & Flutter apps.",
    relatedProjects: ["Learning App Progress Sync"],
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design & Tools",
    icon: "🎨",
    badge: "Advanced",
    years: "2+ Years",
    description: "User interface design systems, mobile app wireframing, component prototyping, and developer handoffs.",
    relatedProjects: ["BliXo.tech UI Prototypes"],
    color: "from-pink-500 to-purple-600",
  },
];

const categoryTabs = ["All", "Mobile", "Backend", "Database", "Design & Tools"] as const;

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTech, setSelectedTech] = useState<UniverseTech | null>(universeData[0]);

  const filteredData =
    activeCategory === "All"
      ? universeData
      : universeData.filter((t) => t.category === activeCategory);

  return (
    <section id="universe" className="py-28 relative overflow-hidden bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-4 border border-white/10">
              <Cpu className="w-3.5 h-3.5" />
              Interactive Technology Universe
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Software <span className="text-gradient-purple">Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Click any tech sphere to inspect architectural details, experience, and associated projects.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categoryTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-lg scale-105"
                  : "glass-pill text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Universe Grid & Inspector Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech Spheres Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredData.map((tech) => {
              const isSelected = selectedTech?.id === tech.id;
              return (
                <motion.div
                  key={tech.id}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(tech)}
                  className={`p-5 rounded-3xl glass-panel border cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                    isSelected
                      ? "border-[#7C3AED] bg-[#7C3AED]/15 shadow-[0_15px_30px_rgba(124,58,237,0.3)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl mb-3 shadow-inner">
                    {tech.icon}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white mb-1">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-[#06B6D4]">
                    {tech.years}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Technology Inspector Side Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedTech && (
                <motion.div
                  key={selectedTech.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6 relative overflow-hidden"
                >
                  {/* Top Gradient Ring */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${selectedTech.color} absolute top-0 left-0`} />

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                        {selectedTech.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-white">
                          {selectedTech.name}
                        </h3>
                        <span className="text-xs font-semibold text-slate-400">
                          {selectedTech.category}
                        </span>
                      </div>
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/20 text-[#3B82F6] border border-[#7C3AED]/30">
                      {selectedTech.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedTech.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Associated Projects
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTech.relatedProjects.map((p) => (
                        <span
                          key={p}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 text-[#06B6D4] border border-white/10"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
