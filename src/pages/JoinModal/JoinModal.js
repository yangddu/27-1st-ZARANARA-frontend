import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../LoginModal/Button';
import Userinput from '../LoginModal/Userinput';
import { BASE_URL } from '../../config';
import './JoinModal.scss';

function JoinModal({ handleJoinClick }) {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    // const newInput = { ...userInput, [name]: value };
    // setUserInput(newInput);
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  console.log(userInput);

  const goMain = () => {
    const { name, email, password } = userInput;

    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
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
        }
      });
  };

  return (
    <div className="zarnaraCreateContainer">
      <div className="zaranaraCreateAccount">
        <div className="createAccountContainer">
          <span>자라홈 계정 만들기</span>
        </div>
        <div className="choiceKindOfAccount" />
        <Userinput signup handleInput={handleInput} />

        <form className="userPrivacyCheckBox">
          <div className="checkContainer">
            <input type="checkbox" name="agree" value="box1" />
            <span>모두동의</span>
          </div>
          <div className="checkPrivacy">
            <input type="checkbox" name="agree" value="box2" />
            <span>* 개인정보의 수집 및 이용에 대한 동의.</span>
          </div>
          <div className="checkAboard">
            <input type="checkbox" name="agree" value="box3" />
            <span>*개인정보의 국외 이전에 대한 동의.</span>
          </div>
          <div className="checkSubscribe">
            <input type="checkbox" name="agree" value="box4" />
            <span>
              뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의.
            </span>
          </div>

          <Button title="계정만들기" format="signup" handleClick={goMain} />
        </form>
      </div>
    </div>
  );
}

export default JoinModal;
