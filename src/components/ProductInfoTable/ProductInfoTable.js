import React from 'react';
import './ProductInfoTable.scss';
import ProductInfoValue from './ProductInfoValue/ProductInfoValue';

const ProductInfoTable = ({
  increaseAmount,
  decreaseAmount,
  number,
  detailContents,
}) => (
  <div className="productInfoTable">
    <div className="productInfoHeader">
      <span className="productValue">가로</span>
      <span className="productValue">세로</span>
      <span className="productValue">높이</span>
    </div>
    <ul className="productInfoCons">
      <ProductInfoValue
        detailContents={detailContents}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        number={number}
      />
    </ul>
  </div>
);

export default ProductInfoTable;
