import React from 'react';
import './JoinModal.scss';

function JoinModal() {
  return (
    <div className="zarnaraCreateContainer">
      <div className="zaranaraCreateAccount">
        <div className="createAccountContainer">
          <span>자라홈 계정 만들기</span>
        </div>
        <div className="choiceKindOfAccount">
          <div className="common">
            <input type="radio" name="checked" value="개인" />
            <span>개인</span>
          </div>
          <div className="company">
            <input type="radio" name="checked" value="회사" />
            <span>회사</span>
          </div>
        </div>
        <div className="userPrivacyInput">
          <div className="userName">
            <input className="name" type="text" placeholder="이름*" />
          </div>
          <div className="userEmail">
            <input className="email" type="text" placeholder="이메일*" />
          </div>
          <div className="userPassword">
            <input className="password" type="text" placeholder="비밀번호*" />
          </div>
        </div>

        <form className="userPrivacyCheckBox">
          <div className="checkContainer">
            <input type="checkbox" name="동의" value="동의" checked />
            <span>모두동의</span>
          </div>
          <div className="checkPrivacy">
            <input type="checkbox" name="동의" value="동의" checked />
            <span>* 개인정보의 수집 및 이용에 대한 동의.</span>
          </div>
          <div className="checkAboard">
            <input type="checkbox" name="동의" value="동의" checked />
            <span>*개인정보의 국외 이전에 대한 동의.</span>
          </div>
          <div className="checkSubscribe">
            <input type="checkbox" name="동의" value="동의" checked />
            <span>
              뉴스레터 구독을 위한 개인정보의 수집 및 이용에 대한 동의.
            </span>
          </div>

          <div className="createAccount">
            <button>계정 만들기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinModal;
