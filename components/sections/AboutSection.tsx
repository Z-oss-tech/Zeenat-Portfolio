"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, GraduationCap, Code2, Smartphone, Sparkles, Building2, Rocket, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  accentColor: string;
}

const journeyTimeline: Milestone[] = [
  {
    year: "2022",
    title: "Enrolled in BCA Degree & Started Learning Java",
    subtitle: "Dolat Usha Institute, Valsad, Gujarat",
    description:
      "Began pursuing Bachelor of Computer Applications degree, focusing on core programming fundamentals, object-oriented Java concepts, and data structures.",
    icon: <GraduationCap className="w-5 h-5 text-[#3B82F6]" />,
    tags: ["BCA Degree", "Java", "Object-Oriented Programming"],
    accentColor: "#3B82F6",
  },
  {
    year: "2023",
    title: "Built First Android Application",
    subtitle: "Native Mobile Engineering",
    description:
      "Engineered first native Android applications using Java, XML layouts, and embedded local SQLite database caching for educational projects.",
    icon: <Smartphone className="w-5 h-5 text-[#06B6D4]" />,
    tags: ["Java", "Android SDK", "SQLite", "XML"],
    accentColor: "#06B6D4",
  },
  {
    year: "2023",
    title: "Learned Flutter & Cross-Platform Development",
    subtitle: "Dart & Reactive UI Architecture",
    description:
      "Discovered Flutter and Dart ecosystem, mastering reactive state management, clean architecture, and cross-platform UI engineering.",
    icon: <Sparkles className="w-5 h-5 text-[#7C3AED]" />,
    tags: ["Flutter", "Dart", "BLoC Pattern", "REST APIs"],
    accentColor: "#7C3AED",
  },
  {
    year: "2024",
    title: "Team Leader Intern @ Welogical Software Solutions",
    subtitle: "Software Engineering Internship",
    description:
      "Collaborated in a team environment as intern team leader, overseeing mobile application development, team coordination, and client feature delivery.",
    icon: <Building2 className="w-5 h-5 text-amber-400" />,
    tags: ["Team Leadership", "Mobile Dev", "Collaboration", "Mechworkx Project"],
    accentColor: "#F59E0B",
  },
  {
    year: "2024",
    title: "Founded BliXo.Tech Software Venture",
    subtitle: "Personal Venture & Independent Studio",
    description:
      "Established BliXo.Tech as a personal software venture to design and develop mobile applications, web applications, and digital solutions with quality standards.",
    icon: <Rocket className="w-5 h-5 text-[#EC4899]" />,
    tags: ["BliXo.Tech", "Founder", "Product Development"],
    accentColor: "#EC4899",
  },
  {
    year: "2024",
    title: "Developed SmartKhata Flagship Application",
    subtitle: "Cross-Platform Cashbook System",
    description:
      "Engineered SmartKhata digital bookkeeping platform featuring real-time PostgreSQL sync, PDF report exports, and AI voice transaction logging.",
    icon: <Code2 className="w-5 h-5 text-[#7C3AED]" />,
    tags: ["SmartKhata", "Flutter", "Node.js", "PostgreSQL"],
    accentColor: "#7C3AED",
  },
  {
    year: "May 2026",
    title: "Graduated BCA (Bachelor of Computer Applications)",
    subtitle: "Academic Degree Completion",
    description:
      "Successfully completed BCA graduation in May 2026 with practical experience in mobile engineering, website development, and machine learning.",
    icon: <GraduationCap className="w-5 h-5 text-[#22C55E]" />,
    tags: ["Graduated May 2026", "BCA", "Dolat Usha Institute"],
    accentColor: "#22C55E",
  },
  {
    year: "Present",
    title: "Building Modern Software Products",
    subtitle: "Mobile Application Developer",
    description:
      "Actively developing high-quality Android & Flutter applications, modern web software, and machine learning projects built for real-world impact.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />,
    tags: ["Flutter", "Android SDK", "Machine Learning", "Web Solutions"],
    accentColor: "#3B82F6",
  },
];

export function AboutSection() {
  return (
    <section id="journey" className="py-28 relative overflow-hidden bg-[#08090D]" aria-label="Journey & Milestones">
      {/* Section top glow line */}
      <div className="section-glow-top" aria-hidden="true" />

      {/* Ambient background orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#3B82F6]/08 rounded-full blur-[180px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#3B82F6] uppercase tracking-wider mb-4 border border-white/10">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              My Journey &amp; Milestones
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              My <span className="text-gradient-purple">Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              A chronological timeline of learning, software development, internship leadership, and venture building.
            </p>
          </motion.div>
        </div>

        {/* Visual Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {/* Timeline Line */}
          <div
            className="absolute left-[8px] sm:left-[16px] top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(to bottom, rgba(124,58,237,0.6), rgba(59,130,246,0.4), rgba(6,182,212,0.2))",
            }}
            aria-hidden="true"
          />

          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div
                className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-10 h-10 rounded-2xl glass-panel border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-[#7C3AED] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all timeline-node-active"
                style={{ "--node-color": item.accentColor } as React.CSSProperties}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <div className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl hover:border-[#7C3AED]/40 hover:shadow-[0_8px_40px_rgba(124,58,237,0.1)] transition-all duration-300 card-shine relative overflow-hidden">
                {/* Subtle accent left bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-60"
                  style={{ background: item.accentColor }}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-bold border"
                    style={{
                      background: `${item.accentColor}20`,
                      color: item.accentColor,
                      borderColor: `${item.accentColor}40`,
                    }}
                  >
                    {item.year}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3 mt-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/10 tag-hover"
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
