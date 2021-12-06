// import React, { useState, useEffect } from 'react';
import Product from './../Product/Product';
import './ProductItems.scss';

function ProductItems({ productList }) {
  return (
    <div className="productIremsContainer">
      <ul className="productItems">
        {productList.map(product => (
          <Product productInfo={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductItems;
