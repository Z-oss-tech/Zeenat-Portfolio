"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, Smartphone, Users, Flame, Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const achievements = [
    {
      metric: "15+",
      label: "Mobile & Web Products Delivered",
      desc: "Cross-platform mobile apps, native Android software, and custom backend platforms built for clients.",
      icon: <Smartphone className="w-6 h-6 text-[#7C3AED]" />,
    },
    {
      metric: "500+",
      label: "GitHub Commits & Contributions",
      desc: "Active open-source code contributions, public repositories, and continuous integration pipelines.",
      icon: <Code2 className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      metric: "3+",
      label: "Years Software Craftsmanship",
      desc: "Deep engineering experience in Java, Kotlin, Dart, Flutter, and RESTful microservices.",
      icon: <Flame className="w-6 h-6 text-[#06B6D4]" />,
    },
    {
      metric: "100%",
      label: "On-Time Project Delivery Rate",
      desc: "Clean architecture standards ensuring maintainable codebases, zero data loss, and smooth releases.",
      icon: <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />,
    },
  ];

  return (
    <section id="impact" className="py-28 relative overflow-hidden bg-[#08090D]">
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
              <Trophy className="w-3.5 h-3.5" />
              Verified Metrics &amp; Milestones
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Selected <span className="text-gradient-purple">Impact &amp; Achievements</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Concrete software metrics, codebase history, and engineering results.
            </p>
          </motion.div>
        </div>

        {/* 4 Large Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl hover:border-[#7C3AED]/50 transition-all duration-300 flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div>
                <span className="text-4xl font-extrabold font-heading text-white tracking-tight block mb-1">
                  {item.metric}
                </span>
                <h3 className="text-lg font-bold font-heading text-[#3B82F6] mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
