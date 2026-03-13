"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

import { TeamSection } from "@/components/ui/team-section-1";
import adimchiImage from "@/pictures/adimchi.png";

export default function TeamSectionDemo() {
  const teamMembers = [
    {
      name: "Bar. Samuel Chukwu",
      designation: "Board Member",
      imageSrc: "/board-placeholder-samuel.svg",
      imageAlt: "Placeholder portrait for Bar. Samuel Chukwu",
      socialLinks: [
        { icon: Facebook, href: "https://web.facebook.com/jude.isaac.3150" },
        { icon: Instagram, href: "https://instagram.com/impactjude" },
      ],
    },
    {
      name: "Blessing Tukura",
      designation: "Board Member",
      imageSrc: "/board-placeholder-blessing.svg",
      imageAlt: "Placeholder portrait for Blessing Tukura",
      socialLinks: [
        { icon: Facebook, href: "https://facebook.com/profile.php?id=100090158823134" },
        { icon: Instagram, href: "https://instagram.com/kpatriotsimpact" },
      ],
    },
    {
      name: "Adimchi Ogbonna",
      designation: "Board Member",
      imageSrc: adimchiImage.src,
      imageAlt: "Portrait of Adimchi Ogbonna",
      socialLinks: [
        { icon: MessageCircle, href: "https://wa.me/2347061820884" },
        { icon: Facebook, href: "https://facebook.com/profile.php?id=100090158823134" },
      ],
    },
  ];

  const mainSocialLinks = [
    { icon: Facebook, href: "https://facebook.com/profile.php?id=100090158823134" },
    { icon: Instagram, href: "https://instagram.com/kpatriotsimpact" },
    { icon: Facebook, href: "https://web.facebook.com/jude.isaac.3150" },
    { icon: Instagram, href: "https://instagram.com/impactjude" },
    { icon: MessageCircle, href: "https://wa.me/2347061820884" },
  ];

  return (
    <TeamSection
      title="BOARD MEMBERS"
      description="Our board is composed of passionate leaders committed to advancing youth empowerment, ethical leadership, and sustainable impact across West Africa."
      members={teamMembers}
      registerLink="#"
      logo="KPDF"
      socialLinksMain={mainSocialLinks}
      className="surface-alt"
    />
  );
}
