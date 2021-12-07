import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import ProductItems from '../ProductItems/ProductItems';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(result => setProductList(result));
  }, []);

  return (
    <main className="productList">
      <section className="filterContainer">
        <span>48개</span>
        <span>필터</span>
      </section>
      <section className="productContainer">
        <ProductItems productList={productList} />
      </section>
    </main>
  );
}

export default ProductList;
