import React from 'react';
import ProductInfoValue from './ProductInfoValue/ProductInfoValue';
import './ProductInfoTable.scss';

const ProductInfoTable = ({
  increaseAmount,
  decreaseAmount,
  productAmount,
  detailContents,
}) => (
  <div className="productInfoTable">
    <div className="productInfoHeader">
      <span className="productValue">가로</span>
      <span className="productValue">세로</span>
      <span className="productValue">높이</span>
      <span className="productValue">무게</span>
    </div>
    <ul className="productInfoCons">
      <ProductInfoValue
        detailContents={detailContents}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        productAmount={productAmount}
      />
    </ul>
  </div>
);

export default ProductInfoTable;
