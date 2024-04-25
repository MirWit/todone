import React from "react";
import brokenEgg from "../images/broken-egg.png";

export default function NotFoundPage() {
  return (
    <div>
      <img
        className="broken-egg-image"
        src={brokenEgg}
        alt="broken egg"
        style={{ height: "150px", marginRight: "10px" }}
      />
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}
