import React from "react";

import heroImage from "@/pictures/new hero.png";
import logoImage from "@/pictures/logo_prepped.png";
import { HeroSection } from "@/components/ui/hero-section-2";

export default function HeroSectionDemo() {
  return (
    <div className="h-full w-full">
      <HeroSection
        className="h-full"
        logo={{
          url: logoImage.src,
          alt: "KPDF Logo",
          text: "Kings Patriots Development Foundation",
        }}
        slogan="Mentor. Equip. Empower."
        title={
          <>
            Building the Next Generation of <br />
            <span className="text-primary">Leaders and Change-Makers</span>
          </>
        }
        subtitle="KPDF empowers young people through mentorship, leadership development, education support, and community-driven opportunities."
        callToAction={{
          text: "Join the Mentorship Program",
          href: "#founder",
        }}
        backgroundImage={heroImage.src}
      />
    </div>
  );
}
