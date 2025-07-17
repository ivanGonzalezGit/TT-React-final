import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
 const [cart, setCart] = useState([]);

const addCart = (product) => {
  setCart(prev => {
    if (!prev.find(p => p.id === product.id)) {
      return [...prev, product];
    }
    return prev;
  });
};

 const emptyCart = () => {
 setCart([]);
 };

 return (
 <CartContext.Provider value={{ cart, addCart, emptyCart }}>
    {children}
 </CartContext.Provider>
 );
}
