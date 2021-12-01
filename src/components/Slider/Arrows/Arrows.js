import React from 'react';
import './Arrows.scss';
import { ReactComponent as LeftArrow } from '../../../assets/icon/arrow_left.svg';
import { ReactComponent as RightArrow } from '../../../assets/icon/arrow_right.svg';

const Arrows = ({ handlePrevSlide, handleNextSlide }) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={handlePrevSlide}>
        <LeftArrow className="leftArrow" />
      </span>
      <span className="next" onClick={handleNextSlide}>
        <RightArrow className="rightArrow" />
      </span>
    </div>
  );
};

export default Arrows;
