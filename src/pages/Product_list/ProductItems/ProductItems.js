// import React, { useState, useEffect } from 'react';
import Product from './../Product/Product';
import './ProductItems.scss';

function ProductItems({ productList }) {
  return (
    <div className="productItemsContainer">
      <ul className="productItems">
        {productList.map(product => (
          <Product key={product.id} productInfo={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductItems;
