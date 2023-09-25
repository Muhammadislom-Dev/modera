import React from "react";
import video from "../assets/modera.mp4";
import "./Loader.css";

function Loader() {
  return (
    <div className="loading">
      <video
        width="100%"
        height="100%"
        autoPlay
        playsInline
        muted
        src={video}
      />
    </div>
  );
}

export default Loader;
