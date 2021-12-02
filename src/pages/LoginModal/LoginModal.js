import React, { useState } from 'react';
import UserImformation from './UserImformation';
import Userinput from './Userinput';
import Button from './Button';
import './LoginModal.scss';

function LoginModal() {
  const [inputUserEmail, setInputUserEmail] = useState('');
  const [inputUserPassword, setInputUserPassword] = useState('');

  const handleEmailInput = e => {
    setInputUserEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="loginAndjoin">
      <div className="login">
        <div className="loginContainer">
          <h2>로그인</h2>
          <div className="loginInfo">
            <span className="loginKoInfo">
              신속한 결제 진행을 위해 필요한 정보를 요청할 수 있습니다.
            </span>
            <div className="loginEnInfoGuide">
              <span className="loginEnInfoComment">
                We will ask you for the information we need to speed up the
                purchase process.
              </span>
            </div>
          </div>
          <form className="userIdPw">
            <Userinput onChange={handleEmailInput} />
            <div className="showPassword">
              <span className="findPassword">비밀번호를 잊으셨습니까?</span>
            </div>
            <Button />
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
