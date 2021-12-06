import React from 'react';
import './SliderContent.scss';

const SliderContent = ({ sliderImagesData }) => {
  return sliderImagesData.map(slide => (
    <div
      key={slide.slide_id}
      className="slideImage"
      style={{ backgroundImage: `url(${slide.slide_image})` }}
      alt={slide.slide_alt}
    />
  ));
};

export default SliderContent;
