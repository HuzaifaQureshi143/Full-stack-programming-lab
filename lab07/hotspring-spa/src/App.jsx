import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="account" element={<Auth />} />
          <Route path="login" element={<Auth />} />
          <Route path="register" element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
