import React from 'react';
import './LoadingBar.css';

const LoadingBar = ({ percent, color }) => {

  const progressBarStyle = {
    width: percent + '%',
    backgroundColor: color
  };

  return (
    <div className="loading-bar-container">
        <div className="loading-bar">
          <div className="loading-progress" style={progressBarStyle}></div>
        </div>
    </div>
  );
};

export default LoadingBar;
