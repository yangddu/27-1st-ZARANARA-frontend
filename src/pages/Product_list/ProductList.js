import React, { useState } from 'react';
import './ProductList.scss';

function ProductList() {
  return (
    <div className="galleylist">
      <ul>
        <li>
          <a href="">
            <div className="screen">
              <div className="top">자라나라</div>
              <div className="botton">
                <span>장바구니에 담기</span>
              </div>
              <img src="img/velvet.jpg" alt="velvet" />
            </div>
            <div>
              <h3>벨벳 크리오스 이불세트</h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
