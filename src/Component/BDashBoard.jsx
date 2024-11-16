import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Carousel from "./Carousel";
import { useAuth0 } from "@auth0/auth0-react";

export default function BDashBoard() {
  const dashBoardDetails = useSelector(
    (state) => state.dashBoard.dashBoardDetails
  );
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, "user");
  const events = useSelector((state) => state.dashBoard.Events);
  const notifications = useSelector((state) => state.dashBoard.Notifications);
  const videoLibrary = useSelector((state) => state.dashBoard.VideoLibrary);
  const notificationIsOpen = useSelector(
    (state) => state.dashBoard.Notifications.isopen
  );
  console.log(events, notifications, videoLibrary);
  const mostUsedItems = dashBoardDetails.Myfavourites;
  const financeItems = dashBoardDetails.Finance;
  const facilitiesItems = dashBoardDetails.Facilities_Managment;
  const humanResources = dashBoardDetails.Human_Resource;
  const videoCategoryItems = dashBoardDetails.videoCategory || [];
  return (
    <div
      style={{
        backgroundColor: "black",
        gap: "5px",
      }}
      className="d-flex flex-column flex-lg-row text-white w-100"
    >
      {/* home */}
      <div
        style={{
          maxHeight: "calc(100vh - 60px)",
          padding: "20px",
          overflowY: "auto",
        }}
        className="container p-4 w-100 w-md-75"
      >
        <div
          style={{
            background: "transparent",
            backgroundImage:
              "url(data:image/jpeg;base64,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",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="row mb-5 justify-content-start"
        >
          <div
            className=" p-2 shadow  rounded d-flex flex-row flex-md-row align-items-center"
            style={{ marginTop: "30px" }}
          >
            {/* Circle with initials */}
            <div
              className="d-flex justify-content-center align-items-center text-white  rounded-circle"
              style={{
                width: "80px", // Default width for small screens
                height: "80px", // Default height for small screens
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "15px",
              }}
            >
              {isLoading ? (
                <span className="loader"></span>
              ) : (
                <img
                  className="rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                  src={user.picture}
                />
              )}
            </div>

            {/* Rest of the content */}
            <div>
              <h1 className="text-white text-start">
                Hello {user?.name}, Goodmorning!
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
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
                className="d-flex"
              >
                {mostUsedItems.map((item) => (
                  <div
                    style={{
                      flex: "1",
                    }}
                    className=""
                    key={item.id}
                  >
                    <Card
                      name={item.name}
                      icon={item.icon}
                      alignmentCenter={false}
                    />
                  </div>
                ))}
                <button
                  style={{
                    backgroundColor: "#3e4352",
                    border: "none",
                    color: "white",
                    textAlign: "start",
                    padding: "5px",
                    borderRadius: "5px",
                    paddingInline: "45px",
                  }}
                >
                  {" "}
                  Add +
                </button>
              </div>
            </div>

            {/* Finance & Admin Section */}
            <div className="row mb-4">
              <div className="">
                <h2 className="text-white text-start fs-5 mb-2">
                  Finance & Admin
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
                className="d-flex"
              >
                {financeItems.map((item) => (
                  <div
                    style={{
                      flex: "1",
                    }}
                    className=""
                    key={item.id}
                  >
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
                  <div
                    style={{
                      flex: "1",
                    }}
                    className=""
                    key={item.id}
                  >
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
                  <div
                    style={{
                      flex: "1",
                    }}
                    className=""
                    key={item.id}
                  >
                    <Card name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>

            {/* latest news*/}

            <div
              style={{
                display: "flex",
                gap: "10px",
                overflowX: "auto",
                flexDirection: "column",
                marginTop: "20px",
                justifyContent: "start",
                alignItems: "start",
              }}
              className="laest news"
            >
              <h4>Latest News</h4>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
                className="latestNewsWrapper"
              >
                <Carousel
                  title={events.Title}
                  images={events.image}
                  description={events.Content}
                />
                <Carousel
                  title={events.Title}
                  images={events.image}
                  description={events.Content}
                />
              </div>
            </div>
          </div>
          {/* Right Section - Events and Notifications */}
        </div>
      </div>
      {/* notifications */}
      {notificationIsOpen && (
        <div className="container-custom container-custom-md">
          <div className="mb-2">
            <Carousel
              title={events.Title}
              images={events.image}
              description={events.Content}
            />
          </div>

          <div className="mb-2">
            <Carousel
              title={notifications.Title}
              images={notifications.image}
              description={notifications.Content}
            />
          </div>
          <div className="mb-2">
            <Carousel
              title={videoLibrary.Title}
              images={videoLibrary.video}
              description={videoLibrary.Content}
              isvideos={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
