import React from 'react';
import './Dots.scss';

const Dots = ({ activeIndex, handleClickDots, sliderImagesData }) => {
  return (
    <div className="dots">
      {sliderImagesData.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active' : 'dot'}`}
          onClick={() => handleClickDots(index)}
        />
      ))}
    </div>
  );
};

export default Dots;
