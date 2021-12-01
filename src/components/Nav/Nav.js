import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="header">
      <div className="navLeftContainer">
        <div className="gnbMenuWrap">
          <img
            className="menuBar"
            src="/images/icon/hamberger.svg"
            alt="hamburgerMenuBar"
          />
          <img className="logo" src="/images/icon/logo1.svg" alt="logo" />
          <ul className="gnbMenuBar">
            <li className="gnbMenuLi">신상품</li>
            <li className="gnbMenuLi">인기상품</li>
            <li className="gnbMenuLi">크리스마스</li>
            <li className="gnbMenuLi">의류</li>
            <li className="gnbMenuLi">가구 데코 침실</li>
            <li className="gnbMenuLi">맘마</li>
            <li className="gnbMenuLi">욕실</li>
            <li className="gnbMenuLi">선물 아이디어</li>
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
    </header>
  );
};

export default Nav;
