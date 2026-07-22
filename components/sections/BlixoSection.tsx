"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Sparkles, Building2, CheckCircle2, ArrowUpRight, Code2, Smartphone, Cpu, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function BlixoSection() {
  const founderResponsibilities = [
    "Building high-performance Android & Flutter applications.",
    "Developing modern web solutions with clean architecture.",
    "Designing intuitive, human-centered user interfaces.",
    "Creating scalable software and local database systems.",
    "Managing full software lifecycle from discovery to deployment.",
    "Collaborating with clients and team members effectively.",
  ];

  return (
    <section id="blixo" className="py-28 relative overflow-hidden bg-[#08090D]">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#7C3AED]/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header & Logo Presentation */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Logo Display */}
            <div className="relative w-36 sm:w-44 h-24 mb-6 rounded-2xl overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl">
              <Image
                src="/assets/blixo_logo.jpg"
                alt="BliXo.Tech Logo"
                fill
                className="object-contain"
              />
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-4 border border-white/10">
              <Rocket className="w-3.5 h-3.5" />
              Independent Software Venture
            </span>

            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4">
              Building Through <span className="text-gradient-purple">BliXo.Tech</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              BliXo.Tech is my independent software venture where I design and develop mobile applications, web applications, business solutions, and digital products with a focus on quality, performance, and user experience.
            </p>
          </motion.div>
        </div>

        {/* Founder Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] glass-panel border border-white/10 p-8 sm:p-12 shadow-2xl mb-20 relative overflow-hidden"
        >
          {/* Gradient accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] absolute top-0 left-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
                Entrepreneurship &amp; Product Leadership
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                Founder &amp; Mobile Application Developer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Through BliXo.Tech, I transform ideas into practical digital products. My work includes mobile applications, business software, machine learning projects, and modern websites designed with performance, usability, and clean architecture in mind.
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 block mb-1">Tagline:</span>
                <p className="text-base font-bold italic text-white">
                  "Building Ideas. Creating Impact."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {founderResponsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#7C3AED]/40 transition-colors flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
