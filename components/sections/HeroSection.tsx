"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, Sparkles, Smartphone, Layers, ShieldCheck, Flame } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function HeroSection() {
  const [typedRole, setTypedRole] = useState("");
  const fullRoleText = "Mobile Application Developer | Founder @ BliXo.Tech";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedRole(fullRoleText.slice(0, index + 1));
      index++;
      if (index === fullRoleText.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const orbitSpheres = [
    { name: "Flutter", icon: "🚀", delay: 0 },
    { name: "Android SDK", icon: "🤖", delay: 2.5 },
    { name: "Java", icon: "☕", delay: 5 },
    { name: "Kotlin", icon: "🎯", delay: 7.5 },
    { name: "Firebase", icon: "🔥", delay: 10 },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#08090D]">
      
      {/* Ambient Aurora Mesh Lights */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[160px] animate-aurora pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/15 rounded-full blur-[160px] animate-aurora [animation-delay:6s] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#06B6D4]/15 rounded-full blur-[160px] animate-aurora [animation-delay:12s] pointer-events-none -z-10" />

      {/* Grid Pattern Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Editorial Headline & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] mb-6 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#22C55E] absolute" />
              <span className="ml-2 font-medium tracking-wide">Available for Mobile &amp; Web Development</span>
            </motion.div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.05] mb-6">
              Building Modern <br />
              <span className="text-gradient-purple">Mobile Applications</span> <br />
              <span className="text-slate-300 font-normal">with Clean Design &amp; Reliable Performance.</span>
            </h1>

            {/* Typing Subtext */}
            <div className="min-h-[28px] mb-4">
              <span className="text-sm sm:text-base font-mono font-bold text-[#3B82F6] tracking-wide">
                {typedRole}
                <span className="inline-block w-2 h-4 bg-[#7C3AED] ml-1 animate-pulse" />
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-[1.7] max-w-2xl mb-8">
              I am Zeenat Shaikh, a Mobile Application Developer specializing in Android and Flutter applications. I combine clean architecture, intuitive interfaces, and real-world functionality to create software designed for real people.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white font-bold text-sm shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/assets/zeenat_profile.jpg"
                download="Zeenat_Shaikh_Resume.jpg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl glass-panel text-white font-semibold text-sm border border-white/10 hover:border-[#7C3AED]/50 hover:bg-white/5 transition-all duration-300"
              >
                Download Resume
                <Download className="w-4 h-4 text-[#3B82F6]" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl glass-pill text-slate-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#06B6D4]" />
                Contact Me
              </a>
            </div>

            {/* Social Channels */}
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
            </div>
          </motion.div>

          {/* Right Column: Blended Portrait & Floating Tech Icons */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative min-h-[460px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Ambient Aura */}
            <div className="absolute w-80 sm:w-[380px] h-80 sm:h-[380px] rounded-full bg-gradient-to-tr from-[#7C3AED]/30 via-[#3B82F6]/20 to-[#06B6D4]/20 blur-3xl opacity-70 animate-pulse pointer-events-none" />

            {/* Orbiting Tech Spheres */}
            {orbitSpheres.map((item, idx) => (
              <div
                key={item.name}
                className={`absolute w-12 h-12 rounded-2xl glass-panel border border-white/20 flex items-center justify-center text-lg shadow-xl pointer-events-none hidden sm:flex ${
                  idx % 2 === 0 ? "animate-slow-orbit" : "animate-slow-orbit-reverse"
                }`}
                style={{ animationDelay: `${item.delay}s` }}
                title={item.name}
              >
                {item.icon}
              </div>
            ))}

            {/* Cutout Portrait (Blended into background naturally) */}
            <div className="relative w-64 sm:w-80 h-[400px] sm:h-[460px] z-10 filter drop-shadow-[0_20px_35px_rgba(124,58,237,0.3)]">
              <div className="w-full h-full rounded-[3.5rem] overflow-hidden border-2 border-white/20 relative bg-[#101218]/60 backdrop-blur-md">
                <Image
                  src="/assets/zeenat_profile.jpg"
                  alt="Zeenat Shaikh"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating SmartKhata Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-4 rounded-2xl glass-panel border border-white/20 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white text-lg font-bold">
                  🚀
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-white">SmartKhata</h4>
                  <p className="text-[10px] text-[#06B6D4] font-medium">Flagship Flutter Cashbook</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
