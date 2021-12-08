import React from 'react';
import './Spot.scss';

const Spot = ({ handleSpotMouseEnter, handleSpotMouseLeave }) => (
  <div
    className="spot"
    onMouseEnter={handleSpotMouseEnter}
    onMouseOut={handleSpotMouseLeave}
  />
);

export default Spot;
