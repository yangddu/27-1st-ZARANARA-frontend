import React from 'react';
import './Userinput.scss';

function Userinput({ handleInput, signup }) {
  return (
    <>
      {signup && (
        <div className="input-box">
          <input
            className="username"
            type="name"
            name="username"
            placeholder="*이름"
            onChange={handleInput}
          />
          <label for="username">*이름</label>
        </div>
      )}
      <div className="input-box">
        <input
          className="useremail"
          type="email"
          name="username"
          placeholder="아이디"
          onChange={handleInput}
        />
        <label for="useremail">*이메일</label>
      </div>
      <div className="input-box">
        <input
          className="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleInput}
        />
        <label for="password">*비밀번호</label>
      </div>
    </>
  );
}

export default Userinput;

// function Userinput({ handleInput, signup }) {
//   return (
//     <div className="userImformationContainer">
//       {signup && (
//         <input
//           className="inputmail"
//           type="name"
//           placeholder="*이름"
//           onChange={handleInput}
//         />
//       )}
//       <input
//         className="inputmail"
//         type="email"
//         placeholder="*이메일"
//         onChange={handleInput}
//       />

//       <input
//         className="inputmail"
//         type="password"
//         placeholder="*비밀번호"
//         onChange={handleInput}
//       />
//     </div>
//   );
// }
