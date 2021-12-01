import React, { useState } from 'react';
import { navData } from './NavData';

import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navLeftContainer">
        <div className="gnbMenuWrap">
          <img
            className="menuBar"
            src="/images/icon/hamberger.svg"
            alt="hamburgerMenuBar"
          />
          <img className="logo" src="/images/icon/logo1.svg" alt="logo" />
          <ul className="gnbMenuBar">
            {navData.map(el => (
              <li className="gnbMenuLi">{el.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navCenterContainer">
        <div className="searchLink">
          <a href="#">
            검색
            <span className="line" />
          </a>
        </div>
      </div>
      <div className="navRightContainer">
        <div className="loginContainer">
          <div className="loginLink">
            <img
              className="loginIcon"
              src="/images/icon/profile.svg"
              alt="profile"
            />
            <div className="loginTxt">로그인</div>
          </div>
          <div className="cartLink">
            <img className="cartIcon" src="/images/icon/cart.svg" alt="cart" />
            <div className="carTxt">0</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
