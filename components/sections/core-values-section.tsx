"use client";

import { Leaf, Recycle, Sparkles } from "lucide-react";

import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { GlowCard } from "@/components/ui/spotlight-card";

const coreValues = [
  {
    title: "SDG",
    description: "We align our work with the United Nations Sustainable Development Goals.",
    icon: Leaf,
    glowColor: "green" as const,
  },
  {
    title: "Sustainability",
    description:
      "We prioritize responsible practices for long-term success and environmental preservation.",
    icon: Recycle,
    glowColor: "blue" as const,
  },
  {
    title: "Innovation",
    description: "We embrace creativity and innovation, always seeking new solutions to drive positive change.",
    icon: Sparkles,
    glowColor: "orange" as const,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="surface-primary rounded-3xl border border-border/60 px-6 py-12 sm:px-10 sm:py-14" id="core-values">
      <AnimatedText
        text="Core Values"
        textClassName="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.3rem]"
        underlineClassName="text-primary"
      />

      <div className="mt-11 grid gap-6 md:grid-cols-3">
        {coreValues.map((value) => {
          const Icon = value.icon;

          return (
            <GlowCard
              key={`${value.title}-${value.glowColor}`}
              glowColor={value.glowColor}
              customSize
              className="h-[296px] w-full border-border/70 bg-[rgba(4,34,58,0.72)]"
            >
              <div className="relative z-10 flex h-full flex-col justify-between rounded-xl p-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white shadow-[0_8px_18px_rgba(204,109,61,0.35)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[1.6rem] leading-tight font-semibold tracking-tight text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">{value.description}</p>
                </div>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </section>
  );
}
