import React from 'react';

const DetailContent = ({ images }) => (
  <div className="leftContainer">
    {images?.map(imgItem => (
      <img src={imgItem.url} alt={imgItem.alt} />
    ))}
  </div>
);

export default DetailContent;
