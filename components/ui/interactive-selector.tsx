"use client";

import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  Home,
  Leaf,
  Mail,
  ShieldCheck,
  User,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export interface InteractiveSelectorOption {
  title: string;
  description: string;
  image: string;
  targetId: string;
  icon?: React.ReactNode;
}

interface InteractiveSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  options: InteractiveSelectorOption[];
  heading?: string;
  subheading?: string;
  initialActiveIndex?: number;
}

const fallbackIcons: LucideIcon[] = [CalendarDays, Leaf, ShieldCheck, User, Mail, Home];

export default function InteractiveSelector({
  options,
  heading = "Events & Initiatives",
  subheading = "Explore each KPDF initiative and jump directly to its story section.",
  initialActiveIndex = 0,
  className,
  ...props
}: InteractiveSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    if (options.length === 0) return 0;
    return Math.min(initialActiveIndex, options.length - 1);
  });

  const resolvedOptions = useMemo(() => {
    return options.map((option, index) => {
      const Icon = fallbackIcons[index % fallbackIcons.length];
      return {
        ...option,
        icon: option.icon ?? <Icon size={20} className="text-white" strokeWidth={2.2} aria-hidden="true" />,
      };
    });
  }, [options]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleSeeMore = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <section
      className={cn(
        "surface-primary relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/70 px-4 py-20 sm:px-6 lg:px-10",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(204,109,61,0.16)_0%,transparent_34%),radial-gradient(circle_at_80%_85%,rgba(163,180,200,0.12)_0%,transparent_32%)]" />

      <div className="relative z-10 mb-10 w-full max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{heading}</h1>
        <div className="mx-auto mt-5 h-[2px] w-24 bg-primary" />
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{subheading}</p>
      </div>

      <div className="relative z-10 flex h-[62vh] min-h-[430px] w-full max-w-[1320px] items-stretch overflow-hidden rounded-2xl border border-border/60">
        {resolvedOptions.map((option, index) => {
          const isActive = activeIndex === index;

          return (
            <article
              key={`${option.targetId}-${index}`}
              className="relative flex min-w-0 cursor-pointer flex-col justify-end overflow-hidden border-r border-border/50 transition-[flex-grow,opacity,transform,filter] duration-700 ease-in-out last:border-r-0"
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? "cover" : "auto 120%",
                backgroundPosition: "center",
                flex: isActive ? "6 1 0%" : "1 1 0%",
                filter: isActive ? "saturate(1)" : "saturate(0.72)",
                boxShadow: isActive ? "inset 0 -220px 180px -140px rgba(1,24,41,0.95)" : "inset 0 -140px 120px -120px rgba(1,24,41,0.8)",
                animation: `selectorSlideIn 0.7s ease ${index * 0.14}s both`,
              }}
              onClick={() => handleOptionClick(index)}
              aria-label={`Open ${option.title}`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,24,41,0.08)_0%,rgba(1,24,41,0.88)_100%)]" />
              <div className="relative z-10 flex items-end gap-3 p-3 sm:p-4 lg:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(163,180,200,0.2)] bg-[rgba(2,46,81,0.74)] backdrop-blur">
                  {option.icon}
                </div>
                <div className="min-w-0">
                  <h2
                    className={cn(
                      "text-base font-semibold text-white transition-all duration-500 sm:text-lg",
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    )}
                  >
                    {option.title}
                  </h2>
                  <p
                    className={cn(
                      "mt-1 max-w-[38ch] text-sm leading-6 text-muted-foreground transition-all duration-500",
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    )}
                  >
                    {option.description}
                  </p>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSeeMore(option.targetId);
                    }}
                    className={cn(
                      "mt-3 inline-flex items-center rounded-full border border-primary bg-primary px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-all duration-250 hover:scale-[1.03] hover:bg-[var(--primary-depth)] active:scale-[0.99]",
                      isActive ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
                    )}
                  >
                    See More
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes selectorSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
