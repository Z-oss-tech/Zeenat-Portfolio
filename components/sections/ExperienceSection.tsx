"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, CheckCircle2, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Welogical Software Solutions",
      role: "Intern (Team Leader)",
      type: "Software Internship",
      period: "2024",
      description:
        "Led a software development intern team collaborating on mobile application engineering, client requirement mapping, feature sprints, and cross-functional teamwork.",
      responsibilities: [
        "Coordinated intern team workflows and feature development milestones.",
        "Engineered Flutter application components and Firebase database integrations.",
        "Collaborated with senior software team members for code reviews and QA testing.",
        "Developed Mechworkx application features for vehicle service management.",
      ],
      technologies: ["Flutter", "Firebase", "Dart", "Team Leadership", "Agile Collaboration"],
    },
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#08090D]">
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
              Work Experience &amp; Academic Credentials
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Experience &amp; <span className="text-gradient-purple">Education</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Honest representation of software internship leadership and computer science degree credentials.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#7C3AED]" />
              Work Experience
            </h3>

            {experiences.map((exp) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6 hover:border-[#7C3AED]/50 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] block mb-1">
                      {exp.company}
                    </span>
                    <h4 className="text-xl font-bold font-heading text-white">{exp.role}</h4>
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Contributions:
                  </span>
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-xl text-[11px] font-semibold bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Premium Academic Profile */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
              Academic Credentials
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
                  Verified Academic Degree
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Graduated: May 2026
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

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                <div>
                  <span className="font-bold text-white block mb-1">Coursework &amp; Specializations</span>
                  <p className="text-slate-400">Data Structures &amp; Algorithms, Object-Oriented Java Programming, Mobile Application Engineering, Relational Databases (SQL), Web Technologies.</p>
                </div>
                <div>
                  <span className="font-bold text-white block mb-1">Practical Projects</span>
                  <p className="text-slate-400">Phonics Educational Android App, Used Bike Price Prediction ML Model, and SmartKhata Cashbook Platform.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
