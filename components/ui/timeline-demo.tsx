"use client";

import Image from "next/image";
import React from "react";

import { Timeline } from "@/components/ui/timeline";
import regionalEcowasImage from "@/pictures/1752213565725.jpeg";
import globalCrossImage from "@/pictures/1753269372208.jpeg";
import globalNetworkImage from "@/pictures/1754863984713.jpeg";
import regionalNetworkImage from "@/pictures/23.jpg";
import communityGrassrootsImage from "@/pictures/37.jpg";
import kpmpOriginsImage from "@/pictures/438790281_7420864491282105_46645067522598198_n.jpg";
import regionalPolicyImage from "@/pictures/5.jpg";
import partnershipAllianceImage from "@/pictures/10.jpg";
import partnershipImpactImage from "@/pictures/youth development forum 2025.jpg";
import communityVolunteerImage from "@/pictures/goverment school outreach.jpeg";
import partnershipKnowledgeImage from "@/pictures/KMP4 Global youth selection.jpeg";
import communitySdgImage from "@/pictures/SDG awareness.jpg";
import fundSupportImage from "@/pictures/SHAM3084.jpg";
import kpmpAboutImage from "@/pictures/SHAM3094.jpg";
import fundEmpowerImage from "@/pictures/SHAM3299.jpg";
import kpmpRegionalImage from "@/pictures/alumni community dev.jpg";
import globalSkillsImage from "@/pictures/youth exchange program, china.jpg";

interface StoryCard {
  cardTitle: string;
  image: string;
  alt: string;
  caption: string;
  description: string;
}

