import React from "react";
import styled from "styled-components";
import NavBoton from "./NavBoton";


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
            <NavBoton cont='Login' estilo={estilo} />
            <NavBoton cont='Registrarse' estilo={estilo} />
            <NavBoton cont='Carrito' estilo={estilo} />
            <NavBoton cont='Productos' estilo={estilo} />
            <NavBoton cont='Contacto' estilo={estilo} />
        </NavBotonera>
    );
}