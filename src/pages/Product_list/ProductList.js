import React, { useState } from 'react';
import './ProductList.scss';

// function ProductList() {
//   return (
//     <div className="galleylist">
//       <ul>
//         <li>
//           <a href="">
//             <div className="screen">
//               <div className="top">벨벳 크리오스 이불세트</div>
//               <div className="botton">
//                 <div className="bottonlist">
//                   <span>장바구니에 담기</span>
//                 </div>
//               </div>
//               <img src="img/velvet.jpg" alt="velvet" />
//             </div>
//             <div>
//               <h3>벨벳 크리오스 이불세트</h3>
//               <h3>119,000 원</h3>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default ProductList;

function ProductList() {
  return (
    <div className="galleylist">
      <ul>
        <li>
          <a href="">
            <div className="screen">
              <div className="top">벨벳 크리오스 이불세트</div>
              <div className="botton">
                <div className="bottonlist">
                  <span>장바구니에 담기</span>
                </div>
              </div>
              <img src="img/velvet.jpg" alt="velvet" />
            </div>
            <div className="productinfo">
              <h3>벨벳 크리오스 이불세트</h3>
              <h3>119,000 원</h3>
            </div>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">
            <div className="screen">
              <div className="top">벨벳 크리오스 이불세트</div>
              <div className="botton">
                <div className="bottonlist">
                  <span>장바구니에 담기</span>
                </div>
              </div>
              <img src="img/velvet.jpg" alt="velvet" />
            </div>
            <div className="productinfo">
              <h3>벨벳 크리오스 이불세트</h3>
              <h3>119,000 원</h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
