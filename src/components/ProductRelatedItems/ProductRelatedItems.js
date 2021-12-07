import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './ProductRelatedItems.scss';

const ProductRelatedItmes = ({
  slideWrapRef,
  handleNextSlide,
  slideRef,
  prevSlideWrap,
  handleNextSlideWrap,
  detailContents,
}) => (
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
              <img
                className="productRelatedSlider"
                src={detailContents?.[0].image_url?.[0]}
                alt="귀여운 원숭이 인형"
              />
              <img
                className="productRelatedSlider"
                src={detailContents?.[0].image_url?.[1]}
                alt="귀여운 원숭이 인형"
              />
            </div>
          </div>
        </div>
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
              <img
                className="productRelatedSlider"
                src={detailContents?.[1].image_url?.[0]}
                alt="크리스마스"
              />
              <img
                className="productRelatedSlider"
                src={detailContents?.[1].image_url?.[1]}
                alt="크리스마스"
              />
            </div>
          </div>
        </div>
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
              <img
                className="productRelatedSlider"
                src={detailContents?.[2].image_url?.[0]}
                alt="쿠키아가"
              />
              <img
                className="productRelatedSlider"
                src={detailContents?.[2].image_url?.[1]}
                alt="쿠키아가"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProductRelatedItmes;
