import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RigthArrow } from '../../../../../../assets/icon/arrow_right.svg';
import './ProductInfo.scss';

const ProductInfo = ({
  spotdata,
  isRadioActive,
  handleInfoMouseEnter,
  handleInfoMouseLeave,
}) => {
  return (
    <Link
      to="http://"
      alt={spotdata.item_alt}
      className={isRadioActive ? 'container active' : 'container'}
      onMouseOver={handleInfoMouseEnter}
      onMouseLeave={handleInfoMouseLeave}
    >
      <div className="header">
        <div className="inner">
          {true ? <span className="new">New</span> : null}
          <h3 className="title">{spotdata.name}</h3>
          <p className="description">{spotdata.keyword}</p>
        </div>
        <RigthArrow className="rigthArrow" />
      </div>
      <span className="price">{spotdata.price}</span>
    </Link>
  );
};

export default ProductInfo;
