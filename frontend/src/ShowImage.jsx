// ShowImage.jsx
import React from 'react';

const ShowImage = ({ imageUrl }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default ShowImage;
