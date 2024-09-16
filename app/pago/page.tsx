"use client";
import React, { useState } from "react";
import PagoConfirmacion from "@/components/cart/PagoConfirmacion";
import BuyBar from "@/components/cart/BuyBar";

export default function PaymentPage() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <BuyBar currentStep={currentStep} />
      <PagoConfirmacion
        qrUrl={
          "/QRFabricio.jpeg"
        }
      />
    </>
  );
}
