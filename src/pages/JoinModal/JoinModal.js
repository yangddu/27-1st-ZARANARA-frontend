import React, { useState } from 'react';
import Button from '../LoginModal/Button';
import './JoinModal.scss';
import { useNavigate } from 'react-router-dom';
import Userinput from '../LoginModal/Userinput';

function JoinModal({ handleJoinClick }) {
  const [userInput, setUserInput] = useState('');
  const [isJoinModal, setIsJoinModal] = useState(false);

  const handleInput = e => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  const goMain = () => {
    fetch('http://10.58.3.154:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: userInput,
        email: userInput,
        password: userInput,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if ('SUCCESS' === data.MESSAGE) {
          console.log(data);
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
