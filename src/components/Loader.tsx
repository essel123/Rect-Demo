import React from 'react';
import '../css/loader.css'; // Assuming you have the CSS file for styling

const Loader: React.FC = () => {
  return (
    <div className="volume-loader-container">
      <div className="volume-loader">
        <div className="volume-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
