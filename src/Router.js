import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import ProductList from './pages/Product_list/productList/ProductList';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';

const Router = () => (
  <BrowserRouter>
    {/* <Nav /> */}
    <Routes>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Router;
