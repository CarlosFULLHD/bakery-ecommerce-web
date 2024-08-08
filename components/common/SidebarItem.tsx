"use client";

import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { scrollIntoView } from "@/utils/scrollIntoView";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    scrollIntoView(href.slice(1)); // Elimina el "#" del href
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-custom-brown text-sm font-[500] pl-6 transition-all hover:text-white hover:bg-background-dark rounded-xl",
        isActive &&
          "text-custom-brown bg-sky-200/20 hover:bg-sky-200/20 hover:text-custom-brown-light"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-white", isActive && "text-white")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-custom-brown-light h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
