import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Router;
