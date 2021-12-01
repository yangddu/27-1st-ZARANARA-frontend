import React from 'react';

const UserImformation = props => {
  return (
    <div className={props.className}>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default UserImformation;
