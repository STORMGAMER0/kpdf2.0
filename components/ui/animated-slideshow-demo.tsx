"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import whatWeDoImage1 from "@/pictures/SHAM3082.jpg";
import whatWeDoImage2 from "@/pictures/8.jpg";
import whatWeDoImage3 from "@/pictures/34.jpg";
import whatWeDoImage4 from "@/pictures/30.jpg";
import whatWeDoImage5 from "@/pictures/1.jpg";

const SLIDES = [
  {
    id: "slide-1",
    title: "Mentorship Program",
    imageUrl: whatWeDoImage1.src,
  },
  {
    id: "slide-2",
    title: "Leadership Trainings",
    imageUrl: whatWeDoImage2.src,
  },
  {
    id: "slide-3",
    title: "SDGs Advocacy",
    imageUrl: whatWeDoImage3.src,
  },
  {
    id: "slide-4",
    title: "Digital Literacy Trainings",
    imageUrl: whatWeDoImage4.src,
  },
  {
    id: "slide-5",
    title: "Youth Development",
    imageUrl: whatWeDoImage5.src,
  },
];

export function HoverSliderDemo() {
  return (
    <HoverSlider className="surface-primary rounded-3xl border border-border/60 p-6 md:px-10 md:py-12">
      <h3 className="mb-6 text-xs font-semibold tracking-[0.16em] text-primary uppercase">What We Do</h3>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex w-full flex-col space-y-2 md:max-w-[48%] md:space-y-4">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.id}
              index={index}
              className="cursor-pointer text-2xl leading-tight font-bold tracking-tight text-white uppercase md:text-4xl"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap className="w-full md:min-w-[340px] md:max-w-[520px]">
          {SLIDES.map((slide, index) => (
            <div key={slide.id}>
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full max-h-96 rounded-2xl border border-border/70 object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
  );
}
