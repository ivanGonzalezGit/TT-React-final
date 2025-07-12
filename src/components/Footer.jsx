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


export default function Header()
{

    return (
        <ContenedorHeader>
            <Logo src="./images/logoTodoBaratitoColor.svg" alt="logo">
            
            </Logo>
            <Titulo>
                Footer
            </Titulo>

        </ContenedorHeader>    
    )
}