import React from 'react';
import './Detail.scss';

const Detail = () => (
  <div className="detailWrap">
    <div className="leftContainer" />
    <div className="rightContainer">
      <div className="rightContainerInner">
        <div className="productTitle">폴라 베어 스노우볼</div>
        <div className="productPrice">49,000원</div>
        <div className="productNumber">제품번호 9336/060</div>
        <div className="productText">
          북극곰 디테일 장식용 크리스탈 글라스 스노우볼. 흔들면 안에 있는
          눈송이가 흩날림.
        </div>
      </div>
      <div className="relatedProducts" />
    </div>
  </div>
);

export default Detail;
