import React, { Component } from "react";
import PropTypes from "prop-types";

const SemiCircleProgress = ({
  stroke = "#02B732",
  strokeWidth = 10,
  background = "#D0D0CE",
  diameter = 200,
  orientation = "up",
  direction = "right",
  showPercentValue = false,
  percentage
}) => {
  const coordinateForCircle = diameter / 2;
  const radius = (diameter - 2 * strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const semiCirclePercentage = percentage * (circumference / 100);

  let rotation;
  if (orientation === "down") {
    if (direction === "left") {
      rotation = "rotate(180deg) rotateY(180deg)";
    } else {
      rotation = "rotate(180deg)";
    }
  } else {
    if (direction === "right") {
      rotation = "rotateY(180deg)";
    }
  }

  return (
    <div className="semicircle-container" style={{ position: "relative" }}>
      <svg
        width={diameter}
        height={diameter / 2}
        style={{ transform: rotation, overflow: "hidden" }}
      >
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={background}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage,
            transition:
              "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
          }}
        />
      </svg>
      {showPercentValue && (
        <span
          className="semicircle-percent-value"
          style={{
            width: "100%",
            left: "0",
            textAlign: "center",
            bottom: orientation === "down" ? "auto" : "0",
            position: "absolute"
          }}
        >
          {percentage}%
        </span>
      )}
    </div>
  );
};

SemiCircleProgress.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  background: PropTypes.string,
  diameter: PropTypes.number,
  orientation: PropTypes.string,
  direction: PropTypes.string,
  showPercentValue: PropTypes.bool,
  percentage: PropTypes.number
};

export default SemiCircleProgress;
