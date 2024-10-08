"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
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
  nota: string;
  setNota: (nota: string) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedLugar, setSelectedLugar] = useState<string | null>(null);
  const [precioEntrega, setPrecioEntrega] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<ZonedDateTime | null>(null);
  const [nota, setNota] = useState<string>(""); // Estado para la nota

  // Load data from sessionStorage when the component mounts
  useEffect(() => {
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
      setNota(parsedData.nota || ""); // Recuperar la nota guardada
    } else {
      setSelectedDate(now(getLocalTimeZone()));
    }
  }, []);

  // Save all data (cart and entrega) to sessionStorage whenever it changes
  useEffect(() => {
    const orderData = {
      cart,
      selectedLugar,
      precioEntrega,
      selectedDate: selectedDate ? selectedDate.toString() : null,
      nota,
    };
    console.log("Saving orderData to sessionStorage:", orderData);
    sessionStorage.setItem("orderData", JSON.stringify(orderData));
  }, [cart, selectedLugar, precioEntrega, selectedDate, nota]);


  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      const newCart = itemExists
        ? prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  cantidad: cartItem.cantidad + item.cantidad,
                  // No sumes el precio aquí
                }
              : cartItem
          )
        : [...prevCart, item];
      console.log("Adding item to cart:", item);
      toast.success(
        `${item.cantidad} ${item.nombre} han sido añadidos al carrito`
      );
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
      toast.info(`Cantidad actualizada a ${cantidad} para ${id}`);
      console.log("Updating quantity in cart:", { id, cantidad });
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const filteredCart = prevCart.filter((item) => item.id !== id);
      toast.error(`${id} ha sido eliminado del carrito`);
      console.log("Removing item from cart:", id);
      console.log("Updated cart:", filteredCart);
      return filteredCart;
    });
  };

  const cartTotalPrice = cart.reduce((total, item) => {
    // Aquí simplemente sumamos el precio total de cada ítem, ya que `precio` ya incluye la cantidad.
    return total + item.precio;
  }, 0);

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
        nota,
        setNota,
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
