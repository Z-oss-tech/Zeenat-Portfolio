"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "BliXo.Tech", href: "#blixo" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Projects");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = currentScrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(linkNameByHref("#" + section));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkNameByHref = (href: string) => {
    const found = navLinks.find((l) => l.href === href);
    return found ? found.name : "Projects";
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#08090D]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/20 p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/blixo_logo.jpg"
              alt="BliXo.Tech Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              Zeenat Shaikh
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
              Mobile Application Developer
            </span>
          </div>
        </a>

        {/* Floating Glass Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#101218]/90 backdrop-blur-2xl px-4 py-1.5 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold transition-colors duration-300 rounded-full ${
                  isActive ? "text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/40 to-[#3B82F6]/40 border border-[#7C3AED]/60 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] hover:from-[#6D28D9] hover:to-[#2563EB] text-white text-xs font-bold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Contact Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#101218] border border-white/10 text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#08090D]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-300 hover:text-white py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-sm shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
