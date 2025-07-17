import React, {useState} from "react";
import styled from 'styled-components';
import { PiShoppingCartSimple } from "react-icons/pi";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

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
    const { cart } = useContext(CartContext);

    return (
        <ContenedorHeader>
            <Logo src="./images/logoTodoBaratitoColor.svg" alt="logo">
            
            </Logo>
            <Titulo>
                Todo Baratito
            </Titulo>
            <div>
                <div>{cart.length}</div>
                <PiShoppingCartSimple size={24} color='#F5ABB0' />
            </div>
        </ContenedorHeader>    
    )
}