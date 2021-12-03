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

// function Userinput({ handleInput }) {
//   return (
//     <div className="userImformationContainer">
//       <input
//         className="usermail"
//         type="text"
//         name="usermail"
//         placeholder="*이메일"
//         onChange={handleInput}
//       >
//         <label for="usermail">*이메일</label>
//       </input>
//       <input
//         className="usermail"
//         type="text"
//         name="usermail"
//         placeholder="*패스워드"
//         onChange={handleInput}
//       >
//         <label for="usermail">*이메일</label>
//       </input>
//     </div>
//   );
// }

// export default Userinput;
