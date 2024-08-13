// QuantityCounter.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantityCounterProps {
  minQuantity: number;
  initialQuantity?: number;
  p_u1: number;
  p_u2: number;
  p_u3: number;
  p_u4: number;
  p_u5: number;
  onQuantityChange: (quantity: number, totalPrice: number) => void; // Modificación para enviar cantidad y precio total
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  minQuantity,
  initialQuantity = minQuantity,
  p_u1,
  p_u2,
  p_u3,
  p_u4,
  p_u5,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalPrice, setTotalPrice] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const delayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    calculateTotalPrice(quantity);
  }, [quantity]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > minQuantity ? prev - 1 : prev));

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleBlur = () => {
    if (quantity < minQuantity) {
      setQuantity(minQuantity);
    }
  };

  const calculateTotalPrice = (quantity: number) => {
    let pricePerUnit = p_u1;

    if (quantity >= 51) {
      pricePerUnit = p_u5;
    } else if (quantity >= 41) {
      pricePerUnit = p_u4;
    } else if (quantity >= 31) {
      pricePerUnit = p_u3;
    } else if (quantity >= 18) {
      pricePerUnit = p_u2;
    } else if (quantity >= 13) {
      pricePerUnit = p_u1;
    }

    const total = quantity * pricePerUnit;
    const roundedTotal = Math.ceil(total);
    setTotalPrice(roundedTotal);
    onQuantityChange(quantity, roundedTotal); // Notifica al padre
  };

  const startIncrement = () => {
    handleIncrement(); // Primera suma
    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(handleIncrement, 150);
    }, 600); // Inicia el intervalo después de 0.8 segundos
  };

  const startDecrement = () => {
    handleDecrement(); // Primera resta
    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(handleDecrement, 150);
    }, 600); // Inicia el intervalo después de 0.8 segundos
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-lg font-bold">
        Precio Total: Bs {totalPrice.toFixed(2)}
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="btn btn-decrement border rounded bg-white p-2"
          onMouseDown={startDecrement}
          onMouseUp={stopInterval}
          onMouseLeave={stopInterval}
          onTouchStart={startDecrement}
          onTouchEnd={stopInterval}
          disabled={quantity <= minQuantity}
        >
          <Minus size={20} />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={handleBlur}
          className="w-16 text-center border border-gray-300 rounded p-2 bg-white focus:outline-none focus:border-gray-500"
          style={{
            MozAppearance: 'textfield',
            WebkitAppearance: 'none',
          }}
          onFocus={(event) => event.target.select()}
        />
        <button
          className="btn btn-increment border rounded bg-white p-2"
          onMouseDown={startIncrement}
          onMouseUp={stopInterval}
          onMouseLeave={stopInterval}
          onTouchStart={startIncrement}
          onTouchEnd={stopInterval}
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
