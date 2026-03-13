"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: string;
  description?: string;
}

export function Timeline({ data, heading = "Initiatives Timeline", description }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 12%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0.15, 1]);

  return (
    <section
      className="surface-alt w-full rounded-3xl border border-border/60 px-2 py-12 sm:px-6 sm:py-16 md:px-8"
      ref={containerRef}
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{heading}</h2>
        {description && <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">{description}</p>}
      </div>

      <div ref={ref} className="relative mx-auto mt-8 max-w-6xl pb-10 sm:mt-12">
        {data.map((item) => (
          <div key={item.id} id={item.id} className="flex justify-start pt-10 md:gap-10 md:pt-24 scroll-mt-28">
            <div className="sticky top-28 z-30 flex w-14 shrink-0 flex-col items-center self-start md:w-20">
              <div className="absolute top-0 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border border-border/70 bg-[rgba(10,61,107,0.85)] backdrop-blur">
                <div className="absolute inset-0 m-auto h-3.5 w-3.5 rounded-full bg-primary" />
              </div>
            </div>

            <div className="w-full pr-2 pl-16 md:pl-2">
              <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-4xl">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute top-0 left-7 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,transparent_0%,rgba(163,180,200,0.35)_12%,rgba(163,180,200,0.35)_88%,transparent_100%)] md:left-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[var(--primary-depth)] via-[var(--primary)] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

