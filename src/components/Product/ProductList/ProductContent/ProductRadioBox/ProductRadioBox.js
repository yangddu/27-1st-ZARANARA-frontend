import React, { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Spot from './Spot/Spot';
import ProductInfo from './ProductInfo/ProductInfo';
import './ProductRadioBox.scss';

const ProductRadioBox = ({ spotdata }) => {
  const radioBoxRef = useRef();
  const [isMouseSpotEnter, setIsMouseSpotEnter] = useState(false);
  const [isMouseInfoEnter, setIsMouseInfoEnter] = useState(false);

  const handleSpotMouseEnter = e => {
    setIsMouseSpotEnter(true);
  };

  const handleSpotMouseLeave = e => {
    setIsMouseSpotEnter(false);
  };

  const handleInfoMouseEnter = e => {
    if (e.target !== e.currentTarget) return;
    setIsMouseInfoEnter(true);
  };

  const handleInfoMouseLeave = e => {
    setIsMouseInfoEnter(false);
  };

  useEffect(() => {
    radioBoxRef.current.style.top = `${spotdata.x_position}%`;
    radioBoxRef.current.style.left = `${spotdata.y_position}%`;
  }, []);

  return (
    <div className="productRadioBox" ref={radioBoxRef}>
      <Spot
        handleSpotMouseEnter={handleSpotMouseEnter}
        handleSpotMouseLeave={handleSpotMouseLeave}
      />
      <ProductInfo
        spotdata={spotdata}
        isRadioActive={isMouseSpotEnter || isMouseInfoEnter ? true : false}
        handleInfoMouseEnter={handleInfoMouseEnter}
        handleInfoMouseLeave={handleInfoMouseLeave}
      />
    </div>
  );
};

export default ProductRadioBox;
