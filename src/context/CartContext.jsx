import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
 const [cart, setCart] = useState([]);

 const addCart = (product) => {
 setCart([...cart, product]);
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
