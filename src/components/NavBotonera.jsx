import React from "react";
import styled from "styled-components";
import NavBoton from "./NavBoton";
import { Link } from "react-router-dom";


export default function NavBotonera({ direction, size}) {
    const NavBotonera=styled.div`
        display:${direction};
        justify-content: end;
    `;
    
    const estilo = {
        color: 'white',
        background: 'red',
        borderRadius: '3px',
        width: size
    };

    return (
        <NavBotonera direction={direction} size={size}>
            <Link to={'/'}>
                <NavBoton cont='Home' estilo={estilo} />
            </Link>
            
            <Link to={'/login'}>
                <NavBoton cont='Login' estilo={estilo} />
            </Link>

            <Link to={'/Cart'}>
                <NavBoton cont='Carrito' estilo={estilo} />
            </Link>
            
            <Link to={'/contact'}>
                <NavBoton cont='Contacto' estilo={estilo} />
            </Link>
        </NavBotonera>
    );
}