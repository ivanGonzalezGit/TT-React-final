import React from "react";
import styled from 'styled-components';
import { BsList } from "react-icons/bs";
import { PiMagnifyingGlass } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import NavBotonera from "./NavBotonera";

export default function Nav2()
{
const ContenedorNav = styled.div`
    display: flex;
    flex-direction: row;
    background: red;
`;

const Titulo = styled.h1`
    color: yellow
`;

    return (
        <ContenedorNav>
            <NavBotonera direction='column'/>
            <div><LiaHomeSolid size={24} color='#F5ABB0' /></div>
            <div><PiMagnifyingGlass size={24} color='#F5ABB0' /></div>
            <div><BsList size={24} color='#F5ABB0' /></div>
        </ContenedorNav>
    )
}
