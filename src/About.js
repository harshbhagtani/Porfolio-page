import React from "react";
import "./about.css";
import user from "./assets/user.png";
import pp from "./assets/pp.jpg";

function About() {
  return (
    <div className="about" id="aboutt">
      <div className="about-header">
        <img src={user}></img>
        <h1 style={{ textAlign: "center" }}>
          About <span style={{ color: "purple" }}>Me</span>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={pp}></img>
        </div>
        <div className="about-right">
          <p style={{ fontWeight: "bold", fontSize: "25px" }}>I'm Harsh</p>
          <p
            style={{
              fontSize: "15px",
              color: "#6600ff",
              marginTop: "-20px",
              fontWeight: "bold",
            }}
          >
            Frontend Web Developer
          </p>
          <p style={{ fontSize: "15px", color: "gray" }}>
            I am a Frontend web Developer.I completed my BTech from IIT Roorkee.
            I am passionate for coding i love solving programming problems.I
            have a good knowledge of data structures and algorithms as well. In
            Frontend web development I am skilled in ReactJs,Redux,JavaScript.
            Everyday working on myself to improve my skills as well as gain new
            skills.
          </p>
          <div className="about-fields">
            <div>
              <span style={{ color: "#6600ff" }}>Age</span>: 22
            </div>
            <div>
              <span style={{ color: "#6600ff" }}>Email</span>:
              harsh.bhagtani1@gmail.com
            </div>
            <div>
              <span style={{ color: "#6600ff" }}>Phone</span>: +91 6264784358
            </div>
            <div>
              <span style={{ color: "#6600ff" }}>Place</span>: Jabalpur,India
              482001
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
