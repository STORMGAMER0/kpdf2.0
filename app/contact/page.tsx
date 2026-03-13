import dynamic from "next/dynamic";

import ContactPageDemo from "@/components/ui/contact-page-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";

const SiteFooter = dynamic(() => import("@/components/sections/site-footer"), {
  loading: () => <footer className="mt-2 h-56 border-t border-border/60 bg-[var(--background-deep)]" aria-hidden="true" />,
});

export default function ContactRoutePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip" id="contact">
      <NavBarDemo />

      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 pt-20 pb-10 sm:pt-24">
        <ContactPageDemo />
      </main>

      <SiteFooter />
    </div>
  );
}
