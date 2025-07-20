import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav2 from '../components/Nav2';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormularioProducto from '../components/FormularioProducto';
import NavBoton from '../components/NavBoton';



const MainContiner = styled.div`
  :root {
    fonti-size: 16px;
  }

  * {
    margin: auto;
    padding: 0;
    font-family: roboto, sans-serif;
  }
  
  display: flex;
  flex-direction: column;
`;

export default function Admin() {

  const estilo = {
      color: '#F5ABB0',
      background: '#62162F',
      border: 'none',
      width: '12.5rem'
  };

const agregarProducto = async (producto) => {
 try {const respuesta = await
    fetch(`https://686a90e8e559eba9087056bc.mockapi.io/api/product/`, {
    method: 'POST',
    headers: {
                'Content-Type': 'application/json',
            },
    body: JSON.stringify(producto),
    });
 
    if (!respuesta.ok) {
        throw new Error('Error al agregar el producto.');
    }
 
    const data = await respuesta.json();
    console.log('Producto agregado:', data);
    alert('Producto agregado correctamente');
    } catch (error) {
        console.error(error.message);
        alert('Hubo un problema al agregar el producto.');
    }
};

  return (
    <MainContiner>
      <Header />
      <div style={{display: 'flex', flexDirection:'column', padding: '6rem'}}>
        <FormularioProducto onAgregar={agregarProducto} />
        <Link to={'/edit'}>
          <NavBoton cont={'Editar Producto'} estilo={estilo} />
        </Link>

        <Link to={'/delete'}>
          <NavBoton cont={'Eliminar Producto'} estilo={estilo} />        
        </Link>


      </div>
      <Footer />
      <Nav2 />
    </MainContiner>
  );
}
