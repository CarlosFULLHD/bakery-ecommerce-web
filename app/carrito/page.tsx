"use client";
import React, { useState, useEffect } from "react";
import CartView from "@/components/cart/CartView";
import BuyBar from "@/components/cart/BuyBar";

export default function CartPage() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <BuyBar
        currentStep={currentStep}
        onBackClick={() => (window.location.href = "/#masitas")}
      />
      <CartView />
    </>
  );
}
