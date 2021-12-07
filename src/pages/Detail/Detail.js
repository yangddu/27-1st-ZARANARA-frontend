import React, { useState, useRef, useEffect } from 'react';
import DetailModal from '../../components/DetailModal/DetailModal';
import ProductInfoTable from '../../components/ProductInfoTable/ProductInfoTable';
import ProductRelatedItmes from '../../components/ProductRelatedItems/ProductRelatedItems';
import './Detail.scss';
import DetailContent from './DetailContent';

const Detail = () => {
  const [detailContents, setDetailContents] = useState([]);
  const [number, setNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideWrap, setCurrentSlideWrap] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dimmerRef = useRef();
  const slideRef = useRef();
  const slideWrapRef = useRef();

  const TOTAL_SLIDES = 1;
  const TOTAL_SLIDES_WRAP = 2;
  const PRODUCT_INFO_TABLE = detailContents.product_option?.[0].size.split(',');
  const PRODUCT_RELATED_IMG = detailContents.theme_products;

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(result => setDetailContents(result.result[0]));
  }, []);

  const increaseAmount = () => {
    setNumber(number + 1);
  };

  const decreaseAmount = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isModalOpen === true) return setIsModalOpen(false);
  };

  const prevSlideWrap = () => {
    if (currentSlideWrap === 0) {
      setCurrentSlideWrap(TOTAL_SLIDES_WRAP);
    } else {
      setCurrentSlideWrap(currentSlideWrap - 1);
    }
  };

  const handleNextSlideWrap = () => {
    if (currentSlideWrap >= TOTAL_SLIDES_WRAP) {
      setCurrentSlideWrap(0);
    } else {
      setCurrentSlideWrap(currentSlideWrap + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 2}00px)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  useEffect(() => {
    slideWrapRef.current.style.transition = 'all 0.5s ease-in-out';
    slideWrapRef.current.style.transform = `translateX(-${
      currentSlideWrap * 2
    }00px)`;
  }, [currentSlideWrap]);

  console.log(detailContents.detail_image);

  return (
    <div className="detail" onClick={closeModal}>
      {isModalOpen && <div className="dimmer" ref={dimmerRef} />}
      <DetailContent detailContents={detailContents} />
      <div className="rightContainer">
        <div className="rightContainerInner">
          <div className="productTitle">{detailContents.name}</div>
          <div className="productPrice">
            {detailContents.price?.split('.')[0]}원
          </div>
          <div className="productText">{detailContents.information}</div>
          <ProductInfoTable
            detailContents={PRODUCT_INFO_TABLE}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            number={number}
          />
          {isModalOpen && (
            <DetailModal openModal={openModal} className="modal" />
          )}
          <div className="productDetailInfo">
            <div className="productDetailContents" onClick={openModal}>
              제품 상세정보
            </div>
            {/* <div className="productDetailContents" onClick={openModal}>
              배송 및 반품
            </div> */}
          </div>
          <ProductRelatedItmes
            detailContents={PRODUCT_RELATED_IMG}
            slideWrapRef={slideWrapRef}
            handleNextSlide={handleNextSlide}
            slideRef={slideRef}
            prevSlideWrap={prevSlideWrap}
            handleNextSlide={handleNextSlide}
            handleNextSlideWrap={handleNextSlideWrap}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
