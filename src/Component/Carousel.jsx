import React from 'react';

const Carousel = ({ title, image, description }) => {
  return (
    <div className="card text-center bg-dark border-secondary mb-3 shadow-sm carousel-hover" style={{ width: '100%', maxWidth: '300px' }}>
      <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
        <div className="image-container mb-2" style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
          <img src={image} alt={title} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h5 className="card-title text-white">{title}</h5>
        <p className="card-text text-white">{description}</p>
      </div>
    </div>
  );
};

export default Carousel;
