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
    <div className="bg-dark d-flex text-white min-vh-100 w-100 p-5">
      <div className="container p-5  ">
      <div className="row mb-5 justify-content-start">
  <div
    className="p-4 shadow bg-secondary rounded d-flex align-items-center"
    style={{ marginTop: "30px" }}
  >
    {/* Circle with initials */}
    <div
      className="d-flex justify-content-center align-items-center text-white bg-primary rounded-circle"
      style={{ width: '100px', height: '100px', fontSize: '18px', fontWeight: 'bold', marginRight: '15px' }}
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
                <h2 className="text-white text-start mb-0">Most Used</h2>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {mostUsedItems.map((item) => (
                  <div className="col" key={item.id}>
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
                <h2 className="text-white text-start mb-0">Finance & Admin</h2>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
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
                <h2 className="text-white text-start mb-0">
                  Facilities & Management
                </h2>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
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
                <h2 className="text-white text-start mb-0">Human Resources</h2>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4   ">
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
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ marginTop: "4%" }}>
  <h2 className="text-white text-start fs-3 mb-1">Notifications</h2> 
  <div className="mb-2">
    <Carousel
      title={events.Title}
      image={events.image}
      description={events.Content}
    />
  </div>
  <h2 className="text-white text-start fs-3 mb-3">Events</h2> 
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
