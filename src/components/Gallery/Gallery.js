import React, { useState } from 'react';
import './Gallery.style.scss';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCn = i => currentIndex === i && 'current';
  const prevCn = i => i === currentIndex - 1 && 'prev';
  const nextCn = i => i === currentIndex + 1 && 'next';
  const cnames = i => [currentCn(i), prevCn(i), nextCn(i)].filter(i => i);

  const changeHandler = dir => {
    const { length } = images;

    if (dir === 'left') {
      if (currentIndex - 1 < 0) {
        setCurrentIndex(length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
    if (dir === 'right') {
      if (currentIndex + 1 > length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="gallery">
      {images.map((image, i) => (
        <img src={image} alt="car" key={i} className={cnames(i)} />
      ))}
      <button
        className="arrow left"
        onClick={() => changeHandler('left')}
      >{`<`}</button>
      <button
        className="arrow right"
        onClick={() => changeHandler('right')}
      >{`>`}</button>
    </div>
  );
};

export default Gallery;
