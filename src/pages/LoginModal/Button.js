import React from 'react';
import './Button.scss';

function Button({ title, handleClick }) {
  return (
    <button className="Button" type="button" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
