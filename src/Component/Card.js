import React from 'react';

const Card = ({ name, icon, alignmentCenter = true }) => {
  return (
    <div className="card text-cr bg-dark border-secondary mb-3 shadow-sm card-hover" style={{ width: "170px", paddingBlock: "5px" }}>
      <div
        className={`card-body d-flex ${alignmentCenter ? "flex-column" : "flex-row"} justify-content-center align-items-center p-2`}
      >
        <img
          src={icon}
          alt={name}
          className="mb-2"
          style={{
            maxHeight: '60px',
            objectFit: 'contain',
            marginRight: alignmentCenter ? '0' : '10px', // Apply margin to the right when alignmentCenter is false
          }}
        />
        <h6 className="card-title text-white">{name}</h6>
      </div>
    </div>
  );
};

export default Card;
