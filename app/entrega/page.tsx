"use client";
import React, { useState, useEffect, useRef } from "react";

import MasitasSection from "@/components/MasitasSection";
import { CartProvider } from "@/components/cart/CartContext";
import CartView from "@/components/cart/CartView";
import EntregaCoordinada from "@/components/cart/EntregaCoordinada";
export default function Home() {
  return (

<CartProvider>     

<EntregaCoordinada/>

</CartProvider> 


  );
}
