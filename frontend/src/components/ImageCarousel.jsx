import { useState } from 'react';

export default function ImageCarousel({ images, altBase }) {
  const [index, setIndex] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-image-wrap">
        <img src={images[index]} alt={`${altBase} ${index + 1}`} />
        {images.length > 1 && (
          <>
            <button className="carousel-btn carousel-btn-left" onClick={prev}>‹</button>
            <button className="carousel-btn carousel-btn-right" onClick={next}>›</button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'dot-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            />
          ))}
        </div>
      )}
    </div>
  );
}