import React from "react";
import "./header.css";
import hb from "./assets/HB.webp";

function Header() {
  return (
    <div className="header">
      <div className="right">
        <img src={hb}></img>
        <p
          style={{
            fontWeight: "bold",
            fontFamily: "cursive",
            fontSize: "20px",
          }}
        >
          Harsh
        </p>
      </div>

      <div className="left">
        <a href="#homee">Home</a>
        <a href="#aboutt">About</a>
        <a href="#skillss">Skills</a>
        <a href="#educationn">Education</a>
        <a href="#projectss">Projects</a>
        <a href="#experirncee">Experience</a>
      </div>
    </div>
  );
}

export default Header;
