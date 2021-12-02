import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RigthArrow } from '../../../../../../assets/icon/arrow_right.svg';
import './ProductInfo.scss';

const ProductInfo = ({
  spotdata: { isNew, title, description, price, url, alt },
  isRadioActive,
  handleInfoMouseEnter,
  handleInfoMouseLeave,
}) => {
  return (
    <Link
      to={url}
      alt={alt}
      className={isRadioActive ? 'container active' : 'container'}
      onMouseOver={handleInfoMouseEnter}
      onMouseLeave={handleInfoMouseLeave}
    >
      <div className="header">
        <div className="inner">
          {isNew ? <span className="new">New</span> : null}
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <RigthArrow className="rigthArrow" />
      </div>
      <span className="price">{price}</span>
    </Link>
  );
};

export default ProductInfo;
