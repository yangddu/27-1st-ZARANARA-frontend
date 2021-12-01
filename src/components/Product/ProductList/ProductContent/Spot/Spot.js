import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Spot.scss';

const Spot = ({ position }) => {
  const spotRef = useRef();

  useEffect(() => {
    spotRef.current.style.top = position.top;
    spotRef.current.style.left = position.left;
  }, []);

  return <div className="spot" ref={spotRef} />;
};

export default Spot;
