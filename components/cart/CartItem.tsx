import React from 'react';
import { Button, Image } from '@nextui-org/react';
import { useCart } from './CartContext';

interface CartItemProps {
  id: string;
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, nombre, imagen, cantidad, precio }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-4">
      <Image src={imagen} alt={nombre} className="w-16 h-16 rounded-md" />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-bold">{nombre}</h2>
        <p className="text-lg">Cantidad: {cantidad}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">Bs. {(cantidad * precio).toFixed(2)}</p>
        <Button color="danger" onClick={() => removeFromCart(id)}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
