import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  id: string;
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, cantidad: number) => void;
  removeFromCart: (id: string) => void;
  cartTotalPrice: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from sessionStorage when the component mounts
  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      const newCart = itemExists
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
              : cartItem
          )
        : [...prevCart, item];
      return newCart;
    });
  };

  const updateQuantity = (id: string, cantidad: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      );
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const filteredCart = prevCart.filter((item) => item.id !== id);
      return filteredCart;
    });
  };

  const cartTotalPrice = cart.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
