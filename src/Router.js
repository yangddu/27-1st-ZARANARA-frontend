import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail/Detail';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/detail" element={<Detail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
