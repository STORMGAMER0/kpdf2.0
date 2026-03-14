"use client";

import React from "react";
import {
  Check,
  Copy,
  Facebook,
  Instagram,
  LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const APP_EMAIL = "kpatriotsimpact@gmail.com";
const APP_PHONE = "+234 706 182 0884";
const APP_ADDRESS = "Abuja, Federal Capital Territory, Nigeria";
const SOCIAL_FACEBOOK_KPDF = "https://facebook.com/profile.php?id=100090158823134";
const SOCIAL_INSTAGRAM_KPDF = "https://instagram.com/kpatriotsimpact";
const SOCIAL_WHATSAPP = "https://wa.me/2347061820884";

export function ContactPage() {
  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${APP_EMAIL}`,
      label: "Email",
    },
    {
      icon: Facebook,
      href: SOCIAL_FACEBOOK_KPDF,
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: SOCIAL_INSTAGRAM_KPDF,
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: SOCIAL_WHATSAPP,
      label: "WhatsApp",
    },
  ];

  return (
    <div className="surface-alt min-h-screen w-full rounded-3xl border border-border/60">
      <div className="mx-auto h-full max-w-6xl">
        <div className="pointer-events-none absolute inset-0 isolate -z-10 opacity-80 [contain:paint]">
          <div className="absolute top-0 left-0 h-[48rem] w-[28rem] -translate-y-80 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0.01)_80%)]" />
          <div className="absolute top-0 left-0 h-[48rem] w-52 -translate-y-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.01)_80%,transparent_100%)]" />
        </div>

        <div className="flex grow flex-col justify-center px-4 pt-32 pb-14 md:px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-2 mb-2 text-base text-muted-foreground">
            Connect with the Kings Patriots Development Foundation team.
          </p>
        </div>

        <BorderSeparator />

        <div className="grid md:grid-cols-3">
          <Box icon={Mail} title="Email" description="We respond to all emails within 24 hours.">
            <a href={`mailto:${APP_EMAIL}`} className="font-mono text-base font-medium tracking-wide hover:text-white hover:underline">
              {APP_EMAIL}
            </a>
            <CopyButton className="size-8" test={APP_EMAIL} />
          </Box>

          <Box icon={MapPin} title="Office" description="Drop us a message for appointment-based visits.">
            <span className="font-mono text-base font-medium tracking-wide">{APP_ADDRESS}</span>
          </Box>

          <Box
            icon={Phone}
            title="Phone"
            description="We're available Mon-Fri, 9am-5pm."
            className="border-b-0 md:border-r-0"
          >
            <div className="flex items-center gap-x-2">
              <a href={`tel:${APP_PHONE}`} className="block font-mono text-base font-medium tracking-wide hover:text-white hover:underline">
                {APP_PHONE}
              </a>
              <CopyButton className="size-8" test={APP_PHONE} />
            </div>
          </Box>
        </div>

        <BorderSeparator />

        <div className="relative flex min-h-[320px] items-center justify-center px-4 py-14">
          <div
            className={cn(
              "z-0 absolute inset-0 size-full",
              "bg-[radial-gradient(color-mix(in_oklab,var(--foreground)25%,transparent)_1px,transparent_1px)] bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,var(--background)_30%,transparent)]",
            )}
          />

          <div className="relative z-10 space-y-6">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Find us online</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="glass-card hover:bg-accent/30 flex items-center gap-x-2 rounded-full border border-border/70 px-4 py-2 transition-all duration-250 hover:scale-[1.03]"
                >
                  <link.icon className="size-4 text-primary" />
                  <span className="font-mono text-sm font-medium tracking-wide text-muted-foreground">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BorderSeparator() {
  return <div className="h-px w-full border-b border-border/70" />;
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({ title, description, className, children, ...props }: ContactBox) {
  return (
    <div className={cn("flex flex-col justify-between border-b border-border/70 md:border-r md:border-b-0", className)}>
      <div className="bg-muted/35 flex items-center gap-x-3 border-b border-border/60 p-4">
        <props.icon className="text-muted-foreground size-5" strokeWidth={1.6} />
        <h2 className="text-lg font-medium tracking-wider">{title}</h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-10">{children}</div>
      <div className="border-t border-border/60 p-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & {
  test: string;
};

function CopyButton({ className, variant = "ghost", size = "icon", test, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("relative border border-border/60 disabled:opacity-100", className)}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied || props.disabled}
      {...props}
    >
      <div className={cn("transition-all", copied ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
        <Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
      </div>
      <div className={cn("absolute transition-all", copied ? "scale-0 opacity-0" : "scale-100 opacity-100")}>
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  );
}
