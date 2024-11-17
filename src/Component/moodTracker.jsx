import React, { useState, useEffect } from "react";

const MoodTracker = () => {
  const [mood, setMood] = useState("");

  // Retrieve the saved mood from localStorage when the component mounts
  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMood(savedMood);
    }
  }, []);

  // Save the selected mood to localStorage whenever it changes
  useEffect(() => {
    if (mood) {
      localStorage.setItem("mood", mood);
    }
  }, [mood]);

  // Function to trigger animation class when mood changes
  const getEmojiClass = () => {
    return mood ? "emoji-animated" : "";
  };

  return (
    <div
      style={{
        maxHeight: "calc(100vh - 60px)",
      }}
      className="bg-dark text-white h-100"
    >
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6">
          {/* Card with dark background and Bootstrap hover effect */}
          <div className="card bg-dark text-white shadow-lg border-0 mood-card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Mood Tracker</h3>
              <p className="text-center text-muted mb-4">
                How are you feeling today?
              </p>

              {/* Display selected emoji with animation */}
              <div className="emoji-display text-center">
                <div className={`emoji ${getEmojiClass()}`}>
                  {mood === "happy" && "😊"}
                  {mood === "neutral" && "😐"}
                  {mood === "sad" && "😞"}
                  {mood === "excited" && "😆"}
                  {mood === "angry" && "😠"}
                </div>
              </div>

              {/* Mood Buttons with spacing between them */}
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <button
                  className={`btn btn-lg ${
                    mood === "happy" ? "btn-success" : "btn-outline-success"
                  }`}
                  onClick={() => setMood("happy")}
                >
                  😊 Happy
                </button>
                <button
                  className={`btn btn-lg ${
                    mood === "neutral" ? "btn-warning" : "btn-outline-warning"
                  }`}
                  onClick={() => setMood("neutral")}
                >
                  😐 Neutral
                </button>
                <button
                  className={`btn btn-lg ${
                    mood === "sad" ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => setMood("sad")}
                >
                  😞 Sad
                </button>
                <button
                  className={`btn btn-lg ${
                    mood === "excited" ? "btn-info" : "btn-outline-info"
                  }`}
                  onClick={() => setMood("excited")}
                >
                  😆 Excited
                </button>
                <button
                  className={`btn btn-lg ${
                    mood === "angry" ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => setMood("angry")}
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
