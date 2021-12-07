import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiMinus, HiPlus } from 'react-icons/hi';
import './ProductInfoValue.scss';

const ProductInfoValue = ({
  increaseAmount,
  decreaseAmount,
  productAmount,
  detailContents,
}) => {
  return (
    <li className="productInfoValueLi">
      {detailContents?.map((el, index) => (
        <span key={index} className="productInfoValue">
          {el}
        </span>
      ))}
      <span className="productInfoLikes">
        <div className="likes">
          <FiHeart />
        </div>
        <div className="amount">
          <button onClick={decreaseAmount}>
            <HiMinus />
          </button>
          <div className="productAmount">{productAmount}</div>
          <button onClick={increaseAmount}>
            <HiPlus />
          </button>
        </div>
      </span>
    </li>
  );
};

export default ProductInfoValue;
