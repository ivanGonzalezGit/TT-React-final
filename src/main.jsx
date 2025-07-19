import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './components/GlobalStyle';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <Router>
          <GlobalStyle />
            <App />
        </Router>    
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
