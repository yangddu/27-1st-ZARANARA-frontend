import React from 'react';

const DetailContent = ({ detailContents }) => (
  <div className="leftContainer">
    {detailContents.detail_image.map(imgItem => (
      <img src={imgItem.url} alt={imgItem.alt} />
    ))}
  </div>
);

export default DetailContent;
