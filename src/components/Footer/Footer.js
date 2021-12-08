import React from 'react';
import { ASIDE_DATA, FOOTER_IMG } from './FooterData';

import {
  RiKakaoTalkFill,
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
  RiTwitterFill,
  RiSpotifyFill,
} from 'react-icons/ri';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="asideArea">
          {ASIDE_DATA.map(el => {
            return (
              <div className="asideBox" key={el.id}>
                <h3 className="asideTitle">{el.title}</h3>
                {el.content?.map((content, idx) => (
                  <a className="asideContent" key={idx} href={content.href}>
                    {content.role}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
        <div className="snsArea">
          <span className="snsDesc">자라나라의 새로운 소식을 들어보세요</span>
          <ul className="snsBox">
            {FOOTER_IMG.map(el => (
              <li key={el.id}>{el.icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
