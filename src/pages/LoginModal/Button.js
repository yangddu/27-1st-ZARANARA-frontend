import React from 'react';
import './Button.scss';
import Userinput from './Userinput';

function Button({ title, handleClick }) {
  return (
    <button className="loginButton" type="button" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
