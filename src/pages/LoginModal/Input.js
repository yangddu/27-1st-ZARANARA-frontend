import React from 'react';

const Input = props => {
  console.log(props);
  return (
    <div className={props.className}>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
