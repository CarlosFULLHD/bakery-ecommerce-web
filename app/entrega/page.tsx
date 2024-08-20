"use client";
import React, { useState } from "react";
import EntregaCoordinada from "@/components/cart/EntregaCoordinada";
import BuyBar from "@/components/cart/BuyBar";

export default function DeliveryPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <BuyBar
        currentStep={currentStep}
        onBackClick={() => {
          // Link to the previous page
          window.history.back();
        }}
      />
      <EntregaCoordinada />
    </>
  );
}
