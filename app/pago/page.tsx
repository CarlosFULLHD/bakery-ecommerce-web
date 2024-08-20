"use client";
import React, { useState } from "react";
import PagoConfirmacion from "@/components/cart/PagoConfirmacion";
import BuyBar from "@/components/cart/BuyBar";

export default function PaymentPage() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <>
      <BuyBar
        currentStep={currentStep}
        onBackClick={() => {
          // Link to the previous page
          window.history.back();
        }}
      />
      <PagoConfirmacion
        qrUrl={
          "https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"
        }
        totalPedido={100} // Use the actual total amount
      />
    </>
  );
}
