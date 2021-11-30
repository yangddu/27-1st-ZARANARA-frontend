import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="header">
      <div className="navLeftContainer">
        <img
          className="menuBar"
          src="/images/nav/hamburgerMenu.png"
          alt="hamburgerMenuBar"
        />
        <h1>ZARANARA</h1>
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
