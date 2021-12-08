import React from 'react';
import { Link } from 'react-router-dom';
import ProductRadioBox from './ProductRadioBox/ProductRadioBox';
import './ProductContent.scss';

const ProductContent = ({ product }) => {
  const { set_item, set_alt, set_image } = product;
  return (
    <li className="productImage">
      {set_item.map(spotdata => (
        <ProductRadioBox key={spotdata.id} spotdata={spotdata} />
      ))}
      <Link to="/gift/">
        <img alt={set_alt} src={set_image} />
      </Link>
    </li>
  );
};

export default ProductContent;
