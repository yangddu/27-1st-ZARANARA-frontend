import React, { useState } from 'react';
import './ProductList.scss';

// function ProductList() {
//   return (
//     <>
//       <div className="galleylist">
//         <ul>
//           <li>
//             <a href="">
//               <div className="screen">
//                 {/* <div className="top">벨벳 크리오스 이불세트</div> */}
//                 <div className="botton">
//                   <div className="bottonlist">
//                     <span>장바구니에 담기</span>
//                   </div>
//                 </div>
//                 <img src="img/velvet.jpg" alt="velvet" />
//               </div>
//               <div className="productinfo">
//                 <div className="productName">
//                   <h3>상품명</h3>
//                 </div>
//                 <div className="productPrice">
//                   <h3>가격정보</h3>
//                 </div>
//               </div>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default ProductList;

function ProductList() {
  return (
    <>
      <div className="galleylist">
        <ul>
          <li>
            <a href="">
              <div className="screen">
                {/* <div className="top">벨벳 크리오스 이불세트</div> */}
                <div className="botton">
                  <div className="bottonlist">
                    <span>장바구니에 담기</span>
                  </div>
                </div>
                <img src="img/velvet.jpg" alt="velvet" />
              </div>
              <div className="productinfo">
                <div className="productName">
                  <h3>상품명</h3>
                </div>
                <div className="productPrice">
                  <h3>가격정보</h3>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductList;
