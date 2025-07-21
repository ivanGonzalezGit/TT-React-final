import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useAuthContext } from '../context/AuthContext'; 
import Header from '../components/Header';
import Nav2 from '../components/Nav2';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
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

export default function Login()
{

  const [usuario, setUsuario] = useState(''); 
  const [password, setPassword] = useState(''); 
  const { login } = useAuthContext(); 
  const navigate = useNavigate(); 
 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('https://686a90e8e559eba9087056bc.mockapi.io/api/admin');
    const usuarios = await res.json();

    const existeUsuario = usuarios.some(u => u.name === usuario && u.pass === password);

    if (!existeUsuario) {
      alert('Usuario o contraseña incorrectos');
      navigate('/registry');
      return;
    }

    localStorage.setItem('usuario', usuario);

    login(usuario);

    navigate('/admin');

  } catch (error) {
    console.error('Error al iniciar sesión:', error); 
  }
};

  const estilo = {
      color: 'white',
      background: 'red',
      borderRadius: '3px',
      width: '12.5rem'
  };

  return (
    <MainContiner>
        <Header />
        <h1>Login</h1>

        <form onSubmit={handleSubmit}> 
          <h2>Iniciar sesión</h2> 
          <div> 
            <label>Usuario:</label> 
            <input 
              type="text" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
            /> 
          </div> 
          <div> 
            <label>Contraseña:</label> 
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            /> 
          </div> 

          <NavBoton type="submit" cont='Iniciar Sesión' estilo={estilo} />
        </form>
        <Link to={'/registry'}>
          <NavBoton cont='Registro' estilo={estilo} />
        </Link>
        <Footer />
        <Nav2 />
    </MainContiner>
  )
}