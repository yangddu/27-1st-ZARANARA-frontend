import React from 'react';
import './SliderContent.scss';

const SliderContent = ({ sliderImagesData }) => {
  return sliderImagesData.map((slide, i) => (
    <div
      key={i}
      className="slideImage"
      style={{ backgroundImage: `url(${slide.url})` }}
      alt={slide.title}
    />
  ));
};

export default SliderContent;
