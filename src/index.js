import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const SemiCircleProgress = ({
  stroke = "#02B732",
  strokeWidth = 10,
  background = "#D0D0CE",
  diameter = 200,
  orientation = "up",
  percentage
}) => {
  const coordinateForCircle = diameter / 2;
  const radius = (diameter - 2 * strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius * (180 / 360);
  const rotation =
    orientation === "down" ? "rotate(-180deg)" : "rotate3d(0,1,0, -180deg)";
  const semiCirclePercentage = percentage * (circumference / 100);

  return (
    <div className={styles.root}>
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
    </div>
  );
};

SemiCircleProgress.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  background: PropTypes.string,
  diameter: PropTypes.number,
  orientation: PropTypes.string,
  percentage: PropTypes.number
};

export default SemiCircleProgress;
