import React, { useState } from 'react';
import Header from '../components/Header';
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Producto from './vistAgregarCarrito';
import Cart from './Cart';



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

export default function Home()
{

   const productos = [
 { id: 1, nombre: 'Producto 1', precio: 100 },
 { id: 2, nombre: 'Producto 2', precio: 200 },
 { id: 3, nombre: 'Producto 3', precio: 300 },
 ];

  return (
    <MainContiner>
        <Header />
        <Nav1 />
         <div>
            <h1>Tienda Online</h1>
            <div style={{ display: 'flex', 
                          justifyContent:'space-between' }}>
              <div>
                <h2>Productos</h2>
                {productos.map((producto) => (<Producto key={producto.id} producto={producto} />))}
              </div>
            </div>
          </div>
        <Footer />
        <Nav2 />
    </MainContiner>
  )
}