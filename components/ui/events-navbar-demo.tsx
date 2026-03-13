"use client";

import { CalendarDays, Home, Mail, User } from "lucide-react";

import { NavBar } from "@/components/ui/tubelight-navbar";

export function EventsNavBarDemo() {
  const navItems = [
    { name: "Events", url: "/events", icon: CalendarDays },
    { name: "Home", url: "/#home", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
