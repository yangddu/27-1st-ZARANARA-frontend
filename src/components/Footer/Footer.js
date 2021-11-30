import React from 'react';
import { asideData, FooterImg } from './FooterData';

import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="asideWrap">
          <div className="asideArea">
            {asideData.map(el => {
              return (
                <div className="asideBox" key={el.id}>
                  <h3 className="asideTitle">{el.title}</h3>
                  {el.content &&
                    el.content.map(content => (
                      <a className="asideContent" href="#">
                        {content}
                      </a>
                    ))}
                </div>
              );
            })}
          </div>

          <div className="snsArea">
            <div className="snsBox">
              {FooterImg.map(el => (
                <img key={el.id} src={el.src} alt={el.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
