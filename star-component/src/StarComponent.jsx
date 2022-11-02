import React, { useState } from "react";
import "./App.css";

const StarComponent = () => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const Rate = (index) => {
    setRating(index);
  };

  return (
    <div style={{ display: "flex" }}>
      {stars.map((elem, ind) => {
        ind = ind + 1;
        return (
          <div
            key={ind}
            className={ind <= (rating || hover) ? "filled" : "unfilled"}
            onClick={() => Rate(ind)}
            onMouseEnter={() => setHover(ind)}
            onMouseLeave={() => setHover(rating)}
          >
            <h1>&#9733;</h1>
          </div>
        );
      })}
    </div>
  );
};

export default StarComponent;
