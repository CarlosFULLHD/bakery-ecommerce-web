"use client";

import {
  ShoppingBag,
  Info,
  HelpCircle,
  Star,
  Phone,
  ShoppingCart,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";

export const routes = [
  { icon: ShoppingBag, label: "Cómo Realizar un Pedido", href: "/pedido" },
  { icon: Info, label: "Sobre Nosotros", href: "/sobre-nosotros" },
  {
    icon: HelpCircle,
    label: "Preguntas Frecuentes",
    href: "/preguntas-frecuentes",
  },
  { icon: Star, label: "Reseñas", href: "/resenas" },
  { icon: Phone, label: "Contacto", href: "/contacto" },
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
