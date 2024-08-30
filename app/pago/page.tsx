"use client";
import React, { useState } from "react";
import PagoConfirmacion from "@/components/cart/PagoConfirmacion";
import BuyBar from "@/components/cart/BuyBar";

export default function PaymentPage() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <BuyBar currentStep={currentStep} backUrl="/entrega" />
      <PagoConfirmacion
        qrUrl={
          "https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"
        }
      />
    </>
  );
}
