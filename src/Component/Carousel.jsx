import React, { useState, useEffect } from "react";

const Carousel = ({ title, images, description, isVideos }) => {
  // State to track the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual click on the navigation dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="d-flex position-relative flex-column w-100 rounded shadow"
      style={{
        backgroundColor: "#3e4352",
        flex: 1,
        width: "100%",
        minWidth: "300px",
      }}
    >
      {/* Title */}
      <div className="title">
        <h2 className="text-white fs-4 fw-bold p-3 text-start">{title}</h2>
      </div>

      {/* Image Display */}
      <div className="image w-100 overflow-hidden position-relative">
        {!isVideos ? (
          <img
            src={images[currentIndex]}
            alt={title}
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%" }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            style={{ objectFit: "cover", width: "100%" }}
          >
            <source src={images[currentIndex]} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Description */}
      <div className="description p-3 text-white text-start mb-2">
        <p>{description}</p>
      </div>

      {/* Navigation Dots */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center gap-2 mb-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`btn ${
              currentIndex === index ? "bg-dark" : "bg-secondary"
            }`}
            style={{
              scale: "0.5",
              width: "30px", // Adjust width for rectangle
              height: "2px", // Adjust height for rectangle
              borderRadius: "1px", // Optional: Add rounded corners
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
