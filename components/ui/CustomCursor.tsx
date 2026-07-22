"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 2.2 : 1,
          backgroundColor: "#38BDF8",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 30,
        }}
      />
      {/* Ambient Spotlight Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none z-0 opacity-20 blur-3xl hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(56,189,248,0.25) 50%, transparent 80%)",
        }}
        animate={{
          x: mousePosition.x - 225,
          y: mousePosition.y - 225,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      />
    </>
  );
}
