import React from 'react';
import './GradientText.css'; // Import the styles for the GradientText component

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], // Default gradient colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Show border overlay if true
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
