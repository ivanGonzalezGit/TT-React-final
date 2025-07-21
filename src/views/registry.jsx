import React, { useState } from 'react'; 
import { Navigate, useNavigate } from 'react-router-dom'; 
import Header from '../components/Header';
import Nav2 from '../components/Nav2';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBoton from "../components/NavBoton";


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


export default function Registry()
{
  const navigate = useNavigate();

  const estilo = {
    color: 'white',
    background: 'red',
    borderRadius: '3px',
    width: '12.5rem'
  };

  const [user, setUser] = useState({ 
    name: '', 
    pass: '', 
  }); 

  const handleChange = (e) => { 
  const { name, value } = e.target; 
  setUser({ ...user, [name]: value }); 
  }; 

const handleSubmit = async (e) => { 
  e.preventDefault(); 

  try {
    const res = await fetch('https://686a90e8e559eba9087056bc.mockapi.io/api/admin');
    const usuarios = await res.json();

    const existeUsuario = usuarios.some(u => u.name === user.name);

    if (existeUsuario) {
      alert('El nombre de usuario ya está registrado. Elegí otro.');
      return; 
    }

    const response = await fetch('https://686a90e8e559eba9087056bc.mockapi.io/api/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (!response.ok) throw new Error('Error al registrar usuario');

    const data = await response.json();
    console.log('Usuario registrado:', data);

    setUser({ name: '', pass: '' });
    alert('Usuario registrado exitosamente');
    navigate('/login');
    
  } catch (error) {
    console.error(error);
    alert('Ocurrió un error al registrar el usuario');
  }
};


  return (
    <MainContiner>
        <Header />

        <form onSubmit={handleSubmit}> 
          <h2>Registro de Administrador</h2> 

          <div> 
            <label>Usuario:</label> 
            <input 
              type="text" 
              name='name'
              value={user.name} 
              onChange={handleChange} 
              required
            /> 
          </div> 

          <div> 
            <label>Contraseña:</label> 
            <input 
              type="password"
              name='pass' 
              value={user.pass} 
              onChange={handleChange} 
              required
            /> 
          </div> 

          <NavBoton type="submit" cont='Registrar Usuario' estilo={estilo} />
        </form>

        <Footer />
        <Nav2 />
    </MainContiner>
  )
}