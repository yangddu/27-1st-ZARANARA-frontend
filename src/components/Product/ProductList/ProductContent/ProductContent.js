import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './Spot/Spot';
import SPOTSPOSTION from './spotPositionData';
import './ProductContent.scss';

const ProductContent = ({ product }) => {
  return (
    <li className="productImage">
      {product.spotdatas.map(spotdata => (
        <Spot spotdata={spotdata} position={SPOTSPOSTION[spotdata.title]} />
      ))}
      <Link to="/gift/">
        <img alt={product.alt} src={product.url} />
      </Link>
    </li>
  );
};

export default ProductContent;
