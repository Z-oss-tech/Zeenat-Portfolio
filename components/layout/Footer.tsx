"use client";

import React from "react";
import { ArrowUp, Heart, Phone, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "BliXo.Tech", href: "#blixo" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#08090D] text-slate-300 pt-20 pb-12 overflow-hidden" role="contentinfo" aria-label="Site Footer">
      
      {/* Animated Top Gradient Line Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-60 mb-16" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/06 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-center justify-between">
          
          {/* Brand Headline */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Zeenat <span className="text-gradient-purple">Shaikh</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Mobile Application Developer crafting high-impact software, Flutter cross-platform platforms, and native Android architectures. Founder of BliXo.Tech.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:border-[#7C3AED]/30 transition-colors">Next.js 15</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:border-[#7C3AED]/30 transition-colors">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:border-[#7C3AED]/30 transition-colors">Framer Motion</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 hover:border-[#7C3AED]/30 transition-colors">TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-slate-400" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white hover:translate-x-0.5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-panel hover:bg-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] text-white text-xs font-bold transition-all duration-300 shadow-2xl group"
              aria-label="Scroll Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & real social links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Zeenat Shaikh. Handcrafted with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" aria-hidden="true" />
            for software engineering excellence.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Z-oss-tech"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Zeenat Shaikh on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/zeenat-shaikh-6bb09930a/?locale=en"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Zeenat Shaikh on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:zeenatshaikh914215@gmail.com"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Email Zeenat Shaikh"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+919142154554"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Call Zeenat Shaikh"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Zeenat Shaikh on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
