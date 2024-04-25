import React from "react";
import logo from "./images/egg2.png";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: "35px", marginRight: "10px" }}
      />
      <h2 style={{ margin: "0" }}>TO-DONE</h2>
    </nav>
  );
}
