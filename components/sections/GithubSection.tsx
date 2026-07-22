"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, ExternalLink, Code, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function GithubSection() {
  const topLanguages = [
    { name: "Dart & Flutter", percentage: 45, color: "bg-[#06B6D4]" },
    { name: "Kotlin", percentage: 25, color: "bg-[#7C3AED]" },
    { name: "Java", percentage: 15, color: "bg-[#EC4899]" },
    { name: "JavaScript", percentage: 10, color: "bg-amber-400" },
    { name: "PHP & SQL", percentage: 5, color: "bg-[#3B82F6]" },
  ];

  const contributionGrid = Array.from({ length: 24 }).map((_) =>
    Array.from({ length: 7 }).map((_) => Math.floor(Math.random() * 5))
  );

  const getCellColor = (lvl: number) => {
    switch (lvl) {
      case 1: return "bg-[#7C3AED]/30";
      case 2: return "bg-[#7C3AED]/60";
      case 3: return "bg-[#7C3AED]";
      case 4: return "bg-[#06B6D4]";
      default: return "bg-white/5";
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#08090D]">
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
              <GithubIcon className="w-3.5 h-3.5" />
              Open Source Activity
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              GitHub <span className="text-gradient-purple">Contributions &amp; Stats</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Consistent commits, open source projects, and active code repositories.
            </p>
          </motion.div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Activity Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      @Z-oss-tech
                    </h3>
                    <p className="text-xs text-slate-400">Public Repository Activity</p>
                  </div>
                </div>

                <a
                  href="https://github.com/Z-oss-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-white/5 text-slate-300 hover:text-white hover:bg-[#7C3AED] transition-colors"
                >
                  Follow on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Contribution Grid */}
              <div className="mb-6 overflow-x-auto pb-2">
                <p className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-2">
                  <GitCommit className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>500+ Commits in the last year</span>
                </p>

                <div className="flex gap-1.5 min-w-[480px]">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((lvl, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-3.5 h-3.5 rounded-sm transition-transform hover:scale-125 ${getCellColor(lvl)}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
              <div>
                <span className="text-2xl font-extrabold font-heading text-white block">25+</span>
                <span className="text-xs text-slate-400 font-medium">Public Repos</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold font-heading text-[#3B82F6] block">500+</span>
                <span className="text-xs text-slate-400 font-medium">Total Commits</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold font-heading text-[#7C3AED] block">99.9%</span>
                <span className="text-xs text-slate-400 font-medium">Code Quality</span>
              </div>
            </div>
          </motion.div>

          {/* Languages Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#3B82F6]" />
                Top Languages
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Calculated across active codebase repositories
              </p>

              <div className="space-y-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full ${lang.color}`} style={{ width: `${lang.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-center">
              <span className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                Constantly refining architecture &amp; speed
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
