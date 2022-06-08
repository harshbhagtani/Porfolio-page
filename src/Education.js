import React from "react";
import "./education.css";
import education from "./assets/education.png";
import IIT from "./assets/IIT.jpg";
import CCB from "./assets/CCB.jpg";
import twelve from "./assets/12th.jpg";

function Education() {
  return (
    <div className="education" id="educationn">
      <div className="education-header">
        <img src={education}></img>
        <h1 style={{ textAlign: "center" }}>
          My <span style={{ color: "purple" }}>Education</span>
        </h1>
      </div>

      <div className="education-content">
        <div>
          <img src={IIT}></img>
          <div>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#001e80",
                marginBottom: "10px",
              }}
            >
              Indian Institue of Technology Roorkee
            </p>
            <p>Bachelor of Technology| C.G.P.A-8 </p>
            <p>2018-2022</p>
          </div>
        </div>
        <div>
          <img src={twelve}></img>
          <div>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#001e80",
                marginBottom: "10px",
              }}
            >
              AP Narmada Senior Secondary School
            </p>
            <p>12th | MP Board | 85% </p>
            <p>2017-2018</p>
          </div>
        </div>
        <div>
          <img src={CCB}></img>
          <div>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#001e80",
                marginBottom: "10px",
              }}
            >
              Christ church Boys Senior secondary school
            </p>
            <p>10th |C.B.S.E| C.G.P.A-10</p>
            <p>2015-16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
