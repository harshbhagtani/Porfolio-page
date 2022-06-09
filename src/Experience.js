import React from "react";
import work from "./assets/work.png";
import "./experience.css";

function Experience() {
  return (
    <div className="experience" id="experirncee">
      <div className="experience-header">
        <img src={work}></img>
        <h1 style={{ textAlign: "center", color: "Black" }}>Experience</h1>
      </div>
      <div className="experience-content">
        <div className="vertcal-timeline">
          <div className="box">
            <img src={work}></img>
          </div>
          <div className="experince-box">
            <h3 style={{ marginLeft: "30px" }}>
              Frontend developer | Shoprox Technologies{" "}
              <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                May-June 2021
              </span>
            </h3>
            <ul>
              <li>
                It was a 2 month summer internship in which I worked on
                developing an asset management web app
              </li>
              <li>
                Reactjs was used for developing the frontend and Redux was used
                for the state management of the app, React-router was used for
                routing.
              </li>
              <li>
                Worked on developing the frontend UI ,Integrating the backend
                Apis to frontend, developed different reusable components for
                the web app.
              </li>
            </ul>
          </div>
          {/** */}
          <div className="box" style={{ top: "400px" }}>
            <img src={work}></img>
          </div>
          <div className="experince-box" style={{ top: "400px" }}>
            <h3 style={{ marginLeft: "30px" }}>
              Frontend developer | Electura{" "}
              <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                Nov-Dec 2020
              </span>
            </h3>
            <ul>
              <li>
                Worked on making their student and teacher portal using
                javascript library Reactjs.
              </li>
              <li>Integrated frontend with backend REST Apis.</li>
              <li>Integrated third party apis like GoogleApis in frontend.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
