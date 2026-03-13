"use client";

import React, { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export interface AccordionImageItem {
  id: number;
  title: string;
  imageUrl: string;
}

const defaultAccordionItems: AccordionImageItem[] = [
  {
    id: 1,
    title: "Youth Mentorship",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Leadership Training",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Community Impact",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Capacity Building",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Future Leaders",
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  },
];

interface AccordionItemProps {
  item: AccordionImageItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "relative h-[420px] overflow-hidden rounded-2xl border border-border/60 transition-all duration-700 ease-in-out",
        "cursor-pointer",
        isActive ? "w-[330px] md:w-[360px]" : "w-[58px] md:w-[64px]",
      )}
      onMouseEnter={onMouseEnter}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 80vw, 360px"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,24,41,0.18)_0%,rgba(1,24,41,0.62)_100%)]" />

      <span
        className={cn(
          "absolute whitespace-nowrap text-base font-semibold text-white transition-all duration-300 ease-in-out",
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90",
        )}
      >
        {item.title}
      </span>
    </div>
  );
}

interface LandingAccordionItemProps {
  items?: AccordionImageItem[];
  title?: string;
  description?: string;
}

export function LandingAccordionItem({
  items = defaultAccordionItems,
  title = "About Us",
  description =
    "At Kings Patriots Development Foundation, we are dedicated to shaping the future of West Africa by empowering its youth. We believe that the potential of young people knows no bounds and with the right guidance and opportunities, they can become the leaders, innovators and change-makers of tomorrow.",
}: LandingAccordionItemProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    if (items.length === 0) return 0;
    return Math.min(4, items.length - 1);
  });

  React.useEffect(() => {
    if (items.length === 0) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((current) => {
      if (current < 0) return 0;
      if (current > items.length - 1) return items.length - 1;
      return current;
    });
  }, [items]);

  return (
    <section className="surface-alt rounded-3xl border border-border/60 px-6 py-12 sm:px-10 sm:py-14">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-12">
        <div className="w-full lg:w-[44%]">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
          <div className="mt-5 h-[2px] w-20 bg-primary" />
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
        </div>

        <div className="w-full lg:w-[56%]">
          <div className="flex flex-row items-center justify-start gap-3 overflow-x-auto p-2 pb-4">
            {items.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
