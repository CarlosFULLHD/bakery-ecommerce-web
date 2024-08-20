"use client";
import React, { useState, useEffect, useRef } from "react";

import MasitasSection from "@/components/MasitasSection";
import { CartProvider } from "@/components/cart/CartContext";
import CartView from "@/components/cart/CartView";
import EntregaCoordinada from "@/components/cart/EntregaCoordinada";
import PagoConfirmacion from "@/components/cart/PagoConfirmacion";
import { ArrowLeftToLine } from "lucide-react";
import { Button, Link } from "@nextui-org/react";
import ProgressBar from "@/components/common/ProgressBar";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <CartProvider>
      <div className="mt-4 flex justify-start">
        <Button color="secondary" variant="bordered" href="/entrega" as={Link}>
          <ArrowLeftToLine />
        </Button>
      </div>

      <ProgressBar currentStep={currentStep} />
      <PagoConfirmacion
        qrUrl={
          "https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"
        }
        totalPedido={100}
      />
    </CartProvider>
  );
}
