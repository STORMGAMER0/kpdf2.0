import dynamic from "next/dynamic";

import { NavBarDemo } from "@/components/ui/navbar-demo";
import aboutImage1 from "@/pictures/SHAM3135.jpg";
import aboutImage2 from "@/pictures/32.jpg";
import aboutImage3 from "@/pictures/29.jpg";
import aboutImage4 from "@/pictures/31.jpg";
import missionImage1 from "@/pictures/16.jpg";
import missionImage2 from "@/pictures/SHAM3425.jpg";
import missionImage3 from "@/pictures/24.jpg";
import missionImage4 from "@/pictures/SHAM3517.jpg";

const LandingAccordionItem = dynamic(
  () => import("@/components/ui/interactive-image-accordion").then((mod) => mod.LandingAccordionItem),
  {
    loading: () => <section className="surface-alt h-[520px] rounded-3xl border border-border/60" aria-hidden="true" />,
  },
);

const DicedHeroSection = dynamic(
  () => import("@/components/ui/diced-hero-section").then((mod) => mod.DicedHeroSection),
  {
    loading: () => <section className="surface-alt h-[560px] rounded-3xl border border-border/60" aria-hidden="true" />,
  },
);

const HoverSliderDemo = dynamic(
  () => import("@/components/ui/animated-slideshow-demo").then((mod) => mod.HoverSliderDemo),
  {
    loading: () => <section className="surface-primary h-[520px] rounded-3xl border border-border/60" aria-hidden="true" />,
  },
);

const TeamSectionDemo = dynamic(
  () => import("@/components/ui/team-section-1-demo"),
  {
    loading: () => <section className="surface-alt h-[620px] rounded-3xl border border-border/60" aria-hidden="true" />,
  },
);

const SiteFooter = dynamic(() => import("@/components/sections/site-footer"), {
  loading: () => <footer className="mt-2 h-56 border-t border-border/60 bg-[var(--background-deep)]" aria-hidden="true" />,
});

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip" id="about-page">
      <NavBarDemo />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-24 pb-16 sm:pt-28">
        <LandingAccordionItem
          items={[
            {
              id: 1,
              title: "KPDF youth engagement session",
              imageUrl: aboutImage1.src,
            },
            {
              id: 2,
              title: "KPDF leadership workshop moment",
              imageUrl: aboutImage2.src,
            },
            {
              id: 3,
              title: "KPDF mentorship interaction",
              imageUrl: aboutImage3.src,
            },
            {
              id: 4,
              title: "KPDF community impact activity",
              imageUrl: aboutImage4.src,
            },
          ]}
        />
        <section id="mission">
          <DicedHeroSection
            topText="Our Mission"
            mainText="Inspire. Educate. Mentor."
            subMainText="Our mission is to inspire, educate and mentor the youth of West Africa, equipping them with the skills and knowledge needed to excel in leadership, employability, and entrepreneurship. We are committed to nurturing a generation of confident and capable individuals who are poised to make a positive impact in their communities and beyond."
            buttonText="Support the Mission"
            slides={[
              {
                title: "Mentorship",
                image: missionImage1.src,
              },
              {
                title: "Leadership",
                image: missionImage2.src,
              },
              {
                title: "Employability",
                image: missionImage3.src,
              },
              {
                title: "Entrepreneurship",
                image: missionImage4.src,
              },
            ]}
            topTextStyle={{ color: "var(--diced-hero-section-top-text)", fontSize: "0.9rem" }}
            mainTextStyle={{
              fontSize: "3.2rem",
              gradient:
                "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
            }}
            subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)", fontSize: "1.02rem" }}
            buttonStyle={{
              backgroundColor: "var(--diced-hero-section-button-bg)",
              color: "var(--diced-hero-section-button-fg)",
              borderRadius: "2rem",
              hoverColor: "var(--diced-hero-section-button-hover-bg)",
              hoverForeground: "var(--diced-hero-section-button-hover-fg)",
            }}
            separatorColor="var(--diced-hero-section-separator)"
            mobileBreakpoint={1000}
            fontFamily="inherit"
            componentBorderRadius="1.5rem"
            backgroundColor="rgba(10,61,107,0.92)"
            maxContentWidth="100%"
          />
        </section>
        <section id="what-we-do">
          <HoverSliderDemo />
        </section>
        <section id="board-members">
          <TeamSectionDemo />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
