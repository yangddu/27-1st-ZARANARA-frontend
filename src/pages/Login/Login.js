import React { useState } from 'react';
import './Login.scss';

function Login() {
  const [loginModal, setloginModal] = useState(false);
  const [userEmail, setuserEmail] = useState('');

  const isModalOpen = e => {
    if (setloginModal === false) {
      setloginModal(true);
    }
    if (setloginModal === true) {
      setloginModal(false);
    }
  };

  const handleEmail = e => {
    setuserEmail(e.target.value);
  };

  return (
    <div className="loginEmail">
      <button onClick={isModalOpen}>로그인</button>
    </div>
  );
}

export default Login;
