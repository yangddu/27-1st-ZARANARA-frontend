import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import JoinModal from './pages/JoinModal/JoinModal';
import LoginModal from './pages/LoginModal/LoginModal';

const Router = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/loginmodal" element={<LoginModal />} />
      <Route path="/join" element={<JoinModal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
