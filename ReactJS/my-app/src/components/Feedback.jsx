import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [selectedFeedback, setSelectedFeedback] = useState("");

  function selectFeedback(feedback) {
    setSelectedFeedback(feedback);
  }
  function response() {
    alert("Thank you for your values feedback");
  }
  return (
    <div className="align-f">
      <div className="container-f">
        <h2>Please let us know your experience at Osteria</h2>

        <div className="feedback-options">
          <div
            className="feedback-option"
            onClick={() => selectFeedback("good")}
          >
            Good
          </div>
          <div
            className="feedback-option"
            onClick={() => selectFeedback("average")}
          >
            Average
          </div>
          <div
            className="feedback-option"
            onClick={() => selectFeedback("poor")}
          >
            Poor
          </div>
        </div>

        <div className="selected-feedback">
          Selected Feedback: {selectedFeedback}
        </div>

        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="feedback">Your Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" required></textarea>

          <input type="submit" onClick={response} value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Feedback;
