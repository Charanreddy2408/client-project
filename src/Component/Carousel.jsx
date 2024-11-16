import React from "react";

const Carousel = ({ title, image, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "100%",
        backgroundColor: "#656563",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
      className=""
    >
      <div className="tittle">
        <h2
          style={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            padding: "10px",
            textAlign: "start",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          overflow: "hidden",
        }}
        className="image"
      >
        <img src={image} alt={title} />
      </div>
      <div
        style={{
          padding: "10px",
          color: "white",
          textAlign: "start",
        }}
        className="description"
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Carousel;
