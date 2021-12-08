import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import { API } from '../../config';
import './Product.scss';

const Product = () => {
  const [productImages, setProductImages] = useState([]);

  // 백엔드 데이터 통신용
  useEffect(() => {
    fetch(`${API.PRODUCT}/set\?offset\=0\&limit\=2`)
      .then(res => res.json())
      .then(data => setProductImages(data.list_item));
  }, []);

  // mock 데이터 통신용
  // useEffect(() => {
  //   fetch('/data/productMockData.json')
  //     .then(res => res.json())
  //     .then(data => setProductImages(data));
  // }, []);

  return (
    <section className="productContainer">
      <ProductList productImages={productImages} />
    </section>
  );
};

export default Product;
