import dynamic from "next/dynamic";

import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import HeroSectionDemo from "@/components/ui/hero-section-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";

const CoreValuesSection = dynamic(() => import("@/components/sections/core-values-section"), {
  loading: () => <section className="surface-primary h-64 rounded-3xl" aria-hidden="true" />,
});

const FounderSection = dynamic(() => import("@/components/sections/founder-section"), {
  loading: () => <section className="surface-alt h-96 rounded-3xl" aria-hidden="true" />,
});

const SiteFooter = dynamic(() => import("@/components/sections/site-footer"), {
  loading: () => <footer className="mt-2 h-56 border-t border-border/60 bg-[var(--background-deep)]" aria-hidden="true" />,
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip" id="home">
      <NavBarDemo />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-20 pb-16 sm:pt-24 lg:gap-12 lg:pb-20">
        <section className="flex items-center md:h-[calc(100svh-8.5rem)]" aria-label="Hero">
          <HeroSectionDemo />
        </section>

        <section className="surface-alt rounded-3xl border border-border/60 px-6 py-12 sm:px-10 sm:py-14 lg:py-16" id="about">
          <AnimatedText
            text="Who We Are"
            textClassName="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.45rem]"
            underlineClassName="text-primary"
          />

          <p className="mx-auto mt-8 max-w-[750px] animate-in fade-in slide-in-from-top-4 text-center text-[1rem] leading-8 text-muted-foreground duration-700 sm:text-[1.04rem] sm:leading-9">
            Kings Patriots Development Foundation (KPDF) is a Pan-African nonprofit organization committed to
            raising accountable and responsible leaders across Africa. Through youth empowerment programs,
            capacity-building initiatives, and leadership development, we equip young people with the skills,
            knowledge, and ethical foundation to transform their communities and the continent.
          </p>
        </section>

        <CoreValuesSection />
        <FounderSection />
      </main>

      <SiteFooter />
    </div>
  );
}
