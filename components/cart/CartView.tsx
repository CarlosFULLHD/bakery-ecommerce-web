import React, { useState } from "react";
import { useCart } from "./CartContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@nextui-org/react";
import ProgressBar from "../common/ProgressBar";
import { ArrowLeftToLine } from "lucide-react";
const CartView: React.FC = () => {
  const { cart, cartTotalPrice } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  console.log("Rendering CartView with cart:", cart);

  return (
    <div className="max-w-4xl   flex flex-col">
      {/* Barra de progreso */}
      <div className="mt-4 flex justify-start">
        <Button
          color="secondary"
          variant="bordered"
          onClick={() => (window.location.href = "/#masitas")}
        >
          <ArrowLeftToLine />
        </Button>
      </div>

      <ProgressBar currentStep={currentStep} />

      {/* Contenido de la fase actual */}

      <div className="max-w-4xl mx-auto flex flex-col px-4 py-2">
        <h1 className="text-3xl font-bold mb-8 text-custom-brown">
          Carrito de Compras
        </h1>

        {cart.length === 0 ? (
          <p className="text-lg">Tu carrito está vacío.</p>
        ) : (
          cart.map((item) => {
            console.log("Rendering cart item:", item);
            return <CartItem key={item.id} {...item} />;
          })
        )}

        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">
            Total: Bs. {cartTotalPrice.toFixed(2)}
          </h2>
        </div>

        <div className="flex flex-col mt-8 space-y-4">
          <Button color="primary" size="lg">
            Seleccionar Método de Entrega
          </Button>
          <Button color="secondary" size="lg">
            Descargar Carrito en PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
