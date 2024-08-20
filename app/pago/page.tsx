"use client";
import React, { useState, useEffect, useRef } from "react";

import MasitasSection from "@/components/MasitasSection";
import { CartProvider } from "@/components/cart/CartContext";
import CartView from "@/components/cart/CartView";
import EntregaCoordinada from "@/components/cart/EntregaCoordinada";
import PagoConfirmacion from "@/components/cart/PagoConfirmacion";
export default function Home() {
  return (

<CartProvider>     

                <PagoConfirmacion qrUrl={"https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"} 
                totalPedido={100}/>

</CartProvider> 


  );
}
