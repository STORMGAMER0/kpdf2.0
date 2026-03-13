import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import TeamMemberCard from "@/components/ui/team-member-card";
import drJudeImage from "@/pictures/Dr Jude.jpeg";

export default function FounderSection() {
  return (
    <section className="surface-alt rounded-3xl border border-border/60 px-6 py-12 sm:px-10 sm:py-14" id="founder">
      <AnimatedText
        text="The Founder"
        textClassName="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.3rem]"
        underlineClassName="text-primary"
      />

      <div className="mt-10">
        <TeamMemberCard className="my-0" position="left" imageUrl={drJudeImage.src} jobPosition="FOUNDER & CEO" />
      </div>
    </section>
  );
}
