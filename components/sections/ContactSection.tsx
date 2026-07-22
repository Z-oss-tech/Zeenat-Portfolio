"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, Send, CheckCircle2, Phone, Copy, Check, MapPin, Globe, Clock, QrCode } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#7C3AED", "#3B82F6", "#06B6D4", "#EC4899", "#22C55E"],
      });
    } catch (e) {
      // ignore
    }

    reset();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zeenatshaikh914215@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9142154554");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#08090D]">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-4 border border-white/10">
              <Mail className="w-3.5 h-3.5" />
              Direct Communication Channel
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
              Let's Build Something <br />
              <span className="text-gradient-purple">Extraordinary Together.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Have a mobile app inquiry, product partnership, or contract offer? Get in touch directly.
            </p>
          </motion.div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Profile Card, Timezone, Direct Contact & QR */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-6">
              
              {/* Profile Avatar Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#7C3AED]">
                  <Image
                    src="/assets/zeenat_profile.jpg"
                    alt="Zeenat Shaikh"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">Zeenat Shaikh</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] absolute" />
                    <span className="text-xs font-bold text-[#22C55E] ml-3">Available for New Projects</span>
                  </div>
                </div>
              </div>

              {/* Timezone & Location */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">TIMEZONE</span>
                    <span className="text-xs font-bold text-white">IST (UTC+5:30)</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#EC4899] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">LOCATION</span>
                    <span className="text-xs font-bold text-white">Valsad, Gujarat</span>
                  </div>
                </div>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 text-[#3B82F6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase text-slate-400 font-bold">Email Address</p>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      zeenatshaikh914215@gmail.com
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#7C3AED] text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase text-slate-400 font-bold">Direct Phone / WhatsApp</p>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      +91 9142154554
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#22C55E] text-white transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/Z-oss-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl glass-pill text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/zeenat-shaikh-6bb09930a/?locale=en"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl glass-pill text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Minimal Dark Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-16 space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center shadow-xl border border-[#22C55E]/40">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold font-heading text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto">
                      Thank you for reaching out. Zeenat Shaikh will review your proposal and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 rounded-2xl bg-white/10 hover:bg-[#7C3AED] text-white font-semibold text-xs transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Your Name
                        </label>
                        <input
                          {...register("name")}
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Your Email
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Subject
                      </label>
                      <input
                        {...register("subject")}
                        placeholder="Mobile Application Project Proposal"
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                      />
                      {errors.subject && (
                        <p className="text-xs text-rose-400 mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Detail your application vision, timelines, or contract opportunity..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#EC4899] text-white font-bold text-sm shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
