import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Card from "./Card";
import Carousel from "./Carousel";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateMostUsedItems } from "../Redux/dashBoardSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function BDashBoard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [financeCards, setFinanceItems] = React.useState([]);
  const [facilitiesCards, setFacilitiesItems] = React.useState([]);
  const [humanResourcesCards, setHumanResourcesItems] = React.useState([]);
  const [showSections, setShowSections] = React.useState({
    finance: true,
    facilities: true,
    humanResources: true,
  });
  const events = useSelector((state) => state.dashBoard.Events, shallowEqual);
  const searchValue = useSelector(
    (state) => state.dashBoard.dashBoardDetails.searchValue
  );
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.dashBoard.Notifications,
    shallowEqual
  );
  const videoLibrary = useSelector(
    (state) => state.dashBoard.VideoLibrary,
    shallowEqual
  );
  const notificationIsOpen = useSelector(
    (state) => state.dashBoard.Notifications.isopen,
    shallowEqual
  );
  const mostUsedItems = useSelector(
    (state) => state.dashBoard.dashBoardDetails.Myfavourites
  );
  const financeItems = useSelector(
    (state) => state.dashBoard.dashBoardDetails.Finance
  );
  const facilitiesItems = useSelector(
    (state) => state.dashBoard.dashBoardDetails.Facilities_Managment
  );
  const humanResources = useSelector(
    (state) => state.dashBoard.dashBoardDetails.Human_Resource
  );

  useEffect(() => {
    let items = localStorage.getItem("financeItems");
    if (items) {
      dispatch(updateMostUsedItems(JSON.parse(items)));
    }
  }, []);

  useEffect(() => {
    setFinanceItems(financeItems);
    setFacilitiesItems(facilitiesItems);
    setHumanResourcesItems(humanResources);
  }, []);

  useEffect(() => {
    const sections = {
      facilities: { items: facilitiesItems, set: setFacilitiesItems },
      finance: { items: financeItems, set: setFinanceItems },
      humanResources: { items: humanResources, set: setHumanResourcesItems },
    };

    let updatedSections = { ...showSections };

    // Iterate through each section to filter items and update state
    Object.keys(sections).forEach((sectionKey) => {
      const { items, set } = sections[sectionKey];

      // Filter items case-insensitively
      const searchedItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      // Update items state
      set(searchedItems);

      // Update the visibility of the section
      updatedSections[sectionKey] = searchedItems.length > 0;
    });

    // Update visibility state in one go
    setShowSections(updatedSections);
  }, [searchValue]);

  const navigate = useNavigate();

  const MemoizedCarousel = React.memo(Carousel);
  return (
    <div
      style={{
        backgroundColor: "black",
        maxHeight: "calc(100vh - 60px)",
        gap: "5px",
      }}
      className="d-flex flex-column flex-lg-row text-white w-100"
    >
      {/* home */}
      <div
        style={{
          overflowY: "auto",
          maxWidth: !notificationIsOpen ? "100%" : "100%",
        }}
        className="container py-4 w-100 w-md-75"
      >
       <div
  style={{
    background: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  className="row mb-5 border border-card_border justify-content-start"
>
  <div
    className="py-2 shadow rounded d-flex flex-column flex-md-row justify-content-start align-items-center w-100"
    style={{ marginTop: "30px" }}
  >
    {/* Circle with initials */}
    <div
      className="d-flex mb-2 justify-content-center align-items-center text-white rounded-circle"
      style={{
        minWidth: "80px", // Default width for small screens
        height: "80px", // Default height for small screens
        fontSize: "18px",
        fontWeight: "bold",
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
            objectFit: "cover", // Ensures the image fills the circle proportionally
          }}
          src={user.picture}
          alt="user"
        />
      )}
    </div>

    {/* Rest of the content */}
    <div className="py-4 px-3 text-center text-md-start">
      <h1
        style={{
          fontSize: "24px",
        }}
        className="text-white"
      >
        Hello {user?.name}, Goodmorning!
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "#5c5c5c",
        }}
        className="text-start"
      >
        Your personalized dashboard. Manage your work seamlessly.
      </p>
    </div>
  </div>
</div>


        <div className="row">
          <div className="">
            {/* Most Used Section */}
            <div className="row mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-white text-start fs-5">My Favorites</h2>
                <button
                  style={{
                    backgroundColor: "#3e4352",
                    border: "none",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    maxWidth: "150px",
                  }}
                  onClick={() => navigate("/home/Favourites")} // Using an arrow function to call Navigate
                >
                  Add +
                </button>
              </div>

              {/* 2-column responsive grid on mobile */}
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {mostUsedItems.map((item, index) => (
                  <div className="col" key={index}>
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
            {showSections.finance && (
              <div className="row mb-4">
              <div>
                <h2 className="text-white text-start fs-5 mb-2">
                  Finance & Admin
                </h2>
              </div>
            
              {/* 2-column responsive grid on mobile */}
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {financeCards?.map((item, index) => (
                  <div className="col" key={index}>
                    <Card name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>
            
            )}

            {/* Facilities & Management Section */}
            {/* Facilities & Management Section */}
            {showSections.facilities && (
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="text-white text-start fs-5 mb-2">
                    Facilities & Management
                  </h2>
                </div>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                  {facilitiesCards?.map((item, index) => (
                    <div className="col" key={index}>
                      <Card name={item.name} icon={item.icon} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Human Resources Section */}
            {showSections.humanResources && (
              <div className="row mb-4">
                <div className="col-12">
                  <h2 className="text-white text-start fs-5 mb-2">
                    Human Resources
                  </h2>
                </div>
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                  {humanResourcesCards?.map((item, index) => (
                    <div className="col" key={index}>
                      <Card name={item.name} icon={item.icon} />
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                <MemoizedCarousel
                  title={events.Title}
                  images={events.image}
                  description={events.Content}
                />
                <MemoizedCarousel
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
        <div
          className={`position-absolute-container p-4  scontainer-custom container-custom-md ${
            notificationIsOpen ? "fade-in slide-in" : "fade-out slide-out"
          }`}
        >
          <div className="mb-2">
            <MemoizedCarousel
              title={events.Title}
              images={events.image}
              description={events.Content}
            />
          </div>

          <div className="mb-2">
            <MemoizedCarousel
              title={notifications.Title}
              images={notifications.image}
              description={notifications.Content}
            />
          </div>
          <div className="mb-2">
            <MemoizedCarousel
              title={videoLibrary.Title}
              video={videoLibrary.video}
              description={videoLibrary.Content}
              isVideos={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
