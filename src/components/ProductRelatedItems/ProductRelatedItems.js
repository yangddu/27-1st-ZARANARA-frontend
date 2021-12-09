import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ProductRelatedContent from './ProductRelatedContent/ProductRelatedContent';
import './ProductRelatedItems.scss';

const ProductRelatedItmes = ({
  relatedProducts,
  slideWrapRef,
  handleNextSlide,
  slideRef,
  prevSlideWrap,
  handleNextSlideWrap,
}) => {
  return (
    <>
      <div className="productRelatedItems">
        <div className="productRelatedHeader">
          <div className="productRelatedTxt">룩 완성하기</div>
          <div className="productRelatedArrow">
            <button onClick={prevSlideWrap}>
              <BsChevronLeft />
            </button>
            <button onClick={handleNextSlideWrap}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="slideWrapper">
        <div className="slideConWrap" ref={slideWrapRef}>
          {relatedProducts?.map(el => {
            console.log(el);
            return (
              <ProductRelatedContent
                key={el.id}
                imageUrls={el.image_urls}
                price={el.price}
                name={el.name}
                handleNextSlide={handleNextSlide}
                slideRef={slideRef}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRelatedItmes;
