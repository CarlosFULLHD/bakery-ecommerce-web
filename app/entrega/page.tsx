"use client";
import React, { useState, useEffect, useRef } from "react";

import MasitasSection from "@/components/MasitasSection";
import { CartProvider } from "@/components/cart/CartContext";
import CartView from "@/components/cart/CartView";
import EntregaCoordinada from "@/components/cart/EntregaCoordinada";
import { Button, Link } from "@nextui-org/react";
import { ArrowLeftToLine } from "lucide-react";
import ProgressBar from "@/components/common/ProgressBar";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <CartProvider>
      <div className="mt-4 flex justify-start">
        <Button color="secondary" variant="bordered" href="/carrito" as={Link}>
          <ArrowLeftToLine />
        </Button>
      </div>

      <ProgressBar currentStep={currentStep} />
      <EntregaCoordinada />
    </CartProvider>
  );
}
