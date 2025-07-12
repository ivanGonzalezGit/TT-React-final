import React, {useState} from "react";
import styled from 'styled-components';
import { PiShoppingCartSimple } from "react-icons/pi";

const ContenedorHeader = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

`;

const Logo = styled.img`
    width: 6.25rem;
    height: 6.25rem;
`;

const Titulo = styled.h1`
    margin: auto;
    background: red;
    font-family: josefin-sanz, sans-serif;
`


function Header()
{
    const [contadorCarrito, setContadorCarrito] = useState(0);
    return (
        <ContenedorHeader>
            <Logo src="./images/logoTodoBaratitoColor.svg" alt="logo">
            
            </Logo>
            <Titulo>
                Todo Baratito
            </Titulo>
            <div>
                <div>{contadorCarrito}</div>
                <PiShoppingCartSimple size={24} color='#F5ABB0' />
            </div>
        </ContenedorHeader>    )

}

export default Header;