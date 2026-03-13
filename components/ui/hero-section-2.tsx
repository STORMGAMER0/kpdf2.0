"use client";

import React from "react";
import Image from "next/image";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, "title"> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      ...props
    },
    ref,
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "glass-card relative flex w-full flex-col overflow-hidden text-foreground md:flex-row",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          <div>
            <motion.header className="mb-12" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    width={40}
                    height={40}
                    className="mr-3 h-10 w-10 rounded-full border border-border object-cover"
                  />
                  <div>
                    {logo.text && <p className="text-base font-bold text-white">{logo.text}</p>}
                    {slogan && (
                      <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{slogan}</p>
                    )}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div className="my-6 h-1 w-20 bg-primary" variants={itemVariants} />
              <motion.p className="mb-8 max-w-md text-base text-muted-foreground" variants={itemVariants}>
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#CC6D3D_0%,#B74803_100%)] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:brightness-110"
                variants={itemVariants}
              >
                {callToAction.text}
              </motion.a>
            </motion.main>
          </div>
        </div>

        <motion.div
          className="relative w-full min-h-[320px] overflow-hidden md:w-1/2 md:min-h-full lg:w-2/5"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src={backgroundImage}
            alt="KPDF hero"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,46,81,0.08)_0%,rgba(1,24,41,0.28)_100%)]" />
        </motion.div>
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
