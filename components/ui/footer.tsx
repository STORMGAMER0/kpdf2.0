"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logoSrc: string;
  companyName?: string;
  description?: string;
  usefulLinks?: { label: string; href: string }[];
  socialLinks?: { label: string; href: string; icon: ReactNode }[];
  newsletterTitle?: string;
  onSubscribe?: (email: string) => Promise<boolean>;
}

export const Footer: FC<FooterProps> = ({
  logoSrc,
  companyName = "KPDF",
  description =
    "Kings Patriots Development Foundation empowers young leaders across Africa through mentorship, capacity-building, and values-driven leadership development.",
  usefulLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com/profile.php?id=100090158823134",
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/kpatriotsimpact",
      icon: <Instagram className="h-4 w-4" />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/2347061820884",
      icon: <MessageCircle className="h-4 w-4" />,
    },
  ],
  newsletterTitle = "Subscribe to our newsletter",
  onSubscribe,
  className,
  ...props
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle");
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    const subscribeHandler = onSubscribe ?? (async () => true);
    const success = await subscribeHandler(email);

    setSubscriptionStatus(success ? "success" : "error");
    setIsSubmitting(false);

    if (success) {
      setEmail("");
    }

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setSubscriptionStatus("idle");
    }, 3000);
  };

  return (
    <footer className={cn("border-t border-border/60 bg-[var(--background-deep)] text-muted-foreground", className)} {...props}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <Image src={logoSrc} alt={`${companyName} Logo`} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-semibold tracking-tight text-muted-foreground">{companyName}</span>
          </div>
          <p className="max-w-xs text-sm leading-7 text-muted-foreground">{description}</p>
        </div>

        <div className="md:justify-self-center">
          <h3 className="mb-4 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">Useful Links</h3>
          <ul className="space-y-2.5">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm leading-7 text-muted-foreground transition-colors duration-[250ms] hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-center">
          <h3 className="mb-4 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">Social</h3>
          <ul className="space-y-2.5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="flex items-center gap-2 text-sm leading-7 text-muted-foreground transition-colors duration-[250ms] hover:text-primary"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">{newsletterTitle}</h3>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
            <div className="relative flex items-center gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || subscriptionStatus !== "idle"}
                required
                aria-label="Email for newsletter"
                className="h-11 border-border bg-[rgba(2,46,81,0.55)] text-sm text-muted-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                disabled={isSubmitting || subscriptionStatus !== "idle"}
                className="h-11 rounded-full bg-primary px-5 text-xs font-semibold tracking-[0.1em] text-white uppercase hover:bg-primary active:bg-[var(--primary-depth)]"
              >
                {isSubmitting ? "Sending..." : "Subscribe"}
              </Button>
            </div>

            {(subscriptionStatus === "success" || subscriptionStatus === "error") && (
              <div
                key={subscriptionStatus}
                className="animate-in fade-in absolute inset-0 flex items-center justify-center rounded-lg bg-[rgba(1,24,41,0.85)] text-center backdrop-blur-sm"
              >
                {subscriptionStatus === "success" ? (
                  <span className="text-sm font-semibold text-primary">Subscribed successfully</span>
                ) : (
                  <span className="text-sm font-semibold text-destructive">Subscription failed</span>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </footer>
  );
};
