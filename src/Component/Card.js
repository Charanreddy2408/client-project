import React from "react";

const Card = ({ name, icon, alignmentCenter = true }) => {
  return (
    <div
      className=" text-center  border-secondary  shadow-sm card-hover border-0 py-3"
      style={{
        minWidth: "130px",
        paddingBlock: "3px",
        backgroundColor: "#3e4352",
      }}
    >
      {/* ${
          alignmentCenter ? "flex-column" : "flex-row"
        }  */}
      <div
        style={{
          flexDirection: alignmentCenter ? "column" : "row",
          gap: "5px",
        }}
        className={`card-body d-flex justify-content-center align-items-center `}
      >
        <img
          src={icon}
          alt={name}
          className=""
          style={{
            maxHeight: "60px",
            objectFit: "contain",
            marginRight: alignmentCenter ? "0" : "10px",
            // Apply margin to the right when alignmentCenter is false
          }}
        />
        <h6
          style={{
            fontSize: "0.8rem",
          }}
          className="text-white mb-0"
        >
          {name}
        </h6>
      </div>
    </div>
  );
};

export default Card;
