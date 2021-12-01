import React from 'react';
import './LoginModal.scss';
import Input from './Input';

function LoginModal() {
  return (
    <div className="loginAndjoin">
      <div className="login">
        <div className="loginContainer">
          <span>로그인</span>
          <div className="loginInfo">
            <span className="loginKoInfo">
              신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
            </span>
            <div className="loginEnInfoGuide">
              <span className="loginEnInfoComment">
                Can’t find your order? You might have purchased as a guest.
                Click and we’ll tell you how to find it.
              </span>
            </div>
          </div>
          <form className="userIdPw">
            <Input className="inputEmail" type="email" placholder="이메일" />
            <Input className="inputEmail" type="email" placholder="이메일" />
            <div className="showPassword">
              <span className="findPassword">비밀번호를 잊으셨습니까?</span>
            </div>
            <div className="loginButtonWrapper">
              <div className="loginButton">
                <button>로그인</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="join">
        <h2>회원가입</h2>
        <div className="joinButton">
          <button className="createAccount">계정 만들기</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
