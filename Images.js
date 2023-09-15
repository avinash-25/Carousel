import React from 'react';
import Carousel from './Carousel';

const images = () => {
  const images = [
    'fries.jpg',
    'pavbhaji.jpg',
    'samosa.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
};

export default images;
