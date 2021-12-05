import React from 'react';
import { Link } from 'react-router-dom';
import SPOTSPOSTION from './spotPositionData';
import ProductRadioBox from './ProductRadioBox/ProductRadioBox';
import './ProductContent.scss';

const ProductContent = ({ product }) => {
  console.log(product);
  return (
    <li className="productImage">
      {product.set_item.map(spotdata => (
        <ProductRadioBox key={spotdata.id} spotdata={spotdata} />
      ))}
      <Link to="/gift/">
        <img alt={product.set_alt} src={product.set_image} />
      </Link>
    </li>
  );
};

export default ProductContent;
