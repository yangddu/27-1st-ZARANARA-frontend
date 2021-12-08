import React, { useState, useRef, useEffect } from 'react';
import DetailModal from '../../components/DetailModal/DetailModal';
import './Gift.scss';

const Gift = () => {
  const [detailContents, setDetailContents] = useState([]);
  const [number, setNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dimmerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideWrap, setCurrentSlideWrap] = useState(0);
  const TOTAL_SLIDES = 1;
  const TOTAL_SLIDES_WRAP = 2;
  const slideRef = useRef();
  const slideWrapRef = useRef();

  useEffect(() => {}, [isModalOpen]);

  const increaseAmount = () => {
    setNumber(number + 1);
  };

  const decreaseAmount = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isModalOpen === true) return setIsModalOpen(false);
  };

  return (
    <div className="detail" onClick={closeModal}>
      {isModalOpen && <div className="dimmer" ref={dimmerRef} />}
      <div className="leftContainer">
        <img
          src="https://static.zarahome.net/8/photos4/2021/I/4/1/p/9336/060/250/9336060250_2_7_3.jpg?t=1636044789265"
          alt="bgImg"
        />
        <img
          src="https://static.zarahome.net/8/photos4/2021/I/4/1/p/9336/060/250/9336060250_1_1_3.jpg?t=1633963340692"
          alt="bgImg"
        />
      </div>
      <div className="rightContainer">
        <div className="rightContainerInner">
          <div className="productTitle">폴라 베어 스노우볼</div>
          <div className="productPrice">49,000원</div>
          <div className="productNumber">제품번호 9336/060</div>
          <div className="productText">
            북극곰 디테일 장식용 크리스탈 글라스 스노우볼. 흔들면 안에 있는
            눈송이가 흩날림.
          </div>
          <div className="productInfoTable">
            <div className="productInfoHeader">
              <span className="productValue">ONE SIZE</span>
              <span className="productInfoLikes">
                <div className="likes">좋아염</div>
                <div className="amount">
                  <button onClick={decreaseAmount}>-</button>
                  <div className="amountNumber">{number}</div>
                  <button onClick={increaseAmount}>+</button>
                </div>
              </span>
            </div>
            {/* <div className="productInfoCons" /> */}
          </div>
          {isModalOpen && (
            <DetailModal openModal={openModal} className="modal" />
          )}
          <div className="productDetailInfo">
            <div className="productDetailContents" onClick={openModal}>
              제품 상세정보
            </div>
            <div className="productDetailContents" onClick={openModal}>
              배송 및 반품
            </div>
          </div>
          <div className="productRelatedContainer">
            <div className="productRelatedHeader">
              <div className="productRelatedTxt">
                ITEMS THAT MAKE UP THIS SET
              </div>
            </div>
            <ul className="productSet">
              <li className="productSetLi">
                <div className="productSetImage">
                  <img
                    src="https://static.zarahome.net/8/photos4/2021/I/4/1/p/6680/055/999/6680055999_1_1_6.jpg?t=1630415953067"
                    alt="로봇이미지"
                  />
                </div>
                <div className="productSetInfo">
                  <p className="productSetTitle">로봇 북마크</p>
                  <div className="productSetPrice">11,000원</div>
                  <div className="productSetNumber">제품번호 6680/055</div>
                  <div className="productSetNumber">6.5 x 17 x 0.2 cm</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relatedProducts" />
    </div>
  );
};

export default Gift;
