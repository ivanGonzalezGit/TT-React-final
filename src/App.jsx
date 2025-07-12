import { useState } from 'react';
import Header from './components/Header';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

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

  return (
    <MainContiner>
      <Header />
      <Nav1 /> 
      <Nav2 />
    </MainContiner>
  )
}

export default App