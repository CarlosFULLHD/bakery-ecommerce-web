import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, cantidad: number) => void;
  cartTotalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, cantidad: cartItem.cantidad + item.cantidad }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, cantidad: number) => {
    setCart(prevCart => {
      return prevCart.map(cartItem =>
        cartItem.id === id ? { ...cartItem, cantidad } : cartItem
      );
    });
  };

  const cartTotalPrice = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
