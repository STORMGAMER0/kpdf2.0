"use client";

import * as React from "react";
import { animate } from "framer-motion";

import { cn } from "@/lib/utils";

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  metric: number;
  metricUnit?: string;
  subtext: string;
  iconContainerClassName?: string;
  compact?: boolean;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  (
    {
      className,
      icon,
      title,
      metric,
      metricUnit,
      subtext,
      iconContainerClassName,
      compact = false,
      ...props
    },
    ref,
  ) => {
    const metricRef = React.useRef<HTMLHeadingElement>(null);
    const localRootRef = React.useRef<HTMLDivElement | null>(null);
    const [shouldAnimate, setShouldAnimate] = React.useState(false);

    const setCombinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        localRootRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    React.useEffect(() => {
      const target = localRootRef.current;
      if (!target) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShouldAnimate(true);
            observer.disconnect();
          }
        },
        { threshold: 0.35 },
      );

      observer.observe(target);

      return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
      const node = metricRef.current;
      if (!node || !shouldAnimate) return;

      const isIntegerMetric = Number.isInteger(metric);

      const controls = animate(0, metric, {
        duration: 1.2,
        onUpdate(value) {
          node.textContent = isIntegerMetric ? Math.round(value).toString() : value.toFixed(2);
        },
      });

      return () => controls.stop();
    }, [metric, shouldAnimate]);

    return (
      <div
        ref={setCombinedRef}
        className={cn(
          "glass-card flex w-full max-w-xs flex-col rounded-xl border border-border/70 text-card-foreground shadow-[0_14px_30px_rgba(1,24,41,0.35)]",
          compact ? "gap-2 p-3" : "gap-4 p-6",
          className,
        )}
        {...props}
      >
        <div className={cn("flex items-center", compact ? "gap-2" : "gap-4")}>
          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-primary text-primary-foreground",
              compact ? "h-8 w-8" : "h-12 w-12",
              iconContainerClassName,
            )}
          >
            {icon}
          </div>
          <p className={cn("font-medium uppercase tracking-[0.18em] text-muted-foreground", compact ? "text-[0.58rem]" : "text-xs")}>
            {title}
          </p>
        </div>

        <div className="flex items-end gap-1">
          <h2
            ref={metricRef}
            className={cn(
              "font-bold leading-none tracking-tight text-primary",
              compact ? "text-[4rem]" : "text-[4.5rem]",
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            0
          </h2>
          {metricUnit && <span className={cn("pb-2 text-3xl font-bold text-primary", compact ? "text-3xl" : "text-4xl")}>{metricUnit}</span>}
        </div>

        <p className={cn("text-muted-foreground", compact ? "text-[0.72rem] leading-5" : "text-sm leading-6")}>{subtext}</p>
      </div>
    );
  },
);

StatsCard.displayName = "StatsCard";

export { StatsCard };
