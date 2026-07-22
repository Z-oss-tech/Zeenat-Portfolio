"use client";

import React from "react";
import { ArrowUp, Heart, Phone, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Universe", href: "#universe" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#08090D] text-slate-300 pt-20 pb-12 overflow-hidden">
      
      {/* Animated Top Gradient Line Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-60 mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-center justify-between">
          
          {/* Brand Headline */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Zeenat <span className="text-gradient-purple">Shaikh</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Senior Mobile Engineer crafting high-impact software, Flutter cross-platform platforms, and native Android architectures.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Next.js 15</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Framer Motion</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-panel hover:bg-[#7C3AED] text-white text-xs font-bold transition-all duration-300 shadow-2xl group"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & real social links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Zeenat Shaikh. Handcrafted with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
            for software engineering excellence.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Z-oss-tech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/zeenat-shaikh-6bb09930a/?locale=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:zeenatshaikh914215@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+919142154554"
              className="hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
