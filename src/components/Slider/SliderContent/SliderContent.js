import React from 'react';
import './SliderContent.scss';

const SliderContent = ({ sliderImagesData }) => {
  return sliderImagesData.map((slide, i) => (
    <img key={i} className="slideImage" src={slide.url} alt={slide.title} />
  ));
};

export default SliderContent;
