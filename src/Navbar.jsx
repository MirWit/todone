import React from "react";
import logo from "./images/egg-stego.jpg";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: "30px", marginRight: "10px" }}
      />
      <h1 style={{ margin: "0" }}>to-done</h1>
    </nav>
  );
}
