import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import LoginModal from '../../pages/LoginModal/LoginModal';
import JoinModal from '../../pages/JoinModal/JoinModal';
import { NAV_DATA } from './NavData';

import useScroll from './useScroll';
import { API } from '../../config';

import { IoIosMenu } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsCart3 } from 'react-icons/bs';
import { ReactComponent as Logo } from '../../assets/logo-white.svg';

import './Nav.scss';

const MOCK_API = '/data/cartMockData.json';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { pathname } = useLocation();
  const scrollY = useScroll();

  const navClassName = `nav ${pathname === '/' ? 'white' : ''}`;

  useEffect(() => {
    fetch(MOCK_API, {
      method: 'get',
      headers: {
        Authorization: 'Bearer token',
      },
    })
      .then(res => res.json())
      .then(result => setCartItems(result));
  }, []);

  const handleLoginModal = () => {
    setIsLogin(!isLogin);
  };

  const handleSignupModal = () => {
    setIsSignup(true);
    setIsLogin(false);
  };

  const handleJoinClick = () => {
    setIsSignup(false);
  };

  const handleLogoutClick = () => {
    console.log('handleLogOutClick');
    setIsUserLogin(false);
    localStorage.clear();
  };

  return (
    <>
      <nav className={`${navClassName} ${scrollY > 100 ? 'active' : ''}`}>
        <div className="navLeftContainer">
          <div className="gnbMenuWrap">
            <div className="gnbAndLogo">
              <IoIosMenu className="menuBarIcon" alt="메뉴버튼" />
              <Link to="/">
                <Logo className="zaranaraLogo" alt="자라나라 로고" />
              </Link>
            </div>
            <ul className="gnbMenuBar">
              {NAV_DATA.map(el => (
                <li key={el.id} className="gnbMenuLi">
                  <Link to="">{el.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navCenterContainer">
          <div className="searchLink">
            <Link to="/search">
              검색
              <span className="line" />
            </Link>
          </div>
        </div>
        <div className="navRightContainer">
          <div className="loginContainer">
            <div className="loginLink">
              <CgProfile
                className="loginIcon"
                alt="profile"
                onClick={isUserLogin ? handleLogoutClick : handleLoginModal}
              />
              <div
                className="loginTxt"
                onClick={isUserLogin ? handleLogoutClick : handleLoginModal}
              >
                {isUserLogin ? '로그아웃' : '로그인'}
              </div>
            </div>
            <div className="cartLink">
              <BsCart3 className="cartIcon" alt="cart" />
              <div className="carTxt">{cartItems.length}</div>
            </div>
          </div>
        </div>
      </nav>
      {isLogin && (
        <LoginModal
          handleSignupModal={handleSignupModal}
          handleLoginModal={handleLoginModal}
          setIsUserLogin={setIsUserLogin}
        />
      )}
      {isSignup && (
        <JoinModal
          handleJoinClick={handleJoinClick}
          setIsSignup={setIsSignup}
        />
      )}
    </>
  );
};

export default Nav;
