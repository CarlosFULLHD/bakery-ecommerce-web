"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ZonedDateTime,
  now,
  getLocalTimeZone,
  parseZonedDateTime,
} from "@internationalized/date";

interface CartItem {
  id: string;
  nombre: string;
  imagen: string;
  cantidad: number;
  precio: number;
}

interface OrderContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, cantidad: number) => void;
  removeFromCart: (id: string) => void;
  cartTotalPrice: number;
  selectedLugar: string | null;
  precioEntrega: number;
  selectedDate: ZonedDateTime | null;
  setSelectedLugar: (lugar: string) => void;
  setPrecioEntrega: (precio: number) => void;
  setSelectedDate: (date: ZonedDateTime) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedLugar, setSelectedLugar] = useState<string | null>(null);
  const [precioEntrega, setPrecioEntrega] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<ZonedDateTime | null>(null);

  useEffect(() => {
    console.log("Loading data from sessionStorage...");
    const storedOrderData = sessionStorage.getItem("orderData");

    if (storedOrderData) {
      const parsedData = JSON.parse(storedOrderData);
      console.log("Parsed orderData:", parsedData);

      setCart(parsedData.cart || []);
      setSelectedLugar(parsedData.selectedLugar || null);
      setPrecioEntrega(parsedData.precioEntrega || 0);
      setSelectedDate(
        parsedData.selectedDate
          ? parseZonedDateTime(parsedData.selectedDate)
          : now(getLocalTimeZone())
      );
    } else {
      setSelectedDate(now(getLocalTimeZone()));
    }
  }, []);

  useEffect(() => {
    const orderData = {
      cart,
      selectedLugar,
      precioEntrega,
      selectedDate: selectedDate ? selectedDate.toString() : null,
    };
    console.log("Saving orderData to sessionStorage:", orderData);
    sessionStorage.setItem("orderData", JSON.stringify(orderData));
  }, [cart, selectedLugar, precioEntrega, selectedDate]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      const newCart = itemExists
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  cantidad: cartItem.cantidad + item.cantidad,
                  precio: cartItem.precio + item.precio,
                }
              : cartItem
          )
        : [...prevCart, item];
      console.log("Adding item to cart:", item);
      console.log("Updated cart:", newCart);
      return newCart;
    });
  };

  const updateQuantity = (id: string, cantidad: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      );
      console.log("Updating quantity in cart:", { id, cantidad });
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const filteredCart = prevCart.filter((item) => item.id !== id);
      console.log("Removing item from cart:", id);
      console.log("Updated cart:", filteredCart);
      return filteredCart;
    });
  };

  const cartTotalPrice = cart.reduce(
    (total, item) => total + item.precio, // Ensure the total is calculated correctly
    0
  );

  console.log("Current cart total price:", cartTotalPrice);

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotalPrice,
        selectedLugar,
        precioEntrega,
        selectedDate,
        setSelectedLugar,
        setPrecioEntrega,
        setSelectedDate,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextProps => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
