import React from "react";
import NavBoton from "./NavBoton";
import styled from "styled-components";


export default function NavBotonera(direction)
{
    const NavBotonera = styled.div`
        display: flex;
        flex-direction: ${direction};
    `;

    const estilo = {
        color: 'white',
        background: 'red',
        borderRadius: '3px',
        width: '12.5rem'
    }

    return (
        <NavBotonera>
            <NavBoton cont='Login' estilo={estilo}/>
            <NavBoton cont='Registrarse' estilo={estilo}/>
            <NavBoton cont='Carrito' estilo={estilo}/>
            <NavBoton cont='Productos' estilo={estilo}/>
            <NavBoton cont='Contacto' estilo={estilo}/>
        </NavBotonera>
    )
}