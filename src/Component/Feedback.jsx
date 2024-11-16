import React from 'react';

const Feedback = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Card with a light background for Feedback */}
          <div className="card bg-dark text-white shadow-lg border-0">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Feedback</h3>
              <p className="text-center">Coming soon! We value your feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;