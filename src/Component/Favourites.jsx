import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { updateMostUsedItems } from "../Redux/dashBoardSlice";

export default function Favourites() {
  const dashBoardDetails = useSelector(
    (state) => state.dashBoard.dashBoardDetails
  );
  const mostUsedItems = dashBoardDetails.Myfavourites || [];
  const financeItems = dashBoardDetails.Finance || [];
  const facilitiesItems = dashBoardDetails.Facilities_Managment || [];
  const humanResources = dashBoardDetails.Human_Resource || [];
  const isRemovedState = useSelector(
    (state) => state.dashBoard.dashBoardDetails.isRemovedState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch items from localStorage if they exist
    const items = localStorage.getItem("financeItems");
    if (items) {
      const parsedItems = JSON.parse(items);
      console.log(parsedItems?.length, "items");
      dispatch(updateMostUsedItems(parsedItems));
    }
  }, []);

  useEffect(() => {
    const items = localStorage.getItem("financeItems");
    const parsedItems = JSON.parse(items);

    if (mostUsedItems?.length > (parsedItems?.length || 0)) {
      localStorage.setItem("financeItems", JSON.stringify(mostUsedItems)); // Save to localStorage immediately after update
    } else if (isRemovedState) {
      localStorage.setItem("financeItems", JSON.stringify(mostUsedItems)); // Save to localStorage immediately
    }
  }, [mostUsedItems?.length, isRemovedState]); // Trigger when mostUsedItems changes

  return (
    <div
      style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto" }}
      className="bg-dark text-white h-100 w-100"
    >
      <div className="bg-dark text-white p-4">
        <div className="row">
          {/* Most Used Section */}
          <div className="col-12">
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="fs-5 mb-2 text-start">My Favorites</h2>
              </div>
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {mostUsedItems.map((item) => (
                  <div className="col" key={item.id}>
                    <Card
                      name={item.name}
                      icon={item.icon}
                      alignmentCenter={false}
                      cardId={item.id}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Finance & Admin Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="fs-5 mb-2 text-start">Finance & Admin</h2>
              </div>
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {financeItems.map((item) => (
                  <div className="col" key={item.id}>
                    <Card
                      name={item.name}
                      icon={item.icon}
                      isfavourite={false}
                      alignmentCenter={true}
                      cardId={item.id}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities & Management Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="fs-5 mb-2 text-start">
                  Facilities & Management
                </h2>
              </div>
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {facilitiesItems.map((item) => (
                  <div className="col" key={item.id}>
                    <Card
                      name={item.name}
                      icon={item.icon}
                      isfavourite={false}
                      alignmentCenter={true}
                      cardId={item.id}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Human Resources Section */}
            <div className="row mb-1">
              <div className="col-12">
                <h2 className="fs-5 mb-2 text-start">Human Resources</h2>
              </div>
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {humanResources.map((item) => (
                  <div className="col" key={item.id}>
                    <Card
                      name={item.name}
                      icon={item.icon}
                      isfavourite={false}
                      alignmentCenter={true}
                      cardId={item.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
