import React from "react";
import styled from 'styled-components';
import NavBotonera from "./NavBotonera";



export default function Nav1()
{

const ContenedorNav1 = styled.div`
@media(min-width: 800px)
{
    display: none;
}
`;


    return (
        <ContenedorNav1>
            <NavBotonera />
        </ContenedorNav1>
    )
}