"use client";
import React, { useState } from "react";
import EntregaCoordinada from "@/components/cart/EntregaCoordinada";
import BuyBar from "@/components/cart/BuyBar";

export default function DeliveryPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <BuyBar currentStep={currentStep} />
      <EntregaCoordinada />
    </>
  );
}
