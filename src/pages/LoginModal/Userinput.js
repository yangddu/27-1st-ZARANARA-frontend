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
      <input
        className="inputmail"
        type="password"
        placeholder="*비밀번호"
        onChange={handleInput}
      />
    </div>
  );
}

export default Userinput;
