"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface BackToTopButtonProps {
  className?: string;
  showAfter?: number;
}

export function BackToTopButton({ className, showAfter = 420 }: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;
    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        const shouldShow = window.scrollY > showAfter;
        setVisible((previous) => (previous === shouldShow ? previous : shouldShow));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary-depth)] bg-[var(--primary)] text-white shadow-[0_10px_30px_rgba(1,24,41,0.45)] transition-all duration-250 hover:scale-[1.03] hover:bg-[var(--primary-depth)] active:scale-[0.99]",
        "bottom-24 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        className,
      )}
    >
      <ChevronUp size={20} strokeWidth={2.7} />
    </button>
  );
}
