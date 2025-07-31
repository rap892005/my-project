import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Checkout from "./components/Checkout";
import CartContextProvider from './contexts/cartContext'; // import CartContextProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>  {/* Wrap the App component here */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
