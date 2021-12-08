import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_DATA } from './NavData';
import { API } from '../../config';
import useScroll from './useScroll';

import { IoIosMenu } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsCart3 } from 'react-icons/bs';
import { ReactComponent as Logo } from '../../assets/logo-white.svg';

import './Nav.scss';

const MOCK_API = '/data/cartMockData.json';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
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
            <CgProfile className="loginIcon" alt="profile" />
            <div className="loginTxt">로그인</div>
          </div>
          <div className="cartLink">
            <BsCart3 className="cartIcon" alt="cart" />
            <div className="carTxt">{cartItems.length}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
