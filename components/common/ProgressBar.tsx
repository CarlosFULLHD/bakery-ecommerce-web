import { ShoppingCart, MapPin, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto mt-4 relative">
      {/* Button at the top */}
      <div className="absolute top-0 left-0 ">
        <Link href="/#masitas" passHref>
          <Button color="secondary" variant="light" className="underline ">
            Volver al menú
          </Button>
        </Link>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-3 w-full mt-10">  {/* Adjusted margin top to give space for button */}
        {/* Step 1 - Carrito de Compras */}
        <Link href="/carrito" passHref>
          <div className="flex flex-col items-center justify-between cursor-pointer">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 rounded-full z-10 font-bold text-sm sm:text-base lg:text-lg transition-all transform
            ${currentStep === 0 ? "bg-custom-brown-light border-custom-brown text-white scale-110 shadow-lg" : "bg-gray-300 border-gray-400 text-gray-600 scale-90"}`}>
              <ShoppingCart size={28} className={currentStep === 0 ? "text-white" : "text-gray-600"} />
            </div>
            <span className={`text-xs sm:text-sm lg:text-base mt-2 text-center leading-tight transition-opacity ${currentStep === 0 ? "text-custom-brown font-bold opacity-100" : "text-custom-brown opacity-50"} whitespace-normal lg:whitespace-nowrap`}>
              Carrito de Compras
            </span>
          </div>
        </Link>

        {/* Step 2 - Método de Entrega */}
        <Link href="/entrega" passHref>
          <div className="flex flex-col items-center justify-between cursor-pointer">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 rounded-full z-10 font-bold text-sm sm:text-base lg:text-lg transition-all transform
            ${currentStep === 1 ? "bg-custom-brown-light border-custom-brown text-white scale-110 shadow-lg" : "bg-gray-300 border-gray-400 text-gray-600 scale-90"}`}>
              <MapPin size={28} className={currentStep === 1 ? "text-white" : "text-gray-600"} />
            </div>
            <span className={`text-xs sm:text-sm lg:text-base mt-2 text-center leading-tight transition-opacity ${currentStep === 1 ? "text-custom-brown font-bold opacity-100" : "text-custom-brown opacity-50"} overflow-wrap:anywhere whitespace-normal lg:whitespace-nowrap`}>
              Método de Entrega
            </span>
          </div>
        </Link>

        {/* Step 3 - Pago y Confirmación */}
        <Link href="/pago" passHref>
          <div className="flex flex-col items-center justify-between cursor-pointer">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center border-2 rounded-full z-10 font-bold text-sm sm:text-base lg:text-lg transition-all transform
            ${currentStep === 2 ? "bg-custom-brown-light border-custom-brown text-white scale-110 shadow-lg" : "bg-gray-300 border-gray-400 text-gray-600 scale-90"}`}>
              <CircleDollarSign size={28} className={currentStep === 2 ? "text-white" : "text-gray-600"} />
            </div>
            <span className={`text-xs sm:text-sm lg:text-base mt-2 text-center leading-tight transition-opacity ${currentStep === 2 ? "text-custom-brown font-bold opacity-100" : "text-custom-brown opacity-50"} overflow-wrap:anywhere whitespace-normal lg:whitespace-nowrap`}>
              Pago y Confirmación
            </span>
          </div>
        </Link>
      </div>

      <div className="absolute top-16 left-12 right-0 transform -translate-y-1/2 w-9/12 md:top-20 md:left-28 md:w-8/12 lg:left-36">
        <div className="h-1 bg-gray-300 w-full"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
