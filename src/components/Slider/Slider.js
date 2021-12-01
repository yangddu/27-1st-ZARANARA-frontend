import React, { useEffect, useRef, useState } from 'react';
import Arrows from './Arrows/Arrows';
import Dots from './Dots/Dots';
import SliderContent from './SliderContent/SliderContent';
import './Slider.scss';

const Slider = () => {
  const [sliderImagesData, setSliderImagesData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  const INDEX_LENGTH = sliderImagesData.length - 1;

  useEffect(() => {
    fetch('/data/sliderMockData.json')
      .then(res => res.json())
      .then(data => setSliderImagesData(data));
  }, []);

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${activeIndex}00%)`;

    const sliderInterval = setInterval(() => {
      setActiveIndex(activeIndex === INDEX_LENGTH ? 0 : activeIndex + 1);
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [activeIndex]);

  const handlePrevSlide = () =>
    setActiveIndex(activeIndex < 1 ? INDEX_LENGTH : activeIndex - 1);

  const handleNextSlide = () =>
    setActiveIndex(activeIndex === INDEX_LENGTH ? 0 : activeIndex + 1);

  const handleClickDots = selectIndex => setActiveIndex(selectIndex);

  return (
    <div className="sliderContainer">
      <section className="sliderImagesList" ref={sliderRef}>
        <SliderContent
          activeIndex={activeIndex}
          sliderImagesData={sliderImagesData}
        />
      </section>
      <Arrows
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
      <Dots
        activeIndex={activeIndex}
        sliderImagesData={sliderImagesData}
        onClick={handleClickDots}
      />
    </div>
  );
};

export default Slider;
