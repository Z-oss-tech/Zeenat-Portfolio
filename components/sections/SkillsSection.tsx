"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";

interface SkillItem {
  id: string;
  name: string;
  category: "Mobile" | "Backend" | "Web" | "Machine Learning" | "Database" | "Tools";
  icon: string;
  description: string;
  projects: string[];
}

const skillsList: SkillItem[] = [
  // Mobile
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile",
    icon: "🚀",
    description: "Cross-platform mobile app framework for building high-performance iOS and Android applications.",
    projects: ["SmartKhata", "Mechworkx"],
  },
  {
    id: "dart",
    name: "Dart",
    category: "Mobile",
    icon: "⚡",
    description: "Object-oriented language optimized for fast reactive UI and client development.",
    projects: ["SmartKhata", "Mechworkx"],
  },
  {
    id: "java",
    name: "Java",
    category: "Mobile",
    icon: "☕",
    description: "Core Android development language for native activity management and SQLite integration.",
    projects: ["Phonics Learning App"],
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "Mobile",
    icon: "🎯",
    description: "Modern concise programming language for Android SDK application development.",
    projects: ["Android Native Apps"],
  },
  {
    id: "cpp",
    name: "C++",
    category: "Mobile",
    icon: "💻",
    description: "High-performance systems programming and algorithm logic integration.",
    projects: ["Core Algorithms"],
  },
  {
    id: "android-sdk",
    name: "Android SDK",
    category: "Mobile",
    icon: "🤖",
    description: "Native Android app architecture, activity lifecycles, and component managers.",
    projects: ["Phonics Learning App"],
  },
  {
    id: "firebase-mobile",
    name: "Firebase",
    category: "Mobile",
    icon: "🔥",
    description: "Authentication, Cloud Messaging, Firestore, and Realtime Database mobile integration.",
    projects: ["SmartKhata", "Mechworkx"],
  },
  {
    id: "sqlite-mobile",
    name: "SQLite",
    category: "Mobile",
    icon: "💾",
    description: "Embedded local relational database for offline Android & Flutter data persistence.",
    projects: ["Phonics Learning App"],
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    description: "Asynchronous event-driven server runtime for RESTful APIs and backend microservices.",
    projects: ["SmartKhata Backend API"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Backend",
    icon: "🐘",
    description: "Relational database server management, SQL schema modeling, and transaction safety.",
    projects: ["SmartKhata Cashbook Ledger"],
  },
  {
    id: "firebase-backend",
    name: "Firebase Backend",
    category: "Backend",
    icon: "🔥",
    description: "Cloud functions, security rules, and real-time data sync services.",
    projects: ["SmartKhata", "Mechworkx"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "Backend",
    icon: "📊",
    description: "Structured Query Language for data querying, indexing, and relational operations.",
    projects: ["SmartKhata", "Phonics Learning App"],
  },

  // Web
  {
    id: "html",
    name: "HTML",
    category: "Web",
    icon: "🌐",
    description: "Semantic web document structuring and accessibility standards.",
    projects: ["Lavish Ambiance Design"],
  },
  {
    id: "css",
    name: "CSS",
    category: "Web",
    icon: "🎨",
    description: "Modern web layout styling, CSS Grid, Flexbox, and responsive design systems.",
    projects: ["Lavish Ambiance Design"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Web",
    icon: "🟨",
    description: "Dynamic client-side interactivity, DOM manipulation, and asynchronous fetch APIs.",
    projects: ["Lavish Ambiance Design"],
  },
  {
    id: "php",
    name: "PHP",
    category: "Web",
    icon: "🐘",
    description: "Server-side web scripting and form processing backend integration.",
    projects: ["Lavish Ambiance Design"],
  },

  // Machine Learning
  {
    id: "python",
    name: "Python",
    category: "Machine Learning",
    icon: "🐍",
    description: "High-level programming for data science, machine learning models, and automation scripts.",
    projects: ["Used Bike Price Prediction"],
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    category: "Machine Learning",
    icon: "⚙️",
    description: "Machine learning library for regression algorithms, model training, and evaluation.",
    projects: ["Used Bike Price Prediction"],
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Machine Learning",
    icon: "🐼",
    description: "Data manipulation, cleaning, DataFrame transformations, and tabular analysis.",
    projects: ["Used Bike Price Prediction"],
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Machine Learning",
    icon: "🔢",
    description: "Numerical matrix computations and multi-dimensional array processing.",
    projects: ["Used Bike Price Prediction"],
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    category: "Machine Learning",
    icon: "📈",
    description: "Data visualization library for plotting price distribution charts and feature correlations.",
    projects: ["Used Bike Price Prediction"],
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "Tools",
    icon: "🐙",
    description: "Distributed version control system for code branching and tracking.",
    projects: ["All Software Projects"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    icon: "🐙",
    description: "Cloud repository hosting, open-source pull requests, and project management.",
    projects: ["All Software Projects"],
  },
  {
    id: "android-studio",
    name: "Android Studio",
    category: "Tools",
    icon: "📱",
    description: "Primary IDE for native Android SDK and Flutter emulator debugging.",
    projects: ["SmartKhata", "Phonics Learning App", "Mechworkx"],
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    icon: "💻",
    description: "Lightweight code editor for Web, Flutter, and Python ML scripting.",
    projects: ["Lavish Ambiance Design", "Used Bike ML Project"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "Tools",
    icon: "🎨",
    description: "UI/UX wireframing, component prototyping, and interface design.",
    projects: ["SmartKhata UI", "BliXo.Tech Prototypes"],
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    icon: "🚀",
    description: "API client for testing REST endpoint responses, headers, and payloads.",
    projects: ["SmartKhata REST API"],
  },
];

const categoryTabs = ["All", "Mobile", "Backend", "Web", "Machine Learning", "Tools"] as const;

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(skillsList[0]);

  const filteredSkills =
    activeTab === "All"
      ? skillsList
      : skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#08090D]" aria-label="Tech Stack & Skills">
      {/* Section top glow */}
      <div className="section-glow-top" aria-hidden="true" />

      {/* Ambient orbs */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/08 rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#06B6D4]/06 rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />

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
              Interactive Technology Wall
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Tech <span className="text-gradient-purple">Stack</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Click or hover any technology card to inspect description and associated projects.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
              {filteredSkills.length} technologies loaded
            </div>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categoryTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white shadow-lg scale-105"
                  : "glass-pill text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Wall Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cards Wall Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {filteredSkills.map((sk) => {
              const isSelected = selectedSkill?.id === sk.id;
              return (
                <motion.div
                  key={sk.id}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedSkill(sk)}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${sk.name} – ${sk.category}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedSkill(sk)}
                  className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all duration-300 flex items-center gap-3 card-shine ${
                    isSelected
                      ? "border-[#7C3AED] bg-[#7C3AED]/20 shadow-lg shadow-purple-500/20"
                      : "border-white/10 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all duration-300 ${isSelected ? 'bg-[#7C3AED]/30' : 'bg-white/5'}`}>
                    {sk.icon}
                  </div>
                  <div className="truncate">
                    <h4 className="font-heading font-bold text-xs text-white truncate">
                      {sk.name}
                    </h4>
                    <span className="text-[10px] text-[#06B6D4] font-medium block truncate">
                      {sk.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skill Inspector Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6 relative overflow-hidden"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] absolute top-0 left-0" />

                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-white">
                        {selectedSkill.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#06B6D4]">
                        {selectedSkill.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedSkill.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Projects Using This Technology
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.projects.map((p) => (
                        <span
                          key={p}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 text-[#3B82F6] border border-white/10 tag-hover"
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
