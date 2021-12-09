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
import NavCartItem from '../Cart/CartItem/NavCartItem';

const MOCK_API = '/data/cartMockData.json';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { pathname } = useLocation();
  const scrollY = useScroll();

  const navClassName = `nav ${pathname === '/' ? 'white' : ''}`;

  // 백엔드용
  // useEffect(() => {
  //   fetch(`${API.USER}/cart`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => setCartItems(result));
  // }, []);

  // // mockdata 용
  useEffect(() => {
    fetch(MOCK_API)
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
              <aside className="cartPreView">
                <div className="content">
                  <span className="productCountText">
                    {cartItems.length} 제품
                  </span>
                  <ul className="cartItems">
                    {cartItems.map(item => (
                      <NavCartItem key={item.cart_id} itemInfo={item} />
                    ))}
                  </ul>
                </div>
                <div className="buttonWrapper">
                  <Link to="/cart" className="goToCartButton">
                    장바구니 가기
                  </Link>
                </div>
              </aside>
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
