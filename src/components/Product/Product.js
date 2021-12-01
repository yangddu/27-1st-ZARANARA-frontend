import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import './Product.scss';
import { useEffect } from 'react/cjs/react.development';

const Product = () => {
  const [productImages, setProductImages] = useState([]);

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
