import React from "react";
import MusicPlayer from "./MusicPlayer";
import BackToTop from "./BackToTop";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons-container">
      <BackToTop />
      <MusicPlayer />
    </div>
  );
};

export default FloatingButtons;
