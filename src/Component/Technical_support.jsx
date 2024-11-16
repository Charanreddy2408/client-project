import React from "react";

const Technical_support = () => {
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
            {/* Card with a light background for Technical Support */}
            <div className="card bg-dark  text-white shadow-lg border-0">
              <div className="card-body">
                <h3 className="card-title text-center mb-4 ">
                  Technical Support
                </h3>
                <p className="text-center">
                  Coming soon! For technical support, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical_support;
