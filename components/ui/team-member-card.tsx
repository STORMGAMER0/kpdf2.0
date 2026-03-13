"use client";

/**
 * @author: @emerald-ui
 * @description: Editorial-style team member card with overlapping layers and motion
 * @version: 2.0.0
 * @date: 2026-02-19
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import Image from "next/image";
import { Activity, ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";

import { StatsCard } from "@/components/ui/activity-stats-card";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  position: "left" | "right";
  jobPosition?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
}

export default function TeamMemberCard({
  position = "left",
  jobPosition = "FOUNDER & CEO",
  firstName = "Dr Jude Isaac",
  lastName = "Dahilo",
  imageUrl = "https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60",
  description =
    "Dr. Jude Isaac Dahilo is an inspirational speaker and youth trainer with over a decade of experience in leadership and capacity development. He holds a B.Tech in Library and Information Technology, an M.Sc. in Information Technology, and an honorary Doctorate in Leadership and Mentorship Management from the American Management University, USA. He founded Kings Patriots Development Foundation with a vision to create lasting positive change across Africa.",
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`;
  const isPositionRight = position === "right";
  const isRemoteImage = imageUrl.startsWith("http://") || imageUrl.startsWith("https://");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative my-8 flex flex-col justify-center md:my-12", className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.06 }}
      >
        <p
          className={cn(
            "mb-4 text-[0.7rem] font-medium tracking-[0.34em] text-muted-foreground uppercase",
            isPositionRight && "md:text-right",
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex flex-col items-stretch gap-7 md:flex-row md:items-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative h-[360px] w-full shrink-0 overflow-hidden rounded-2xl border border-border/60 sm:h-[420px] md:h-[500px] md:w-[360px]",
            isPositionRight && "md:order-1",
          )}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/35 via-transparent to-transparent" />
          <Image
            src={imageUrl}
            alt={fullName}
            fill
            unoptimized={isRemoteImage}
            sizes="(max-width: 768px) 100vw, 360px"
            className="h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative z-[2] flex w-full flex-col gap-8 md:-left-8 md:w-[calc(100%-350px)] md:gap-12",
            isPositionRight && "md:left-8 md:items-end",
          )}
        >
          <div>
            <h2 className="text-4xl leading-[1.04] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              {firstName}
              <br />
              <span className="font-semibold text-white">{lastName}</span>
            </h2>
          </div>

          <div className={cn("flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8", isPositionRight && "md:justify-end")}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-background/35 transition-all duration-[250ms] hover:border-primary hover:bg-primary/10 sm:h-20 sm:w-20",
                isPositionRight && "sm:order-1",
              )}
            >
              <ArrowRight
                size={22}
                className={cn(
                  "text-foreground transition-all duration-[250ms] group-hover:-rotate-45 group-hover:text-primary",
                  isPositionRight && "rotate-180 group-hover:rotate-[135deg]",
                )}
              />
            </motion.div>

            <div className={cn("w-full space-y-6 sm:w-[70%]", isPositionRight && "sm:items-end")}>
              <p className={cn("text-[0.97rem] leading-8 text-muted-foreground", isPositionRight && "md:text-right")}>
                {description}
              </p>

              <div className={cn("grid w-full max-w-[360px] grid-cols-2 gap-3", isPositionRight && "sm:ml-auto")}>
                <StatsCard
                  compact
                  title="Experience"
                  metric={10}
                  metricUnit="+"
                  subtext="years of experience"
                  icon={<Activity className="h-4 w-4" />}
                  className="aspect-square max-w-none border-border/70 bg-[rgba(255,255,255,0.04)] shadow-none"
                  iconContainerClassName="bg-primary/90 text-white"
                />
                <StatsCard
                  compact
                  title="Impact"
                  metric={1000}
                  metricUnit="+"
                  subtext="years impacted"
                  icon={<Users className="h-4 w-4" />}
                  className="aspect-square max-w-none border-border/70 bg-[rgba(255,255,255,0.04)] shadow-none"
                  iconContainerClassName="bg-primary/90 text-white"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
