import dynamic from "next/dynamic";

import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { NavBarDemo } from "@/components/ui/navbar-demo";

const InteractiveSelectorDemo = dynamic(() => import("@/components/ui/interactive-selector-demo"), {
  loading: () => <section className="surface-primary h-[100svh] rounded-3xl border border-border/60" aria-hidden="true" />,
});

const TimelineDemo = dynamic(() => import("@/components/ui/timeline-demo"), {
  loading: () => <section className="surface-alt h-[900px] rounded-3xl border border-border/60" aria-hidden="true" />,
});

const SiteFooter = dynamic(() => import("@/components/sections/site-footer"), {
  loading: () => <footer className="mt-2 h-56 border-t border-border/60 bg-[var(--background-deep)]" aria-hidden="true" />,
});

export default function EventsPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip" id="events">
      <NavBarDemo />

      <main className="mx-auto flex w-full max-w-[1380px] flex-col px-4 pt-20 pb-10 sm:px-6 sm:pt-24 lg:px-8">
        <InteractiveSelectorDemo />
        <div className="mt-10">
          <TimelineDemo />
        </div>
      </main>

      <BackToTopButton />
      <SiteFooter />
    </div>
  );
}
