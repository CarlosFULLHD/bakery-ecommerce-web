import React from "react";
import { useOrder } from "./OrderContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const CartView: React.FC = () => {
  const { cart, cartTotalPrice } = useOrder();

  return (
    <div className="max-w-4xl mx-auto flex flex-col">
      <div className="max-w-4xl mx-auto flex flex-col px-4 py-2">
        <h1 className="text-3xl font-bold mb-8 text-custom-brown">
          Carrito de Compras
        </h1>

        {cart.length === 0 ? (
          <p className="text-lg">Tu carrito está vacío.</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} {...item} />)
        )}

        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">
            Total: Bs. {cartTotalPrice.toFixed(2)}
          </h2>
        </div>

        <div className="flex flex-col mt-8">
          <Link href="/entrega">
            <Button
              color="primary"
              size="lg"
              className="bg-custom-brown-light font-bold text-white"
            >
              Seleccionar Método de Entrega
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
