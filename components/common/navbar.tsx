"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  
} from "@nextui-org/navbar";
import {Tooltip} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { FaChevronDown } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import ModalComponentContanctame from "../ModalComponentContanctame";
import { scrollIntoView } from "@/utils/scrollIntoView";
import { routes } from "./SidebarRoutes";
import { ShoppingCart } from "lucide-react";
import CartItem from "../cart/CartItem";
import { useOrder } from "../cart/OrderContext";
import { Logo } from "../icons";
export const Navbar = () => {
  const {  cart} = useOrder();

  return (
    <NextUINavbar
      className="bg-custom-background h-12 md:h-10 lg:h-12 xl:h-14 sticky"
      maxWidth="full"
      
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NextLink className="flex justify-start gap-1" href="/">
          <img
            src="PasteleriaAgapeTexto.webp"
            alt="Pasteleria Agape Logo"
            width={110}
            height={30}
            className="rounded-lg"
            />
        </NextLink>
      </NavbarContent>


      {/* Navbar para pc */}
      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden md:flex gap-14 text-white">
          {routes.map((item) => (
            <NavbarItem key={item.href}>
              
                <NextLink href={item.href} passHref className="text-white text-xs lg:text-lg flex items-center gap-2">
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </NextLink>
              
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full lg:mr-5 " justify="end">
      <Tooltip showArrow={true} color='foreground'        
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">Carrito de compras actual:</div>
          
          {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
        </div>
      }>
      <NextLink
          className="flex justify-start gap-1 bg-custom-brown-light rounded-full p-3 lg:py-1 lg:rounded-3xl shadow-lg border-custom-brown border-2 hover:scale-125 transition duration-500"
          href="/carrito"
        >
          <ShoppingCart />
          <h3 className="absolute invisible lg:visible lg:relative lg:ml-2 " >Carrito</h3>
        </NextLink>
      </Tooltip>

      </NavbarContent>
    </NextUINavbar>
  );
};