function SectionCards({ cards }: { cards: StoryCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <article
          key={card.cardTitle}
          className="rounded-2xl border border-[rgba(163,180,200,0.2)] bg-[rgba(255,255,255,0.04)] p-4 backdrop-blur"
        >
          <div className="relative overflow-hidden rounded-xl border border-border/60">
            <Image
              src={card.image}
              alt={card.alt}
              width={900}
              height={560}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
              loading="lazy"
              className="h-52 w-full object-cover md:h-56"
            />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-white">{card.cardTitle}</h4>
          <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-primary uppercase">{card.caption}</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function TimelineDemo() {
  const data = [
    {
      id: "kpmp4a",
      title: "KPMP4Africa",
      content: (
        <SectionCards
          cards={[
            {
              cardTitle: "Origins",
              image: kpmpOriginsImage.src,
              alt: "KPMP4Africa Cohort 3.0 Graduation Ceremony",
              caption: "KPMP4Africa Cohort 3.0 Graduation Ceremony",
              description:
                "KPMP4Africa started in 2022 as a mentorship program for African youth focused on leadership, employability, and entrepreneurship.",
            },
            {
              cardTitle: "About",
              image: kpmpAboutImage.src,
              alt: "Pround Graduants of KPMP4A 4.0",
              caption: "Pround Graduants of KPMP4A 4.0",
              description:
                "KPMP4Africa runs as a 6-week experience featuring international speakers from the US, UK, Pakistan, and Nigeria, closing with a ceremony in Abuja alongside major regional stakeholders and a vision to raise 1,000 leaders.",
            },
            {
              cardTitle: "Regional Transformation",
              image: kpmpRegionalImage.src,
              alt: "KPMP4AFRICA Cohort 2.0 Community Schools Project",
              caption: "KPMP4AFRICA Cohort 2.0 Community Schools Project",
              description:
                "KPMP4Africa alumni are driving impact in policy, social enterprise, and community development across Africa.",
            },
          ]}
        />
      ),
    },
    {
      id: "global-exchange",
      title: "Global Exchange",
      content: (
        <SectionCards
          cards={[
            {
              cardTitle: "Cross-Cultural Learning",
              image: globalCrossImage.src,
              alt: "Global youth summit bringing together leaders from different continents",
              caption: "Global youth summit bringing together leaders from different continents...",
              description:
                "Global Exchange creates opportunities for cultural immersion, global collaboration, and shared solutions to common challenges.",
            },
            {
              cardTitle: "Skills Transfer and Innovation",
              image: globalSkillsImage.src,
              alt: "World Youth Development Forum, China",
              caption: "World Youth Development Forum, China",
              description:
                "Global Exchange delivers practical training in technology, sustainability, and social innovation through workshops, research, and mentorship.",
            },
            {
              cardTitle: "Lasting Impact Networks",
              image: globalNetworkImage.src,
              alt: "Long-term partnership agreements being signed",
              caption: "Long-term partnership agreements being signed...",
              description:
                "Global Exchange builds long-term collaboration networks and sustains alumni partnerships long after each exchange program ends.",
            },
          ]}
        />
      ),
    },
    {
      id: "community-impact",
      title: "Community Impact",
      content: (
        <SectionCards
          cards={[
            {
              cardTitle: "Grassroots Transformation",
              image: communityGrassrootsImage.src,
              alt: "Community development projects in education and infrastructure improvements",
              caption: "Community development projects... education and infrastructure improvements",
              description:
                "Community Impact supports youth-led projects that address local needs in education, healthcare, infrastructure, and economic growth.",
            },
            {
              cardTitle: "Volunteer Mobilization",
              image: communityVolunteerImage.src,
              alt: "Young volunteers engaged in community service",
              caption: "Young volunteers engaged in community service...",
              description:
                "Community Impact mobilizes young volunteers to respond to immediate needs while building leadership and civic values.",
            },
            {
              cardTitle: "Sustainable Development Focus",
              image: communitySdgImage.src,
              alt: "Innovative sustainable development projects with solar energy and water systems",
              caption: "Innovative sustainable development projects... solar energy and water systems",
              description:
                "Community Impact advances long-term sustainability through environmental stewardship and practical green solutions.",
            },
          ]}
        />
      ),
    },
    {
      id: "global-partnerships",
      title: "Global Partnerships",
      content: (
        <SectionCards
          cards={[
            {
              cardTitle: "Strategic Alliance Building",
              image: partnershipAllianceImage.src,
              alt: "Signing ceremonies for strategic partnerships",
              caption: "Signing ceremonies for strategic partnerships...",
              description:
                "Global Partnerships connects KPDF with international institutions to scale the impact of youth development initiatives.",
            },
            {
              cardTitle: "Knowledge and Resource Sharing",
              image: partnershipKnowledgeImage.src,
              alt: "International conferences and workshops",
              caption: "International conferences and workshops...",
              description:
                "Global Partnerships strengthens joint research, training, and shared funding efforts to solve development challenges.",
            },
            {
              cardTitle: "Cross-Border Impact",
              image: partnershipImpactImage.src,
              alt: "Multi-country youth development projects",
              caption: "Multi-country youth development projects...",
              description:
                "Global Partnerships powers multi-country initiatives and deeper regional integration through international support.",
            },
          ]}
        />
      ),
    },
    {
      id: "regional-representation",
      title: "Regional Representation",
      content: (
        <SectionCards
          cards={[
            {
              cardTitle: "ECOWAS Youth Leadership",
              image: regionalEcowasImage.src,
              alt: "ECOWAS Regional Youth Conference",
              caption: "ECOWAS Regional Youth Conference...",
              description:
                "Regional Representation positions KPDF as a key youth actor convening dialogue, policy discussion, and collaboration across the region.",
            },
            {
              cardTitle: "Policy Advocacy and Influence",
              image: regionalPolicyImage.src,
              alt: "Youth delegates presenting policy recommendations",
              caption: "Youth delegates presenting policy recommendations...",
              description:
                "Regional Representation brings youth voices into policy processes and supports youth-friendly regional strategies.",
            },
            {
              cardTitle: "Pan-African Youth Networks",
              image: regionalNetworkImage.src,
              alt: "Regional youth network meetings",
              caption: "Regional youth network meetings...",
              description:
                "Regional Representation builds networks across countries for collaboration, shared resources, and collective action.",
            },
          ]}
        />
      ),
    },
    {
      id: "youth-empowerment-fund",
      title: "KPDF Youth Empowerment Fund",
      content: (
        <SectionCards
          cards={[
            {
              cardTitle: "Empowering African Entrepreneurs",
              image: fundEmpowerImage.src,
              alt: "Launch event of the KPDF Youth Empowerment Fund",
              caption: "Launch event of the KPDF Youth Empowerment Fund...",
              description:
                "The KPDF Youth Empowerment Fund provides financing, mentorship, and support for youth entrepreneurs solving local problems.",
            },
            {
              cardTitle: "Comprehensive Support System",
              image: fundSupportImage.src,
              alt: "Young entrepreneurs receiving one-on-one mentorship",
              caption: "Young entrepreneurs receiving one-on-one mentorship...",
              description:
                "The KPDF Youth Empowerment Fund goes beyond funding by offering business development training, market access, and sustained mentorship.",
            },
          ]}
        />
      ),
    },
  ];

  return (
    <Timeline
      data={data}
      heading="Events Timeline"
      description="Explore the stories, milestones, and outcomes behind each KPDF initiative across Africa."
    />
  );
}
