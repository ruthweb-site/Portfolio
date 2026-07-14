"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouch, setIsTouch] = useState(true); // default true during SSR

  // Springs for silky smooth 60fps tracking
  const springConfig = { damping: 24, stiffness: 320, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    // Check pointer capabilities
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
        'button, a, [data-cursor], input, textarea, [role="button"]'
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const label = interactiveEl.getAttribute("data-cursor");
        setCursorText(label || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer Magnetic Spotlight Circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full border border-white/30 backdrop-blur-[2px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 84 : 52) : 28,
          height: isHovered ? (cursorText ? 84 : 52) : 28,
          borderColor: isHovered ? "rgba(110, 58, 255, 0.85)" : "rgba(255, 255, 255, 0.28)",
          backgroundColor: isHovered
            ? "rgba(110, 58, 255, 0.15)"
            : "rgba(255, 255, 255, 0.03)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono uppercase tracking-widest text-white font-semibold text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 bg-cyan rounded-full shadow-[0_0_10px_#00F2FE]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.3 : 1,
          opacity: isHovered ? 0.6 : 1,
        }}
      />
    </>
  );
};
