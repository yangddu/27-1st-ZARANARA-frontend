import React, { useState } from 'react';
import UserImformation from './UserImformation';
import { useNavigate } from 'react-router-dom';
import Userinput from './Userinput';
import Button from './Button';
import './LoginModal.scss';

function LoginModal({ handleSignupModal, handleLoginModal }) {
  const [inputUserEmail, setInputUserEmail] = useState('');
  const [inputUserPassword, setInputUserPassword] = useState('');

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  console.log(userInput);

  const goMain = () => {
    const { email, password } = userInput;

    fetch('http://10.58.4.145:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if ('SUCCESS' === data.MESSAGE) {
          alert(data.SUCCESS);
          navigate('/');
          handleLoginModal(false);
        }
      });
  };

  return (
    <div className="loginModal">
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
            <Userinput handleInput={handleInput} />
            <div className="showPassword">
              <span className="findPassword">비밀번호를 잊으셨습니까?</span>
            </div>
            <Button title="로그인" format="midium" handleClick={goMain} />
          </form>
        </div>
      </div>
      <div className="join">
        <h2>회원가입</h2>
        <Button
          title="계정 만들기"
          handleClick={handleSignupModal}
          format="small"
        />
      </div>
    </div>
  );
}

export default LoginModal;
