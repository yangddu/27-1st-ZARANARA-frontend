import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import JoinModal from './pages/JoinModal/JoinModal';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/join" element={<JoinModal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
