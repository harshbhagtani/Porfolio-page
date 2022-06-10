import React, { useState } from "react";
import "./projects.css";
import coding from "./assets/coding.png";
import Tilt from "react-parallax-tilt";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "social-web-app",
      description: "ReactJs, Redux, JavaScript, JWT-Auth, Css",
      view: "https://harshbhagtani.github.io/Login",
      code: "https://github.com/harshbhagtani/social-web-app",
    },
    {
      name: "Whatapp Clone",
      description: "ReactJs, Redux, JavaScript, FireBase, Css",
      code: "https://github.com/harshbhagtani/Whatsapp-clone",
      view: "https://whatsapp-clone-b608b.web.app/",
    },
    {
      name: "Ping Pong game",
      description: "JavaScrip,HTML, Css",
      view: "https://harshbhagtani.github.io/Ping-pong-game/",
      code: "https://github.com/harshbhagtani/Ping-pong-game",
    },
    {
      name: "Covid-19 tracker",
      description: "ReactJs, JavaScript, Html, Css,",
      view: "https://covid-19-tracker-59515.web.app/",
      code: "https://github.com/harshbhagtani/Covid19-Tracker",
    },
  ]);

  return (
    <div className="projects" id="projectss">
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
                  TechStack: {data.description}
                </p>
              </div>
              <a href={data.view} target="_blank">
                <button style={{ left: "10px" }}>View</button>
              </a>
              <a href={data.code} target="_blank">
                <button style={{ right: "10px" }}>Code {"</>"}</button>
              </a>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
