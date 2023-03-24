import React from "react";
import "./StarRating.css";

function StarRating() {
  return (
    <div className="rating">
      <input type="range" name="rate" id="rate" min="0" max="5" />
    </div>
  );
}

export default StarRating;
