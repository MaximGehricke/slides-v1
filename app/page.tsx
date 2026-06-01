"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import slides from "@/slides";

/**
 * Slideshow engine with instant slide changes.
 *
 * - Arrow keys / Space / Page keys for navigation
 * - Touch swipe support
 * - Bottom progress bar
 * - Slide counter (bottom-right)
 */
export default function SlideshowPage() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const total = slides.length;

  // ── Navigation ──

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      setCurrent(index);
    },
    [total]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  // ── Keyboard controls ──

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goTo, total]);

  // ── Touch / swipe controls ──

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  // ── Render ──

  const CurrentSlide = slides[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a]">
      {/* Slide content */}
      <div>
        <CurrentSlide />
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-white/10">
        <div
          className="progress-bar h-full bg-accent"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-4 right-6 z-50 text-xs font-medium tracking-widest text-white/30">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </div>
    </div>
  );
}
