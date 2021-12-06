import React from 'react';
import './Button.scss';

function Button({ title, handleClick, format, handleJoinClick }) {
  return (
    <button
      className={`button ${format ? format : ''}`}
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
