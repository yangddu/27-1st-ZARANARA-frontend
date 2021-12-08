import React from 'react';

const DetailContent = ({ images }) => (
  <div className="leftContainer">
    {images?.map((imgItem, index) => (
      <img key={index} src={imgItem.url} alt={imgItem.alt} />
    ))}
  </div>
);

export default DetailContent;
