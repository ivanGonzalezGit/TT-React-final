import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import Nav2 from '../components/Nav2';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';


const MainContiner = styled.div`
  :root
  {
    fonti-size: 16px;
  }

  *{
  margin: 0;
  padding: 0;
  font-family: roboto, sans-serif;
  }
`;


export default function Cart() {
 const { cart, emptyCart } = useContext(CartContext);
 return (

    <MainContiner>
        <Header />
            <div>
              <h1>Carrito de Compras</h1>
              {cart.length > 0 ? (
                <ul>{cart.map((product, index)=>(<li key={index}>{product.nombre} - ${product.precio}</li>))}</ul>) : 
                (<p>El carrito está vacío.</p>)}
              {cart.length > 0 && <button onClick={emptyCart}>Vaciar Carrito</button>}
            </div>
        <Footer />
        <Nav2 />
    </MainContiner>
 );
}