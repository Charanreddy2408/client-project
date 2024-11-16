import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Carousel from "./Carousel";

export default function BDashBoard() {
  const dashBoardDetails = useSelector(
    (state) => state.dashBoard.dashBoardDetails
  );
  const events = useSelector((state) => state.dashBoard.Events);
  const notifications = useSelector((state) => state.dashBoard.Notifications);
  const videoLibrary = useSelector((state) => state.dashBoard.VideoLibrary);

  const mostUsedItems = dashBoardDetails.Myfavourites;
  const financeItems = dashBoardDetails.Finance;
  const facilitiesItems = dashBoardDetails.Facilities_Managment;
  const humanResources = dashBoardDetails.Human_Resource;
  const videoCategoryItems = dashBoardDetails.videoCategory || [];

  return (
    <div
      style={{ backgroundColor: "black" }}
      className=" d-flex text-white min-vh-100 w-100 "
    >
      <div
        style={{
          width: "75%",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
        className="container p-5  "
      >
        <div className="row mb-5 justify-content-start">
          <div
            className="p-4 shadow bg-secondary rounded d-flex align-items-center"
            style={{ marginTop: "30px" }}
          >
            {/* Circle with initials */}
            <div
              className="d-flex justify-content-center align-items-center text-white bg-primary rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "15px",
              }}
            >
              <h1>JD</h1>
            </div>

            {/* Rest of the content */}
            <div>
              <h1 className="text-primary text-start">
                Hello John, Goodmorning!
              </h1>
              <p className="text-white text-start">
                Your personalized dashboard. Manage your work seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="">
            {/* Most Used Section */}
            <div className="row mb-4">
              <div className="">
                <h2 className="text-white text-start fs-5 mb-2">
                  My Favorites
                </h2>
              </div>
              <div
                style={{
                  flexWrap: "wrap",
                  gap: "8px",
                }}
                className="d-flex"
              >
                {mostUsedItems.map((item) => (
                  <div className="" key={item.id}>
                    <Card
                      name={item.name}
                      icon={item.icon}
                      alignmentCenter={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Finance & Admin Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="text-white text-start fs-5 mb-2">
                  Finance & Admin
                </h2>
              </div>
              <div
                style={{
                  flexWrap: "wrap",
                  gap: "8px",
                }}
                className="d-flex"
              >
                {financeItems.map((item) => (
                  <div className="col" key={item.id}>
                    <Card name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities & Management Section */}
            <div className="row mb-4">
              <div className="col-12">
                <h2 className="text-white text-start fs-5 mb-2">
                  Facilities & Management
                </h2>
              </div>
              <div
                style={{
                  flexWrap: "wrap",
                  gap: "8px",
                }}
                className="d-flex"
              >
                {facilitiesItems.map((item) => (
                  <div className="col" key={item.id}>
                    <Card name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>

            {/* Human Resources Section */}
            <div className="row mb-1">
              <div className="col-12">
                <h2 className="text-white text-start fs-5 mb-2">
                  Human Resources
                </h2>
              </div>
              <div
                style={{
                  flexWrap: "wrap",
                  gap: "8px",
                }}
                className="d-flex"
              >
                {humanResources.map((item) => (
                  <div className="col" key={item.id}>
                    <Card name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Section - Events and Notifications */}
        </div>
      </div>
      <div
        style={{
          width: "35%",
          overflowY: "auto",
          maxHeight: "100vh",
          padding: "20px",
        }}
        className="w-[30%]"
      >
        <div className="mb-2">
          <Carousel
            title={events.Title}
            image={events.image}
            description={events.Content}
          />
        </div>

        <div className="mb-2">
          <Carousel
            title={notifications.Title}
            image={notifications.image}
            description={notifications.Content}
          />
        </div>
        <div className="mb-2">
          <Carousel
            title={videoLibrary.Title}
            image={videoLibrary.video}
            description={videoLibrary.Content}
          />
        </div>
      </div>
    </div>
  );
}
