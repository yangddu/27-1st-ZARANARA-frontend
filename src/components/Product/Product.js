import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import './Product.scss';
import { useEffect } from 'react/cjs/react.development';
import { GET_PRODUCT_API } from '../../config';

const Product = () => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    fetch(GET_PRODUCT_API)
      .then(res => res.json())
      .then(data => setProductImages(data.list_item));
  }, []);

  return (
    <section className="productContainer">
      <ProductList productImages={productImages} />
    </section>
  );
};

export default Product;
