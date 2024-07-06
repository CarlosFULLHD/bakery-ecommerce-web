"use client";

import {
  BarChart,
  Compass,
  Layout,
  List,
  Mail,
  Heart,
  User,
  Code,
  PanelsTopLeft,
  GraduationCap,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";

export const routes = [
  { icon: GraduationCap, label: "Skills", href: "#skills" },
  {
    icon: Code,
    label: "Experience",
    href: "#experience",
  },
  {
    icon: PanelsTopLeft,
    label: "Key Projects",
    href: "#projects",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
