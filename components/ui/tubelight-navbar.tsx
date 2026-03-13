"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");

  const normalizePath = useCallback((path: string) => {
    if (!path || path === "") return "/";
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return normalized === "/" ? "/" : normalized.replace(/\/+$/, "");
  }, []);

  const resolveActiveTab = useCallback(
    (path: string, currentHash: string) => {
      const normalizedPath = normalizePath(path);

      const match = items.find((item) => {
        const [itemPathRaw, itemHashRaw] = item.url.split("#");
        const itemPath = normalizePath(itemPathRaw || "/");
        const itemHash = itemHashRaw ? `#${itemHashRaw}` : "";

        if (itemHash && currentHash) {
          return itemPath === normalizedPath && itemHash === currentHash;
        }

        return !itemHash && itemPath === normalizedPath;
      });

      if (match) return match.name;

      if (normalizedPath === "/") {
        const homeMatch = items.find((item) => item.url === "/#home" || item.url === "/");
        if (homeMatch) return homeMatch.name;
      }

      return items[0]?.name ?? "";
    },
    [items, normalizePath],
  );

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash || "");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    setActiveTab(resolveActiveTab(pathname, hash));
  }, [pathname, hash, resolveActiveTab]);

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:top-4 sm:bottom-auto",
        className,
      )}
    >
      <div className="glass-card flex items-center gap-2 rounded-full px-1 py-1 shadow-[0_16px_40px_rgba(1,24,41,0.55)]">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer rounded-full text-sm font-semibold transition-all duration-300",
                "px-3 py-2 md:px-6",
                "text-foreground hover:text-primary",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/20 ring-1 ring-[var(--primary-depth)]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-[var(--primary)]">
                    <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-[var(--primary)]/25 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-[var(--primary-depth)]/25 blur-md" />
                    <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-[var(--primary)]/30 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
