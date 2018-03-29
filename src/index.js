import React, { Component } from "react";
import PropTypes from "prop-types";

const SemiCircleProgress = ({
  stroke = "#02B732",
  strokeWidth = 10,
  background = "#D0D0CE",
  diameter = 200,
  orientation = "up",
  showPercentValue = false,
  percentage
}) => {
  const coordinateForCircle = diameter / 2;
  const radius = (diameter - 2 * strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius * (180 / 360);
  const rotation =
    orientation === "down" ? "rotate(-180deg)" : "rotate3d(0,1,0, -180deg)";
  const semiCirclePercentage = percentage * (circumference / 100);

  return (
    <div className="semicircle-container" style={{ position: "relative" }}>
      <svg width={diameter} height={diameter / 2}>
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={background}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference,
            transformOrigin: "center center",
            transform: rotation
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
            transformOrigin: "center center",
            transform: rotation
          }}
        />
      </svg>
      {showPercentValue && (
        <span
          className="semicircle-percent-value"
          style={{
            left: `calc((${diameter / 2}px - ${
              percentage < 100 ? (percentage > 10 ? "16px" : "11.5px") : "20px"
            } ))`,
            bottom: orientation === "up" ? "0" : "none",
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
  showPercentValue: PropTypes.bool,
  percentage: PropTypes.number
};

export default SemiCircleProgress;
