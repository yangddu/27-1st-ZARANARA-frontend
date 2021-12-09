import React from 'react';
import './SliderContent.scss';

const SliderContent = ({ sliderImagesData }) => {
  return sliderImagesData.map(slide => (
    <div
      key={slide.id}
      className="slideImage"
      style={{ backgroundImage: `url(${slide.image})` }}
      alt={slide.alt}
    />
  ));
};

export default SliderContent;
