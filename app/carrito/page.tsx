"use client";
import React, { useState, useEffect, useRef } from "react";

import MasitasSection from "@/components/MasitasSection";
import { CartProvider } from "@/components/cart/CartContext";
import CartView from "@/components/cart/CartView";
export default function Home() {
  return (

<CartProvider>     

<CartView />
</CartProvider> 


  );
}
