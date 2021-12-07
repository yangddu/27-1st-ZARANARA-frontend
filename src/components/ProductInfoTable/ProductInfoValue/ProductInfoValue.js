import React from 'react';
import './ProductInfoValue.scss';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineMinusSm, HiOutlinePlus } from 'react-icons/hi';

const ProductInfoValue = ({
  increaseAmount,
  decreaseAmount,
  number,
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
            <HiOutlineMinusSm />
          </button>
          <div className="amountNumber">{number}</div>
          <button onClick={increaseAmount}>
            <HiOutlinePlus />
          </button>
        </div>
      </span>
    </li>
  );
};

export default ProductInfoValue;
