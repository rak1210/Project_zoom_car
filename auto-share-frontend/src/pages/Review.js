import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Review.css";

function Review() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleReview = () => {
    alert("Your review has been saved!");
    // Save the review to the database here
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="review-container">
      <h2>Write Review</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleReview(); }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        /><br />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        /><br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Review;