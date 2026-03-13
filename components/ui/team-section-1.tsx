import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  imageAlt?: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode;
  socialLinksMain?: SocialLink[];
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-3xl border border-border/60 bg-background py-12 md:py-16 lg:py-20",
          className,
        )}
        {...props}
      >
        <div className="container relative z-10 grid items-center justify-center gap-8 px-4 text-center md:px-6">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-5">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-muted-foreground"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-2 text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                <span className="text-primary block text-xl sm:text-2xl md:text-3xl font-medium">
                  O U R
                </span>
                {title}
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && <div className="text-2xl font-bold text-white">{logo}</div>}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  REGISTER NOW
                </a>
              )}
            </div>
          </div>

          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-4 md:justify-center">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
              <span className="text-muted-foreground text-sm">kpdf.org</span>
            </div>
          )}

          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {members.map((member, index) => {
              const isRemoteImage =
                member.imageSrc.startsWith("http://") || member.imageSrc.startsWith("https://");

              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-end overflow-hidden rounded-xl bg-card p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    backgroundColor:
                      index === 0
                        ? "rgba(183,72,3,0.18)"
                        : index === 1
                          ? "rgba(163,180,200,0.12)"
                          : "rgba(204,109,61,0.16)",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-primary/20 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  />

                  <div
                    className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-transparent bg-background/20 transition-all duration-500 ease-out group-hover:border-primary group-hover:scale-105"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt ?? member.name}
                      fill
                      sizes="144px"
                      unoptimized={isRemoteImage}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  <h3 className="relative z-10 mt-4 text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="relative z-10 text-sm text-muted-foreground">
                    {member.designation}
                  </p>

                  {member.socialLinks && member.socialLinks.length > 0 && (
                    <div className="relative z-10 mt-4 flex gap-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      {member.socialLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <link.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);

TeamSection.displayName = "TeamSection";
