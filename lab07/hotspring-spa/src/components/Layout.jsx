import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import BrandsRow from './BrandsRow';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Navbar />
      
      <main className="main-content-area">
        <Outlet />
      </main>
      
      <BrandsRow />
      <Footer />
    </div>
  );
};

export default Layout;
