import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const ProductRelatedContent = ({
  imageUrls,
  name,
  price,
  handleNextSlide,
  slideRef,
}) => {
  return (
    <div className="slideContainer">
      <div className="productRelatedImg">
        <div className="productRelatedInsideArrow">
          <button onClick={handleNextSlide}>
            <BsChevronLeft />
          </button>
          <button onClick={handleNextSlide}>
            <BsChevronRight />
          </button>
        </div>
      </div>
      <div className="slideWrapperTest">
        <div className="productRelatedSlideWrap" ref={slideRef}>
          <div className="productRelatedSlideConWrap">
            <div className="productRelatedSliderWrapper">
              <img
                className="productRelatedSlider"
                src={imageUrls?.[0]}
                alt="귀여운 원숭이 인형"
              />
              <img
                className="productRelatedSlider"
                src={imageUrls?.[1]}
                alt="귀여운 원숭이 인형"
              />
            </div>
            <h2 className="title">{name}</h2>
            <div className="price">
              {Number(price?.split('.')[0]).toLocaleString()}원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRelatedContent;
