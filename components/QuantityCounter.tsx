import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

interface QuantityCounterProps {
  minQuantity: number;
  initialQuantity?: number;
  p_u1: number;
  p_u2: number;
  p_u3: number;
  onQuantityChange: (quantity: number, totalPrice: number) => void;
  showTotalPrice?: boolean;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  minQuantity,
  initialQuantity = minQuantity,
  p_u1,
  p_u2,
  p_u3,
  onQuantityChange,
  showTotalPrice = true,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalPrice, setTotalPrice] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const delayRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstPressRef = useRef(true);

  useEffect(() => {
    calculateTotalPrice(quantity);
  }, [quantity]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > minQuantity ? prev - 1 : prev));

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
      pricePerUnit = p_u3;
    } else if (quantity >= 18) {
      pricePerUnit = p_u2;
    }

    const total = quantity * pricePerUnit;
    const roundedTotal = Math.ceil(total);
    setTotalPrice(roundedTotal);
    onQuantityChange(quantity, roundedTotal);
  };

  const startIncrement = () => {
    if (isFirstPressRef.current) {
      handleIncrement();
      isFirstPressRef.current = false;
    }
    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(handleIncrement, 200);
    }, 500);
  };

  const startDecrement = () => {
    if (isFirstPressRef.current) {
      handleDecrement();
      isFirstPressRef.current = false;
    }
    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(handleDecrement, 200);
    }, 500);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }
    isFirstPressRef.current = true;
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {showTotalPrice && (
        <div className="text-lg font-bold">
          Precio Total: Bs {totalPrice.toFixed(2)}
        </div>
      )}
      <div className="flex items-center">
        <button
          className="btn btn-decrement border rounded bg-white p-2"
          onMouseDown={startDecrement}
          onMouseUp={stopInterval}
          onMouseLeave={stopInterval}
          onTouchStart={startDecrement}
          onTouchEnd={stopInterval}
          disabled={quantity <= minQuantity}
        >
          <Minus size={20} className="text-black" />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={handleBlur}
          className="w-16 text-center text-black border border-gray-300 rounded p-2 bg-white focus:outline-none focus:border-gray-500"
          style={{
            MozAppearance: "textfield",
            WebkitAppearance: "none",
            appearance: "none",
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
          <Plus size={20} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
