import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Registry from './views/Registry';
import Products from './views/Products';
import Cart from './views/Cart';
import Contact from './views/Contact';
import Admin from './views/Admin';
import RutaProtegida from './components/rutaProtegida';
import NotFound from './views/NotFound';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

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

        <Route path='/cart' element={
                                      <RutaProtegida isAuthenticated={isAuthenticated}>
                                        <Cart />
                                      </RutaProtegida>
                                    } />

        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </div>
  )
}

export default App