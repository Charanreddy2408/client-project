import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // Import the heart icons
import { toggleFavorite } from "../Redux/dashBoardSlice"; // Import the action
import { useSelector } from "react-redux";
import { setIsRemovedState } from "../Redux/dashBoardSlice";
const Card = ({
  name,
  icon,
  alignmentCenter = true,
  isfavourite = true,
  cardId,
  isFavoriteAdded,
}) => {
  const [isFav, setIsFav] = useState(isfavourite);
  const dispatch = useDispatch();
  const Myfavourites = useSelector(
    (state) => state.dashBoard.dashBoardDetails.Myfavourites
  );
  const handleFavoriteToggle = () => {
    const newIsFav = !isFav;
    setIsFav(newIsFav);
    dispatch(toggleFavorite({ cardId, isFavorite: newIsFav })); // Dispatch the action to update Redux state
    alignmentCenter = !alignmentCenter;
    dispatch(setIsRemovedState(true));
  };

  useEffect(() => {
    let ids = Myfavourites.map((item) => item.id);
    setIsFav(ids.includes(cardId));
  }, [Myfavourites]);

  return (
    <div
      className="text-center border-secondary bg-secondary shadow-sm card-hover border-0 py-3 px-2"
      style={{
        minWidth: "140px",
        maxWidth: "160px",
        maxHeight: "100px",
        paddingBlock: "3px",
        cursor: "pointer",
        position: "relative", // Ensure the heart icon is positioned relative to the card
      }}
    >
      <div
        style={{
          flexDirection: alignmentCenter ? "column" : "row",
          gap: "10px",
        }}
        className="card-body d-flex justify-content-start align-items-center"
      >
        <img
          src={icon}
          alt={name}
          className=""
          style={{
            width: alignmentCenter ? "50px" : "20px",
            height: alignmentCenter ? "40px" : "20px",
            maxHeight: "40px",
            objectFit: "contain",
          }}
        />
        <h6
          style={{
            fontSize: "0.7rem",
          }}
          className="text-white mb-0"
        >
          {name}
        </h6>

        {/* Heart Icon shown only when isfavourite is true */}
        {!isfavourite && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={handleFavoriteToggle}
          >
            {/* If the item is favorited, show the filled heart, else show the outline */}
            {isFav ? (
              <AiFillHeart size={24} color="#f3406c" />
            ) : (
              <AiOutlineHeart size={24} color="white" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
