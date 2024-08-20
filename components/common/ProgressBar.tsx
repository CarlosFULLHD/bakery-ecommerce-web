import { ShoppingCart, MapPin, CircleDollarSign } from "lucide-react";
import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { label: "Carrito de Compras", icon: ShoppingCart },
  { label: "Método de Entrega", icon: MapPin },
  { label: "Pago y Confirmación", icon: CircleDollarSign },
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto mt-4 relative">
      <div className="flex  w-full ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center relative w-full justify-center"
          >
            <div className="flex flex-col items-center justify-between">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 rounded-full z-10 font-bold text-sm sm:text-base lg:text-lg transition-all transform
                ${index === currentStep ? "bg-custom-brown-light border-custom-brown text-white scale-110 shadow-lg" : "bg-gray-300 border-gray-400 text-gray-600 opacity-50 scale-90"}`}
              >
                {React.createElement(step.icon, {
                  size: 28,
                  className:
                    index === currentStep ? "text-white" : "text-gray-600",
                })}
              </div>
              <span
                className={`text-xs sm:text-sm lg:text-base mt-2 text-center leading-tight transition-opacity ${index === currentStep ? "text-custom-brown font-bold opacity-100" : "text-custom-brown opacity-50"}`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-full ${index < currentStep ? "bg-custom-brown" : "bg-gray-300"} ml-2 sm:ml-4 md:ml-6`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
