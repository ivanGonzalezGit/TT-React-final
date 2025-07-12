import React, { useState } from 'react';
import Header from '../components/Header';
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';


const MainContiner = styled.div`
  :root
  {
    fonti-size: 16px;
  }

  *{
  margin: 0;
  padding: 0;
  font-family: roboto, sans-serif;
  }
`;

export default function Products()
{

  const {id} = useParams();

  return (
    <MainContiner>
        <Header />
        <Nav1 />
        <h1>Producto id: {id}</h1>
        <Footer />
        <Nav2 />
    </MainContiner>
  )
}