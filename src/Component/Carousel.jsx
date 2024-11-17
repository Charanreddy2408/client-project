import React, { useState, useEffect, useRef } from "react";

const Carousel = ({
  title,
  images = [],
  description,
  isVideos = false,
  video = [],
}) => {
  // State to track the currently displayed image/video
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image/video every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % (isVideos ? video.length : images.length)
      );
    }, 3000); // Change every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Add isVideos and video to dependency array

  // Handle manual click on the navigation dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  console.log("Carousel rendered", video[currentIndex]?.src);
  return (
    <div
      className="d-flex position-relative flex-column w-100 rounded shadow "
      style={{
        flex: 1,
        width: "100%",
        minWidth: "300px",
        backgroundColor: "#1D1D1D",
      }}
    >
      {/* Title */}
      <div className="title">
        <h2 className="text-white fs-4 fw-bold p-3 text-start">{title}</h2>
      </div>

      {/* Image/Video Display */}
      <div className="image w-100 overflow-hidden position-relative">
        {!isVideos ? (
          <img
            src={images[currentIndex]}
            alt={title}
            className="img-fluid"
            style={{
              objectFit: "cover",
              width: "100%",
              transition: "opacity 0.5s ease-in-out", // Smooth transition
              opacity: currentIndex === 0 ? 1 : 0.8, // Simple fade effect
            }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            style={{
              objectFit: "cover",
              width: "100%",
              maxHeight: "200px",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <source src={video[currentIndex]?.src} />
          </video>
        )}
      </div>

      {/* Description */}
      <div className="description p-3 text-white text-start mb-2">
        <p>{description}</p>
      </div>

      {/* Navigation Dots */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center gap-2 mb-3">
        {(isVideos ? video : images).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`btn ${
              currentIndex === index ? "bg-active" : "bg-notActive"
            }`}
            style={{
              scale: "0.5",
              width: "12px", // Thinner dots
              height: "12px", // Make dots circular
              borderRadius: "50%", // Rounded dots
              transition: "background-color 0.3s ease",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
