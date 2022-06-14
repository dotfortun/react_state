import React, { useState } from "react";

import "./traffic_light.css";

const Light = ({ color, isLit, callback }) => {
  return (
    <div
      className={[color, "light", isLit ? "is_lit" : null]
        .filter((elem) => !!elem)
        .join(" ")}
      style={{ backgroundColor: color }}
      onClick={callback}
    ></div>
  );
};

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleClick = (event) => {
    setColor(event.target.classList[0]);
  };

  return (
    <div className="traffic_light">
      <Light
        color="red"
        isLit={color == "red" ? true : false}
        callback={handleClick}
      />
      <Light
        color="yellow"
        isLit={color == "yellow" ? true : false}
        callback={handleClick}
      />
      <Light
        color="green"
        isLit={color == "green" ? true : false}
        callback={handleClick}
      />
    </div>
  );
};

export default TrafficLight;
