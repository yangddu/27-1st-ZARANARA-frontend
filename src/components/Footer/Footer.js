import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="noticeArea">
          <div className="noticeTitle">공지사항</div>
        </div>
        <div className="asideWrap">
          <div className="asideArea">
            <div className="corpBox">
              <h3 className="corpTitle">Developers</h3>
              <a href="#">Team ZARANARA</a>
            </div>
            <div className="telBox">
              <h3 className="telTitle">Tel</h3>
              <a href="#">연락처</a>
              <a href="#">GUEST PURCHASE</a>
              <a href="#">매장찾기</a>
              <a href="#">010-2727-0505</a>
            </div>
          </div>
          <div className="snsArea">
            <div className="snsBox">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20837.png"
                alt="facebook"
              />
              <img
                src="https://cdn-icons.flaticon.com/png/512/717/premium/717392.png?token=exp=1638255524~hmac=b3666a81a2e3a185d78f4dbf3cc085b2"
                alt="instagram"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111496.png"
                alt="kakaoTalk"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
