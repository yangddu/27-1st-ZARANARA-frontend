import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_DATA } from './NavData';
import LoginModal from '../../pages/LoginModal/LoginModal';
import './Nav.scss';
import { useState } from 'react/cjs/react.development';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };
  // const closeModal = () => {
  //   setIsModalOpen(handleModal);
  // }

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
            {NAV_DATA.map(el => (
              <li key={el.id} className="gnbMenuLi">
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navCenterContainer">
        <div className="searchLink">
          <Link to="/">
            검색
            <span className="line" />
          </Link>
        </div>
      </div>
      <div className="navRightContainer">
        <div className="loginContainer">
          <div className="loginLink">
            <img
              className="loginIcon"
              src="/images/icon/profile.svg"
              alt="profile"
              onClick={handleModal}
            />
            <div className="loginTxt" onClick={handleModal}>
              로그인
            </div>
            {/* {isModalOpen && <LoginModal />} */}
          </div>
          <div className="cartLink">
            <img className="cartIcon" src="/images/icon/cart.svg" alt="cart" />
            <div className="carTxt">0</div>
          </div>
        </div>
      </div>
      {isModalOpen && <LoginModal />}
    </nav>
  );
};

export default Nav;
