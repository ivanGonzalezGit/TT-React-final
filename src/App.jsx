import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './views/Home';
import Login from './views/Login';
import Registry from './views/Registry';
import Products from './views/products'
import Cart from './views/Cart';
import Contact from './views/Contact';
import Admin from './views/Admin';
import RutaProtegida from './components/rutaProtegida';
import NotFound from './views/NotFound';
import EditProduct from './views/EditProduct';
import DeleteProduct from './views/DeleteProduct';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={
                                      <RutaProtegida isAuthenticated={isAuthenticated}>
                                        <Admin />
                                      </RutaProtegida>
                                    } />
        <Route path='/registry' element={<Registry />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/edit' element={<EditProduct />} />
        <Route path='/delete' element={<DeleteProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </div>
  )
}

export default App