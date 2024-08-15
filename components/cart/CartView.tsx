import React from 'react';
import { useCart } from './CartContext';
import CartItem from '@/components/cart/CartView';
import { Button } from '@nextui-org/react';

const CartView: React.FC = () => {
  const { cart, cartTotalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Tu carrito está vacío.</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))
      )}

      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold">Total: Bs. {cartTotalPrice.toFixed(2)}</h2>
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
  );
};

export default CartView;
