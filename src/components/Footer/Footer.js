import React from 'react';
import { ASIDE_DATA, FOOTER_IMG } from './FooterData';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="asideWrap">
          <div className="asideArea">
            {ASIDE_DATA.map(el => {
              return (
                <div className="asideBox" key={el.id}>
                  <h3 className="asideTitle">{el.title}</h3>
                  {el.content?.map(content => (
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
              {FOOTER_IMG.map(el => (
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
