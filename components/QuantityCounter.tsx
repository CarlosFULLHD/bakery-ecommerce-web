// QuantityCounter.tsx
import React, { useState, useEffect } from 'react';

interface QuantityCounterProps {
  minQuantity: number;
  initialQuantity?: number;
  p_u1: number;
  p_u2: number;
  p_u3: number;
  p_u4: number;
  p_u5: number;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({ minQuantity, initialQuantity = minQuantity, p_u1, p_u2, p_u3, p_u4, p_u5 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice(quantity);
  }, [quantity]);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > minQuantity ? prev - 1 : prev));

  const calculateTotalPrice = (quantity: number) => {
    let pricePerUnit = p_u1;
    if (quantity >= 18) {
      pricePerUnit = p_u2;
    } else if (quantity >= 13) {
      pricePerUnit = p_u1;
    }
    const total = quantity * pricePerUnit;
    setTotalPrice(Math.ceil(total));
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-lg font-bold">
        Precio Total: Bs {totalPrice.toFixed(2)}
      </div>
      <div className="flex items-center space-x-4">
        <button className="btn btn-decrement" onClick={handleDecrement} disabled={quantity <= minQuantity}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-increment" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default QuantityCounter;
