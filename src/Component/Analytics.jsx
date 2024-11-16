import React from "react";

const Analytics = () => {
  return (
    <div
      style={{
        maxHeight: "calc(100vh - 60px)",
      }}
      className=" bg-dark text-white h-100 w-100"
    >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {/* Card with a light background for Analytics */}
            <div className="card bg-dark text-white shadow-lg border-0">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Analytics</h3>
                <p className="text-center">
                  Coming soon! This section will be used for analytics and
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
