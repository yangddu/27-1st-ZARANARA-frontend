import React from 'react';
import './Userinput.scss';

function Userinput({ handleInput, signup }) {
  return (
    <div className="userImformationContainer">
      {signup && (
        <input
          className="inputmail"
          type="name"
          placeholder="*이름"
          onChange={handleInput}
        />
      )}
      <input
        className="inputmail"
        type="email"
        placeholder="*이메일"
        onChange={handleInput}
      />
      <label for="inputmail">*이메일</label>
      <input
        className="inputmail"
        type="password"
        placeholder="*비밀번호"
        onChange={handleInput}
      />
      <label for="inputmail">*이메일</label>
    </div>
  );
}

export default Userinput;
