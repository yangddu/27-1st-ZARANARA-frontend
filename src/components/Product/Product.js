import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import './Product.scss';
import { useEffect } from 'react/cjs/react.development';
import { GET_PRODUCT_API } from '../../config';

const Product = () => {
  const [productImages, setProductImages] = useState([]);

  // 백엔드 데이터 통신용
  // useEffect(() => {
  //   fetch(`${GET_PRODUCT_API}setlist\?offset\=0\&limit\=2`)
  //     .then(res => res.json())
  //     .then(data => setProductImages(data.list_item));
  // }, []);

  // mock 데이터 통신용
  useEffect(() => {
    fetch('/data/productMockData.json')
      .then(res => res.json())
      .then(data => setProductImages(data));
  }, []);

  return (
    <section className="productContainer">
      <ProductList productImages={productImages} />
    </section>
  );
};

export default Product;
