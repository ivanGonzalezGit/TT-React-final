import { useState } from 'react';
//import './App.css';
import Header from './components/Header';
import Nav1 from './components/nav1';
import Nav2 from './components/Nav2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="mainContiner">
      <Header />
      <Nav1 /> 
      <Nav2 />
    </div>
  )
}

export default App