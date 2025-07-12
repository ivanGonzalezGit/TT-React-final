import React from "react";
import styled from 'styled-components';
import NavBotonera from "./NavBotonera";


export default function Nav1()
{

const ContenedorNav1 = styled.div`
@media(max-width: 360px)
{
    display: none;
}
`;

    return (
        <ContenedorNav1>
            <NavBotonera direction={'row'} size='5rem'/>
        </ContenedorNav1>
    )
}