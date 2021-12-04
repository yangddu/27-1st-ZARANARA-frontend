import React, { useState } from 'react';
import './ProductList.scss';

function ProductList() {
  return (
    <div className="jb-wrap">
      <img className="jb-image" alt="kidtop" src="img/velvet.jpg" />
      <div className="jb-text">
        <p>장바구니에 담기</p>
      </div>

      <div className="productInfo">
        <div className="productName">
          <span>리버서블 벨벳 차렵이불</span>
        </div>
        <div className="price">
          <span>190,000원</span>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
