import React, { useState } from "react";
import "./projects.css";
import coding from "./assets/coding.png";
import Tilt from "react-parallax-tilt";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Amazon Clone",
      description: "",
      view: "",
      code: "",
    },
    {
      name: "Whatapp Clone",
      description: "",
      view: "",
      code: "",
    },
    {
      name: "Sort visualizer",
      description: "",
      view: "",
      code: "",
    },
    {
      name: "Covid-19 tracker",
      description: "",
      view: "",
      code: "",
    },
  ]);

  return (
    <div className="projects">
      <div className="projects-header">
        <img src={coding}></img>
        <h1 style={{ textAlign: "center", color: "white" }}>
          Personal <span style={{ color: "yellow" }}>Projects</span>
        </h1>
      </div>
      <div className="projects-content">
        {projects.map((data) => {
          return (
            <Tilt className="tiles">
              <h2 style={{}}>{data.name}</h2>
              <div style={{ width: "90%", margin: "auto" }}>
                {" "}
                <p
                  style={{
                    fontSize: "15px",
                    color: "white",
                    width: "100%",
                  }}
                >
                  TechStack:JavaScript, HTML, Css, ReactJs, Redux, Firebase.
                </p>
              </div>

              <button style={{ left: "10px" }}>View</button>
              <button style={{ right: "10px" }}>Code {"</>"}</button>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
