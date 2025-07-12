import React, { useState } from "react";
import styled from 'styled-components';
import { BsList } from "react-icons/bs";
import { PiMagnifyingGlass } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import NavBotonera from "./NavBotonera";

export default function Nav2()
{
    const [disp, setDisp] = useState('none');

    function pivotMenu()
    {
        if(disp==='none'){
            setDisp('flex');
        }else{
            setDisp('none');
        }
    }

    const ContenedorNav2 = styled.div`
    display: flex;
    flex-direction: column;
    background: red;

    @media (min-width: 361px) {
        display: none;
    }
    `;

    const NavBotoneraContainer = styled.div`
        display: ${disp};
    `;

    const Iconos = styled.div`
    display: flex;
    justify-content: space-around;
`;

    return (
        <ContenedorNav2>
            <NavBotoneraContainer display={disp}>
                <NavBotonera 
                    direction='column'
                    size='12.5rem'
                />                
            </NavBotoneraContainer>
        

            <Iconos>
                <LiaHomeSolid size={24} color='#F5ABB0' />
                <PiMagnifyingGlass size={24} color='#F5ABB0' />
                <BsList size={24} color='#F5ABB0' onClick={pivotMenu} />            
            </Iconos>
        </ContenedorNav2>
    )
}
