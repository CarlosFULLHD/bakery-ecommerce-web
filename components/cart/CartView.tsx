import React from "react";
import { useCart } from "./CartContext";
import CartItem from "@/components/cart/CartItem";
import { Button, Link } from "@nextui-org/react";
import ProgressBar from "../common/ProgressBar";
import CartPDF from "./CartPDF"; // Importamos el nuevo componente

const CartView: React.FC = () => {
  const { cart, cartTotalPrice } = useCart();

  console.log("Rendering CartView with cart:", cart);

  return (
    <div className="max-w-4xl flex flex-col">
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

        <div className="flex flex-col mt-8 ">
          <CartPDF />{" "}
          {/* Aquí usamos el nuevo componente para descargar el PDF */}
          <Button
            color="primary"
            size="lg"
            as={Link}
            href="/entrega"
            className=" bg-custom-brown-light font-bold text-white"
          >
            Seleccionar Método de Entrega
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
