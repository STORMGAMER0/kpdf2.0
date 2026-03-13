"use client";

import InteractiveSelector, { type InteractiveSelectorOption } from "@/components/ui/interactive-selector";
import communityImpactImage from "@/pictures/37.jpg";
import globalExchangeImage from "@/pictures/1754864232318.jpeg";
import globalPartnershipImage from "@/pictures/10.jpg";
import kpmp4aImage from "@/pictures/SHAM3327.jpg";
import regionalRepresentationImage from "@/pictures/1752213565725.jpeg";
import youthEmpowermentFundImage from "@/pictures/SHAM3299.jpg";

const initiatives: InteractiveSelectorOption[] = [
  {
    title: "KPDF Youth Empowerment Fund",
    description: "supports young impact-driven entrepreneurs creating sustainable solutions in Africa.",
    image: youthEmpowermentFundImage.src,
    targetId: "youth-empowerment-fund",
  },
  {
    title: "KPMP4A",
    description: "empowers Africa's future leaders through mentorship and entrepreneurship.",
    image: kpmp4aImage.src,
    targetId: "kpmp4a",
  },
  {
    title: "Global Exchange",
    description: "builds a global network of inspired youth leaders through mentorship and entrepreneurship.",
    image: globalExchangeImage.src,
    targetId: "global-exchange",
  },
  {
    title: "Community Impact",
    description: "empowers youth to uplift and transform their communities.",
    image: communityImpactImage.src,
    targetId: "community-impact",
  },
  {
    title: "Global partnerships",
    description: "global collaboration driving the future of young leaders.",
    image: globalPartnershipImage.src,
    targetId: "global-partnerships",
  },
  {
    title: "Regional representation",
    description: "highlights the ECOWAS Regional Youth Conference for West Africa's rising generation.",
    image: regionalRepresentationImage.src,
    targetId: "regional-representation",
  },
];

export default function InteractiveSelectorDemo() {
  return (
    <InteractiveSelector
      heading="KPDF Events"
      subheading="A full-screen showcase of our flagship initiatives. Use See More to jump to each detailed section."
      options={initiatives}
    />
  );
}

