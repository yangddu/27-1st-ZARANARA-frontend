import React from 'react';
import { Link } from 'react-router-dom';
import SPOTSPOSTION from './spotPositionData';
import ProductRadioBox from './ProductRadioBox/ProductRadioBox';
import './ProductContent.scss';

const ProductContent = ({ product }) => {
  return (
    <li className="productImage">
      {product.spotdatas.map(spotdata => (
        <ProductRadioBox
          key={spotdata.id}
          spotdata={spotdata}
          position={SPOTSPOSTION[spotdata.title]}
        />
      ))}
      <Link to="/gift/">
        <img alt={product.alt} src={product.url} />
      </Link>
    </li>
  );
};

export default ProductContent;
