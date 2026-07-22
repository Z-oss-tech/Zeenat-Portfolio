"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles, Layers, ShieldCheck, Flame } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export function HeroSection() {
  const [typedRole, setTypedRole] = useState("");
  const fullRoleText = "Android & Flutter Engineer | Founder @ BliXo.tech";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedRole(fullRoleText.slice(0, index + 1));
      index++;
      if (index === fullRoleText.length) {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  const orbitSpheres = [
    { name: "Flutter", icon: "🚀", delay: 0 },
    { name: "Firebase", icon: "🔥", delay: 2.5 },
    { name: "Java", icon: "☕", delay: 5 },
    { name: "Node.js", icon: "🟢", delay: 7.5 },
    { name: "SQLite", icon: "💾", delay: 10 },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#08090D]">
      
      {/* Aurora Ambient Mesh Background */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-[#7C3AED]/20 rounded-full blur-[150px] animate-aurora pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-[#3B82F6]/15 rounded-full blur-[150px] animate-aurora [animation-delay:7s] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#EC4899]/15 rounded-full blur-[150px] animate-aurora [animation-delay:14s] pointer-events-none -z-10" />

      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Typing Subtitle, Intro & CTAs */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-start z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] mb-6 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] absolute" />
              <span className="ml-2 font-medium tracking-wide">Available for High-Impact Software</span>
            </motion.div>

            {/* Bold Headline (80-96px) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-heading text-white tracking-tight leading-[1.02] mb-6">
              Engineering <br />
              <span className="text-gradient-purple">products</span> <br />
              <span className="text-slate-400 font-light italic">where performance meets elegance.</span>
            </h1>

            {/* Role Typing Cursor Subtext */}
            <div className="min-h-[28px] mb-4">
              <span className="text-sm sm:text-base font-mono font-bold text-[#3B82F6] tracking-wide">
                {typedRole}
                <span className="inline-block w-2 h-4 bg-[#7C3AED] ml-1 animate-pulse" />
              </span>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-[1.7] max-w-xl mb-8">
              Crafting high-impact mobile applications, clean architectures, and fluid digital interfaces with uncompromising engineering precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#EC4899] text-white font-bold text-sm shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/assets/zeenat_profile.jpg"
                download="Zeenat_Shaikh_Resume.jpg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl glass-panel text-white font-semibold text-sm border border-white/10 hover:border-[#7C3AED]/50 hover:bg-white/5 transition-all duration-300"
              >
                Download Resume
                <Download className="w-4 h-4 text-[#3B82F6]" />
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Z-oss-tech"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl glass-pill text-slate-300 hover:text-white hover:border-[#7C3AED] transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/zeenat-shaikh-6bb09930a/?locale=en"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl glass-pill text-slate-300 hover:text-white hover:border-[#3B82F6] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl glass-pill text-slate-300 hover:text-white hover:border-[#EC4899] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Cutout Portrait & Orbiting Tech Spheres */}
          <motion.div
            className="lg:col-span-4 flex justify-center items-center relative min-h-[440px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute w-80 sm:w-[380px] h-80 sm:h-[380px] rounded-full bg-gradient-to-tr from-[#7C3AED]/35 via-[#3B82F6]/25 to-[#EC4899]/25 blur-3xl opacity-70 animate-pulse pointer-events-none" />

            {/* Orbit Ring Graphics */}
            <div className="absolute w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full border border-white/10 pointer-events-none hidden sm:block" />

            {/* Orbiting Tech Spheres */}
            {orbitSpheres.map((item, idx) => (
              <div
                key={item.name}
                className={`absolute w-11 h-11 rounded-2xl glass-panel border border-white/20 flex items-center justify-center text-base shadow-xl pointer-events-none hidden sm:flex ${
                  idx % 2 === 0 ? "animate-slow-orbit" : "animate-slow-orbit-reverse"
                }`}
                style={{ animationDelay: `${item.delay}s` }}
                title={item.name}
              >
                {item.icon}
              </div>
            ))}

            {/* Cutout Portrait (Masked organic soft rounded frame) */}
            <div className="relative w-64 sm:w-80 h-[400px] sm:h-[460px] z-10 filter drop-shadow-[0_20px_30px_rgba(124,58,237,0.35)]">
              <div className="w-full h-full rounded-[3.5rem] overflow-hidden border-2 border-white/20 relative bg-[#101218]/60 backdrop-blur-md">
                <Image
                  src="/assets/zeenat_profile.jpg"
                  alt="Zeenat Shaikh"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Apple Keynote Style Card */}
          <motion.div
            className="lg:col-span-3 flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-full max-w-sm p-6 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-4 hover:border-[#7C3AED]/50 transition-colors">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#3B82F6]">
                  Currently Building
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#22C55E]/20 text-[#22C55E] text-[10px] font-bold border border-[#22C55E]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                  Live Product
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-white">SmartKhata</h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  Cross-Platform Financial Ledger Platform
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Empowering small businesses &amp; freelancers with real-time PostgreSQL ledger sync, PDF invoice exports, and instant QR payment sharing.
              </p>

              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Tech Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-[#7C3AED]/20 text-purple-300 border border-[#7C3AED]/30">Flutter</span>
                  <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-[#3B82F6]/20 text-blue-300 border border-[#3B82F6]/30">Node.js</span>
                  <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-[#06B6D4]/20 text-cyan-300 border border-[#06B6D4]/30">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Firebase</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#projects"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-[#7C3AED] text-white text-xs font-bold transition-colors"
                >
                  Explore Showcase
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-xs font-semibold text-slate-500 hover:text-white transition-colors"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#7C3AED]" />
          </a>
        </div>

      </div>
    </section>
  );
}
