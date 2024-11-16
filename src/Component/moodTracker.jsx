import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Card with dark background and Bootstrap hover effect */}
          <div className="card bg-dark text-white shadow-lg border-0 mood-card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Mood Tracker</h3>
              <p className="text-center text-muted mb-4">How are you feeling today?</p>
              
              {/* Mood Buttons with spacing between them */}
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <button
                  className={`btn btn-lg ${mood === 'happy' ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => setMood('happy')}
                >
                  😊 Happy
                </button>
                <button
                  className={`btn btn-lg ${mood === 'neutral' ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => setMood('neutral')}
                >
                  😐 Neutral
                </button>
                <button
                  className={`btn btn-lg ${mood === 'sad' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setMood('sad')}
                >
                  😞 Sad
                </button>
                <button
                  className={`btn btn-lg ${mood === 'excited' ? 'btn-info' : 'btn-outline-info'}`}
                  onClick={() => setMood('excited')}
                >
                  😆 Excited
                </button>
                <button
                 className={`btn btn-lg ${mood === 'angry' ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => setMood('angry')}
                >
                  😠 Angry
                </button>
              </div>

              {/* Display Mood Status */}
              <div className="text-center">
                {mood && (
                  <div className="alert alert-info">
                    You are feeling <strong>{mood}</strong> today!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
