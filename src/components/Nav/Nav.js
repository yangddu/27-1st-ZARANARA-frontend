import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../../pages/LoginModal/LoginModal';
import JoinModal from '../../pages/JoinModal/JoinModal';
import { NAV_DATA } from './NavData';
import './Nav.scss';

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false); // 로그인 했는지 안했는지 상태 여부 확인 (안함)
  console.log('isUserLogin', isUserLogin);

  const handleLoginModal = () => {
    console.log('handleLoginModal');
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
              <img
                className="cartIcon"
                src="/images/icon/cart.svg"
                alt="cart"
              />
              <div className="carTxt">0</div>
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
