import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  // const [isOpen, setMenu] = useState(false);

  // const toggleMenu = () => {
  //   setMenu(isOpen => !isOpen);
  // };

  return (
    <header className="header">
      <div className="navLeftContainer">
        <img
          className="menuBar"
          src="/images/nav/hamburgerMenu.png"
          alt="hamburgerMenuBar"
        />
        <h1>
          ZARANARA
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
        </h1>
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
            <img src="/images/nav/user.png" alt="user" />
            로그인
          </div>
          <div className="cartLink">
            <img src="/images/nav/user.png" alt="user" />0
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
